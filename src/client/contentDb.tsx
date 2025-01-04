import {decodeString} from "./AppComponents/helpers";
import {BiLogoRedux, BiLogoTypescript} from "react-icons/bi";
import {type IconType} from "react-icons";
import {DiCss3Full, DiHtml5} from "react-icons/di";
import {FaGithub, FaGitSquare, FaNode, FaSass} from "react-icons/fa";
import {GrGraphQl, GrReactjs} from "react-icons/gr";
import {
  SiAffinity,
  SiCoreldraw,
  SiCypress,
  SiFirebase,
  SiGithubactions,
  SiJest,
  SiQwik,
  SiSqlite,
  SiStyledcomponents,
  SiTestinglibrary,
  SiVite,
  SiVitest,
  SiWebpack,
} from "react-icons/si";
import {VscGithubProject} from "react-icons/vsc";
import {RiNextjsFill, RiTailwindCssLine} from "react-icons/ri";
import {FiFigma} from "react-icons/fi";
import {TbSql} from "react-icons/tb";
import {FaGitAlt} from "react-icons/fa6";
import {TranslationKey} from "../../lib/i18n";

export interface BlockProps {
  desc?: string;
  descKey?: TranslationKey;
  endDate?: string;
  hidden?: boolean;
  Icon?: IconType;
  linkType?: string;
  list?: string[];
  listKeys?: TranslationKey[];
  stars?: number;
  startDate?: string;
  subtitle?: string;
  subtitleKey?: TranslationKey;
  text?: string;
  textKey?: TranslationKey;
  title?: string;
  titleKey?: TranslationKey;
}

export interface SectionProps {
  headlineKey: TranslationKey;
  blocks: {list: BlockProps[]}[];
}

export const firstName = "Hanna";
export const lastName = "Gaudasińska-Zapaśnik";
export const fullName = `${firstName} ${lastName}`;
export const jobTitle = `JavaScript Developer`;

export const email = decodeString("ih{/efwjAhnbjm/dpn");
export const phone = decodeString(",59617153:48");
export const www = "https://hgzdev.github.io/cv";
export const linkedIn =
  "https://www.linkedin.com/in/hanna-gaudasinska-zapasnik";
export const github = "https://github.com/HGZdev";

export const fileName = "Hanna_Gaudasinska_Zapasnik_CV_ENG+PL.pdf";
export const pdfPath = `/docs/${fileName}`;

export const aboutTextKeys: TranslationKey[] = [
  "about_text_paragraph_1",
  "about_text_paragraph_2",
  "about_text_paragraph_3",
];

export const aboutGithubInvitationKeys: {
  textKey: TranslationKey;
  linkKey: TranslationKey;
} = {
  textKey: "about_github_invitation_text",
  linkKey: "about_github_link_text",
};

export const personalSection: SectionProps = {
  headlineKey: "personal_headline",
  blocks: [
    {
      list: [
        {
          titleKey: "personal_location_title",
          descKey: "personal_location_desc",
        },
        {titleKey: "personal_phone_title", desc: phone, linkType: "tel:"},
        {titleKey: "personal_email_title", desc: email, linkType: "mailto:"},
        {titleKey: "personal_www_title", desc: www, linkType: ""},
        {titleKey: "personal_github_title", desc: github, linkType: ""},
        {
          titleKey: "personal_linkedin_title",
          desc: linkedIn,
          linkType: "",
          hidden: true,
        },
      ],
    },
  ],
};

export const hobbiesSection: SectionProps = {
  headlineKey: "hobbies_headline",
  blocks: [
    {
      list: [{descKey: "hobbies_desc"}],
    },
  ],
};

export const langSection: SectionProps = {
  headlineKey: "languages_headline",
  blocks: [
    {
      list: [
        {
          titleKey: "languages_polish_title",
          stars: 5,
          descKey: "languages_native_desc",
        },
        {
          titleKey: "languages_english_title",
          stars: 4,
          descKey: "languages_advanced_desc",
        },
      ],
    },
  ],
};

