// tests/mockServerSetup.ts
import 'jest-styled-components';
import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

beforeAll(() => {});

beforeEach(() => {});

afterEach(() => {
  vi.clearAllMocks();
  // testing-library clean up
  cleanup();
});

afterAll(() => {});
