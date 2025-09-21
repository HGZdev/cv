import {
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTypescript,
} from 'react-icons/bi';
import { DiCss3Full, DiHtml5 } from 'react-icons/di';
import { FaGithub, FaGitSquare, FaNode, FaSass } from 'react-icons/fa';
import { FaGitAlt, FaMasksTheater } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { GrGraphQl, GrReactjs } from 'react-icons/gr';
import { RiNextjsFill, RiTailwindCssLine } from 'react-icons/ri';
import {
  SiAffinity,
  SiCoreldraw,
  SiCypress,
  SiFirebase,
  SiGithubactions,
  SiJest,
  SiJira,
  SiMaterialdesign,
  SiQwik,
  SiSqlite,
  SiStyledcomponents,
  SiTestinglibrary,
  SiVite,
  SiVitest,
  SiWebpack,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

import {
  FlagIcon,
  LanguageSkill,
  SkillSection,
  TechSkill,
  ToolSkill,
} from './types';

export const languageSkills: LanguageSkill[] = [
  {
    Icon: FlagIcon,
    iconProps: { flag: '🇵🇱' },
    titleKey: 'languages_polish_title',
    stars: 5,
    descKey: 'languages_native_desc',
  },
  {
    Icon: FlagIcon,
    iconProps: { flag: '🇬🇧' },
    titleKey: 'languages_english_title',
    stars: 4,
    descKey: 'languages_advanced_desc',
  },
];

export const techSkills: TechSkill[] = [
  { Icon: GrReactjs, titleKey: 'technologies_react_title', stars: 4 },
  {
    Icon: BiLogoJavascript,
    titleKey: 'technologies_javascript_title',
    stars: 4,
  },
  {
    Icon: BiLogoTypescript,
    titleKey: 'technologies_typescript_title',
    stars: 3,
  },
  { Icon: SiWebpack, titleKey: 'technologies_webpack_title', stars: 3 },
  { Icon: RiNextjsFill, titleKey: 'technologies_nextjs_title', stars: 2 },
  { Icon: SiVite, titleKey: 'technologies_vite_title', stars: 2 },
  {
    Icon: SiQwik,
    titleKey: 'technologies_qwik_title',
    stars: 1,
    hiddenInResume: true,
  },
  {
    Icon: DiHtml5,
    titleKey: 'technologies_html_title',
    stars: 4,
    hiddenInResume: true,
  },
  {
    Icon: DiCss3Full,
    titleKey: 'technologies_css_title',
    stars: 4,
    hiddenInResume: true,
  },
  {
    Icon: RiTailwindCssLine,
    titleKey: 'technologies_tailwind_title',
    stars: 3,
  },
  {
    Icon: SiMaterialdesign,
    titleKey: 'technologies_material_ui',
    stars: 2,
    hiddenInResume: true,
  },
  {
    Icon: SiStyledcomponents,
    titleKey: 'technologies_styled_components_short_title',
    stars: 4,
  },
  {
    Icon: FaSass,
    titleKey: 'technologies_sass_title',
    stars: 2,
    hiddenInResume: true,
  },
  { Icon: FaNode, titleKey: 'technologies_nodejs_title', stars: 3 },
  { Icon: TbSql, titleKey: 'technologies_sql_title', stars: 3 },
  { Icon: GrGraphQl, titleKey: 'technologies_graphql_title', stars: 4 },
  { Icon: SiSqlite, titleKey: 'technologies_sqlite_title', stars: 3 },
  {
    Icon: SiFirebase,
    titleKey: 'technologies_firebase_title',
    stars: 2,
    hiddenInResume: true,
  },
  {
    Icon: BiLogoRedux,
    titleKey: 'technologies_redux_title',
    stars: 2,
    hiddenInResume: true,
  },
  { Icon: SiJest, titleKey: 'technologies_jest_title', stars: 4 },
  { Icon: SiVitest, titleKey: 'technologies_vitest_title', stars: 4 },
  {
    Icon: SiTestinglibrary,
    titleKey: 'technologies_testing_library_title',
    stars: 3,
  },
  { Icon: FaMasksTheater, titleKey: 'technologies_playwright_title', stars: 4 },
  { Icon: SiCypress, titleKey: 'technologies_cypress_title', stars: 2 },
];

export const toolSkills: ToolSkill[] = [
  { Icon: FaGitSquare, titleKey: 'tools_git_title', stars: 3 },
  {
    Icon: FaGitAlt,
    titleKey: 'tools_gitup_title',
    stars: 4,
    hiddenInResume: true,
  },
  { Icon: SiGithubactions, titleKey: 'tools_github_actions_title', stars: 2 },
  { Icon: FiFigma, titleKey: 'tools_figma_title', stars: 3 },
  { Icon: FaGithub, titleKey: 'tools_github_title', stars: 4 },
  { Icon: SiJira, titleKey: 'tools_jira_title', stars: 4 },
  { Icon: SiCoreldraw, titleKey: 'tools_corel_photo_title', stars: 2 },
  {
    Icon: SiAffinity,
    titleKey: 'tools_affinity_photo_title',
    stars: 3,
    hiddenInResume: true,
  },
];

export const languageSection: SkillSection = {
  headlineKey: 'languages_headline',
  blocks: [{ list: languageSkills }],
};

export const techSection: SkillSection = {
  headlineKey: 'technologies_headline',
  blocks: [
    { list: techSkills.slice(0, 7) },
    { list: techSkills.slice(7, 13) },
    { list: techSkills.slice(13, 19) },
    { list: techSkills.slice(19) },
  ],
};

export const toolsSection: SkillSection = {
  headlineKey: 'tools_headline',
  blocks: [{ list: toolSkills }],
};