export const techSection: SectionProps = {
  headlineKey: "technologies_headline",
  blocks: [
    {
      list: [
        {
          Icon: BiLogoTypescript,
          titleKey: "technologies_typescript_title",
          stars: 3,
        },
        {Icon: GrReactjs, titleKey: "technologies_react_title", stars: 4},
        {Icon: RiNextjsFill, titleKey: "technologies_nextjs_title", stars: 1},
        {Icon: SiWebpack, titleKey: "technologies_webpack_title", stars: 3},
        {Icon: SiVite, titleKey: "technologies_vite_title", stars: 2},
        {
          Icon: SiQwik,
          titleKey: "technologies_qwik_title",
          stars: 1,
          hidden: true,
        },
      ],
    },
    {
      list: [
        {
          Icon: DiHtml5,
          titleKey: "technologies_html_title",
          stars: 4,
          hidden: true,
        },
        {
          Icon: DiCss3Full,
          titleKey: "technologies_css_title",
          stars: 4,
          hidden: true,
        },
        {
          Icon: RiTailwindCssLine,
          titleKey: "technologies_tailwind_title",
          stars: 3,
        },
        {
          Icon: SiStyledcomponents,
          titleKey: "technologies_styled_components_short_title",
          stars: 4,
        },
        {
          Icon: FaSass,
          titleKey: "technologies_sass_title",
          stars: 2,
          hidden: true,
        },
      ],
    },
    {
      list: [
        {Icon: FaNode, titleKey: "technologies_nodejs_title", stars: 3},
        {Icon: GrGraphQl, titleKey: "technologies_graphql_title", stars: 4},
        {Icon: TbSql, titleKey: "technologies_sql_title", stars: 3},
        {Icon: SiSqlite, titleKey: "technologies_sqlite_title", stars: 3},
        {
          Icon: SiFirebase,
          titleKey: "technologies_firebase_title",
          stars: 2,
          hidden: true,
        },
        {
          Icon: BiLogoRedux,
          titleKey: "technologies_redux_title",
          stars: 2,
          hidden: true,
        },
      ],
    },
    {
      list: [
        {Icon: SiJest, titleKey: "technologies_jest_title", stars: 4},
        {Icon: SiVitest, titleKey: "technologies_vitest_title", stars: 4},
        {
          Icon: SiTestinglibrary,
          titleKey: "technologies_testing_library_title",
          stars: 3,
        },
        {Icon: SiCypress, titleKey: "technologies_cypress_title", stars: 2},
      ],
    },
  ],
};

export const toolsSection: SectionProps = {
  headlineKey: "tools_headline",
  blocks: [
    {
      list: [
        {Icon: FaGitSquare, titleKey: "tools_git_title", stars: 3},
        {Icon: FaGitAlt, titleKey: "tools_gitup_title", stars: 4, hidden: true},
        {
          Icon: FaGithub,
          titleKey: "tools_github_title",
          stars: 4,
        },
        {
          Icon: SiGithubactions,
          titleKey: "tools_github_actions_title",
          stars: 2,
        },
        {
          Icon: VscGithubProject,
          titleKey: "tools_github_projects_title",
          stars: 4,
        },
        {Icon: FiFigma, titleKey: "tools_figma_title", stars: 3},
        {
          Icon: SiAffinity,
          titleKey: "tools_affinity_photo_title",
          stars: 3,
          hidden: true,
        },
        {
          Icon: SiCoreldraw,
          titleKey: "tools_corel_photo_title",
          stars: 2,
          hidden: true,
        },
      ],
    },
  ],
};

export const jobBlock: BlockProps[] = [
  {
    titleKey: "jobs_stratokit_title",
    subtitleKey: "jobs_stratokit_subtitle",
    startDate: "04.2021",
    listKeys: [
      "jobs_stratokit_responsibility_1",
      "jobs_stratokit_responsibility_2",
      "jobs_stratokit_responsibility_3",
      "jobs_stratokit_responsibility_4",
      "jobs_stratokit_responsibility_5",
      "jobs_stratokit_responsibility_6",
    ],
  },
  {
    titleKey: "jobs_yaska_title",
    subtitleKey: "jobs_yaska_subtitle",
    startDate: "10.2017",
    endDate: "04.2021",
    listKeys: [
      "jobs_yaska_responsibility_1",
      "jobs_yaska_responsibility_2",
      "jobs_yaska_responsibility_3",
    ],
  },
  {
    titleKey: "jobs_voicemap_title",
    textKey: "jobs_voicemap_text",
    startDate: "12.2016",
  },
  {
    titleKey: "jobs_tns_title",
    subtitleKey: "jobs_tns_subtitle",
    startDate: "05.2013",
    endDate: "05.2015",
    textKey: "jobs_tns_responsibility_1",
  },
  {
    titleKey: "jobs_acnielsen_title",
    subtitleKey: "jobs_acnielsen_subtitle",
    startDate: "09.2012",
    endDate: "03.2013",
    textKey: "jobs_acnielsen_responsibility_1",
  },
  {
    titleKey: "jobs_loreal_title",
    subtitleKey: "jobs_loreal_subtitle",
    startDate: "06.2010",
    endDate: "12.2010",
    textKey: "jobs_loreal_responsibility_1",
  },
];

export const educationBlocks: BlockProps[] = [
  {
    titleKey: "education_warsaw_economics_title",
    subtitleKey: "education_warsaw_economics_subtitle",
    startDate: "09.2005",
    endDate: "07.2012",
  },
  {
    titleKey: "education_warsaw_sociology_title",
    subtitleKey: "education_warsaw_sociology_subtitle",
    startDate: "09.2007",
    endDate: "06.2012",
  },
  {
    titleKey: "education_maastricht_title",
    subtitleKey: "education_maastricht_subtitle",
    startDate: "01.2010",
    endDate: "06.2010",
  },
];

export const workshopBlocks: BlockProps[] = [
  {
    titleKey: "workshops_google_dev_days_title",
    textKey: "workshops_google_dev_days_text",
    startDate: "09.2017",
    endDate: "09.2017",
  },
  {
    titleKey: "workshops_coders_lab_title",
    textKey: "workshops_coders_lab_text",
    startDate: "04.2017",
    endDate: "06.2017",
  },
  {
    titleKey: "workshops_open_university_title",
    textKey: "workshops_open_university_text",
    startDate: "04.2017",
    endDate: "06.2017",
  },
];
