# Deployment Guide

## Table of Contents

1. [Overview](#overview)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Local Development](#local-development)
4. [Production Build](#production-build)
5. [Environment Configuration](#environment-configuration)
6. [Build Optimization](#build-optimization)
7. [Troubleshooting](#troubleshooting)
8. [Monitoring](#monitoring)

## Overview

This CV website is designed to be deployed as a static site on GitHub Pages. The application uses Vite as the build tool and supports both browser router and hash router for compatibility with GitHub Pages hosting.

### Deployment Targets

- **Primary**: GitHub Pages (https://hgzdev.github.io/cv)
- **Development**: Local development server
- **Preview**: Local production preview

## GitHub Pages Deployment

### Automatic Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch.

#### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: latest

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build
        env:
          VITE_BASE_URL: /cv/
          VITE_HASH_ROUTER: true

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### Manual Deployment

#### 1. Build the Application

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build
```

#### 2. Deploy to GitHub Pages

```bash
# Install gh-pages package
pnpm add -D gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "gh-pages -d build"
}

# Deploy
pnpm deploy
```

#### 3. Configure GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Select "/ (root)" folder

### GitHub Pages Configuration

#### Repository Settings

1. **Pages Source**: Deploy from branch `gh-pages`
2. **Branch**: `gh-pages` (root directory)
3. **Custom Domain**: Optional (e.g., `yourname.com`)

#### Environment Variables for GitHub Pages

```bash
# .env.production
VITE_BASE_URL=/cv/
VITE_HASH_ROUTER=true
VITE_GA_ID=your-google-analytics-id
```

## Local Development

### Development Server

```bash
# Start development server
pnpm dev

# Server will be available at http://localhost:3000
```

### Development Configuration

Create `.env.local`:

```bash
# Development server port
VITE_LOCAL_PORT=3000

# Preview server port
VITE_LOCAL_SERVER_PORT=4173

# Base URL for local development
VITE_BASE_URL=/

# Disable hash router for local development
VITE_HASH_ROUTER=false

# Google Analytics ID (optional)
VITE_GA_ID=your-ga-id
```

### Hot Reload

The development server supports:

- **Hot Module Replacement (HMR)**: Instant updates without page refresh
- **Fast Refresh**: Preserves component state during updates
- **TypeScript**: Real-time type checking

## Production Build

### Build Process

```bash
# Build for production
pnpm build

# Build output will be in ./build directory
```

### Build Configuration

The build process includes:

1. **TypeScript Compilation**: Type checking and compilation
2. **Asset Optimization**: Image compression and format conversion
3. **Code Splitting**: Route-based code splitting
4. **Bundle Optimization**: Tree shaking and minification
5. **Bundle Analysis**: Performance metrics generation

### Build Output

```
build/
├── index.html              # Main HTML file
├── assets/                 # JavaScript and CSS bundles
│   ├── index-[hash].js     # Main JavaScript bundle
│   └── index-[hash].css    # Main CSS bundle
├── images/                 # Optimized images
├── docs/                   # PDF documents
└── stats.html              # Bundle analysis report
```

### Preview Production Build

```bash
# Build and preview locally
pnpm build
pnpm preview

# Preview server will be available at http://localhost:4173
```

## Environment Configuration

### Environment Variables

| Variable                 | Development | Production | Description                      |
| ------------------------ | ----------- | ---------- | -------------------------------- |
| `VITE_BASE_URL`          | `/`         | `/cv/`     | Base URL for the application     |
| `VITE_HASH_ROUTER`       | `false`     | `true`     | Use hash router for GitHub Pages |
| `VITE_LOCAL_PORT`        | `3000`      | -          | Development server port          |
| `VITE_LOCAL_SERVER_PORT` | `4173`      | -          | Preview server port              |
| `VITE_GA_ID`             | Optional    | Optional   | Google Analytics ID              |

### Environment Files

#### `.env.local` (Development)

```bash
VITE_LOCAL_PORT=3000
VITE_LOCAL_SERVER_PORT=4173
VITE_BASE_URL=/
VITE_HASH_ROUTER=false
VITE_GA_ID=your-ga-id
```

#### `.env.production` (Production)

```bash
VITE_BASE_URL=/cv/
VITE_HASH_ROUTER=true
VITE_GA_ID=your-ga-id
```

### Configuration Management

The application uses a centralized configuration system:

```typescript
// lib/config/getConfig.ts
export const getConfig = () => {
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL || '/';
  const VITE_HASH_ROUTER = import.meta.env.VITE_HASH_ROUTER === 'true';
  const VITE_LOCAL_PORT = import.meta.env.VITE_LOCAL_PORT || '3000';
  const VITE_LOCAL_SERVER_PORT =
    import.meta.env.VITE_LOCAL_SERVER_PORT || '4173';
  const VITE_GA_ID = import.meta.env.VITE_GA_ID;

  return {
    BASE_URL: VITE_BASE_URL,
    VITE_HASH_ROUTER,
    VITE_LOCAL_PORT,
    VITE_LOCAL_SERVER_PORT,
    VITE_GA_ID,
  };
};
```

## Build Optimization

### Bundle Analysis

The build process generates a bundle analysis report:

```bash
# Build with bundle analysis
pnpm build

# Open stats.html in browser to view analysis
open build/stats.html
```

### Optimization Strategies

1. **Code Splitting**: Route-based splitting reduces initial bundle size
2. **Tree Shaking**: Removes unused code from bundles
3. **Minification**: Compresses JavaScript and CSS
4. **Image Optimization**: Converts images to WebP format
5. **Asset Hashing**: Enables long-term caching

### Performance Metrics

Target metrics:

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### Bundle Size Optimization

```bash
# Check bundle size
pnpm build
ls -la build/assets/

# Analyze bundle contents
pnpm build
open build/stats.html
```

## Troubleshooting

### Common Issues

#### 1. Build Failures

**Issue**: TypeScript compilation errors

```bash
# Solution: Check TypeScript errors
pnpm tsc --noEmit
```

**Issue**: Missing environment variables

```bash
# Solution: Check environment configuration
echo $VITE_BASE_URL
echo $VITE_HASH_ROUTER
```

#### 2. Deployment Issues

**Issue**: 404 errors on GitHub Pages

```bash
# Solution: Check base URL configuration
VITE_BASE_URL=/cv/
VITE_HASH_ROUTER=true
```

**Issue**: Assets not loading

```bash
# Solution: Verify asset paths in build output
ls -la build/assets/
```

#### 3. Routing Issues

**Issue**: Routes not working on GitHub Pages

```bash
# Solution: Enable hash router
VITE_HASH_ROUTER=true
```

**Issue**: Redirects not working

```bash
# Solution: Check route configuration in Root.tsx
```

### Debugging Commands

```bash
# Check build output
pnpm build && ls -la build/

# Verify environment variables
pnpm build --mode production

# Check TypeScript errors
pnpm tsc --noEmit

# Lint and fix issues
pnpm lint:fix

# Format code
pnpm format
```

### Log Analysis

```bash
# Check build logs
pnpm build 2>&1 | tee build.log

# Check deployment logs
pnpm deploy 2>&1 | tee deploy.log
```

## Monitoring

### Performance Monitoring

1. **Google Analytics**: Track user interactions and performance
2. **Lighthouse**: Regular performance audits
3. **Core Web Vitals**: Monitor key performance metrics
4. **Bundle Analysis**: Track bundle size over time

### Error Monitoring

1. **Console Errors**: Monitor browser console for errors
2. **Network Errors**: Track failed resource loads
3. **User Reports**: Collect user feedback on issues

### Deployment Monitoring

1. **Build Status**: Monitor CI/CD pipeline status
2. **Deployment Logs**: Track deployment success/failure
3. **Site Availability**: Monitor site uptime and accessibility

### Health Checks

```bash
# Check site availability
curl -I https://hgzdev.github.io/cv/

# Check build status
pnpm build && echo "Build successful"

# Check bundle size
pnpm build && du -sh build/assets/
```

### Performance Budget

Set performance budgets to prevent regression:

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  // Performance budget
  build: {
    chunkSizeWarningLimit: 1000, // 1MB
  },
});
```

## Security Considerations

### Content Security Policy

Implement CSP headers for security:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:;"
/>
```

### HTTPS Enforcement

Ensure all resources are served over HTTPS:

```typescript
// Force HTTPS in production
if (import.meta.env.PROD && location.protocol !== 'https:') {
  location.replace(
    'https:' + window.location.href.substring(window.location.protocol.length)
  );
}
```

### Dependency Security

Regularly audit dependencies for security vulnerabilities:

```bash
# Check for vulnerabilities
pnpm audit

# Fix vulnerabilities
pnpm audit --fix

# Update dependencies
pnpm update
```
