import { AboutText, KeySkill, ResumeConfig } from './types';

export const resumeConfig: ResumeConfig = {
  fileName: 'Hanna_Gaudasinska_Zapasnik_CV_ENG.pdf',
  pdfPath: '/docs/Hanna_Gaudasinska_Zapasnik_CV_ENG.pdf',
};

export const aboutTextKeys: string[] = [
  'about_text_paragraph_1',
  'about_text_paragraph_2',
  'about_text_paragraph_3',
];

export const aboutGithubInvitation: AboutText = {
  textKey: 'about_github_invitation_text',
  linkKey: 'about_github_link_text',
};

export const keySkillsData: KeySkill[][] = [
  [
    { en: 'Frontend Focus', pl: 'Specjalizacja frontendowa' },
    { en: 'JavaScript / TypeScript', pl: 'JavaScript / TypeScript' },
    { en: 'React.js', pl: 'React.js' },
    { en: 'HTML / CSS', pl: 'HTML / CSS' },
    { en: 'Test-driven development', pl: 'Test-driven development' },
    { en: 'Webpack / Vite', pl: 'Webpack / Vite' },
  ],
  [
    {
      en: 'Backend Experience',
      pl: 'Doświadczenie w technologiach serwerowych',
    },
    { en: 'Node.js', pl: 'Node.js' },
    { en: 'SQL / SQLite / PostgreSQL', pl: 'SQL / SQLite / PostgreSQL' },
    {
      en: 'API Integration: REST / GraphQL',
      pl: 'Integracja API: REST / GraphQL',
    },
    { en: 'Git / Github', pl: 'Git / Github' },
    { en: 'CI/CD', pl: 'CI/CD' },
  ],
  [
    { en: 'Adaptability & Fast Learning', pl: 'Szybka adaptacja i nauka' },
    {
      en: 'Excellent Interpersonal Communication',
      pl: 'Bardzo dobra komunikacja interpersonalna',
    },
    { en: 'Agile Methodologies Knowledge', pl: 'Znajomość metod Agile' },
    { en: 'Client Liaison Experience', pl: 'Współpraca z klientem biznesowym' },
    { en: 'Pixel-perfect Approach', pl: 'Dbałość o detale (Pixel-perfect)' },
  ],
];
