import {decodeString} from "./AppComponents/helpers";
import {BiLogoJavascript, BiLogoRedux, BiLogoTypescript} from "react-icons/bi";
import {type IconType} from "react-icons";
import {DiCss3Full, DiHtml5} from "react-icons/di";
import {FaGithub, FaGitSquare, FaNode, FaSass} from "react-icons/fa";
import {GrGraphQl, GrReactjs} from "react-icons/gr";
import {
  SiAffinity,
  SiCoreldraw,
  SiCypress,
  SiFirebase,
  SiJest,
  SiMaterialdesign,
  SiQwik,
  SiSqlite,
  SiStyledcomponents,
  SiTestinglibrary,
  SiVite,
  SiVitest,
  SiWebpack,
} from "react-icons/si";
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
  Icon?: IconType | typeof FlagIcon;
  iconProps?: object;
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
  location?: string;
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

export const fileName = "Hanna_Gaudasinska_Zapasnik_CV_ENG.pdf";
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
          descKey: "location_warsaw",
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

const FlagIcon = ({flag}: {flag?: string}) =>
  flag && <span className="leading-none">{flag}</span>;

export const langSection: SectionProps = {
  headlineKey: "languages_headline",
  blocks: [
    {
      list: [
        {
          Icon: FlagIcon,
          iconProps: {flag: "🇵🇱"},
          titleKey: "languages_polish_title",
          stars: 5,
          descKey: "languages_native_desc",
        },
        {
          Icon: FlagIcon,
          iconProps: {flag: "🇬🇧"},
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
        {Icon: GrReactjs, titleKey: "technologies_react_title", stars: 4},
        {
          Icon: BiLogoJavascript,
          titleKey: "technologies_javascript_title",
          stars: 4,
        },
        {
          Icon: BiLogoTypescript,
          titleKey: "technologies_typescript_title",
          stars: 3,
        },
        {Icon: SiWebpack, titleKey: "technologies_webpack_title", stars: 3},
        {Icon: RiNextjsFill, titleKey: "technologies_nextjs_title", stars: 2},
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
          Icon: SiMaterialdesign,
          titleKey: "technologies_material_ui",
          stars: 2,
          // hidden: true,
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
        {Icon: TbSql, titleKey: "technologies_sql_title", stars: 3},
        {Icon: GrGraphQl, titleKey: "technologies_graphql_title", stars: 4},
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
        {Icon: SiCypress, titleKey: "technologies_cypress_title", stars: 2},
        {Icon: SiVitest, titleKey: "technologies_vitest_title", stars: 4},
        {
          Icon: SiTestinglibrary,
          titleKey: "technologies_testing_library_title",
          stars: 3,
        },
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
        // {
        //   Icon: SiGithubactions,
        //   titleKey: "tools_github_actions_title",
        //   stars: 2,
        // },
        {Icon: FiFigma, titleKey: "tools_figma_title", stars: 3},
        {
          Icon: FaGithub,
          titleKey: "tools_github_title",
          stars: 4,
        },
        // {
        //   Icon: VscGithubProject,
        //   titleKey: "tools_github_projects_title",
        //   stars: 4,
        // },
        {
          Icon: SiCoreldraw,
          titleKey: "tools_corel_photo_title",
          stars: 2,
        },
        {
          Icon: SiAffinity,
          titleKey: "tools_affinity_photo_title",
          stars: 3,
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
    startDate: "2021-04",
    listKeys: [
      "jobs_stratokit_responsibility_1",
      "jobs_stratokit_responsibility_2",
      "jobs_stratokit_responsibility_3",
      "jobs_stratokit_responsibility_4",
      "jobs_stratokit_responsibility_5",
      "jobs_stratokit_responsibility_6",
    ],
    location: "location_warsaw",
  },
  {
    titleKey: "jobs_yaska_title",
    subtitleKey: "jobs_yaska_subtitle",
    startDate: "2017-10",
    endDate: "2021-04",
    listKeys: [
      "jobs_yaska_responsibility_1",
      "jobs_yaska_responsibility_2",
      "jobs_yaska_responsibility_3",
    ],
    location: "location_warsaw",
  },
  {
    titleKey: "jobs_voicemap_title",
    subtitleKey: "jobs_voicemap_subtitle",
    listKeys: ["jobs_voicemap_text"],
    startDate: "2016-12",
  },
  {
    titleKey: "jobs_tns_title",
    subtitleKey: "jobs_tns_subtitle",
    startDate: "2013-05",
    endDate: "2015-05",
    listKeys: ["jobs_tns_responsibility_1"],
    location: "location_warsaw",
  },
  {
    titleKey: "jobs_acnielsen_title",
    subtitleKey: "jobs_acnielsen_subtitle",
    startDate: "2012-09",
    endDate: "2013-03",
    listKeys: ["jobs_acnielsen_responsibility_1"],
    location: "location_warsaw",
  },
  {
    titleKey: "jobs_loreal_title",
    subtitleKey: "jobs_loreal_subtitle",
    startDate: "2010-06",
    endDate: "2010-12",
    listKeys: ["jobs_loreal_responsibility_1"],
    location: "location_warsaw",
  },
];

export const educationBlocks: BlockProps[] = [
  {
    titleKey: "education_warsaw_economics_title",
    subtitleKey: "education_warsaw_economics_subtitle",
    startDate: "2005-09",
    endDate: "2012-07",
  },
  {
    titleKey: "education_warsaw_sociology_title",
    subtitleKey: "education_warsaw_sociology_subtitle",
    startDate: "2007-09",
    endDate: "2012-06",
  },
  {
    titleKey: "education_maastricht_title",
    subtitleKey: "education_maastricht_subtitle",
    startDate: "2010-01",
    endDate: "2010-06",
  },
];

export const workshopBlocks: BlockProps[] = [
  {
    subtitleKey: "workshops_google_dev_days_subtitle",
    listKeys: ["workshops_google_dev_days_text"],
    startDate: "2017-09",
    endDate: "2017-09",
    location: "location_krakow",
  },
  {
    subtitleKey: "workshops_coders_lab_subtitle",
    listKeys: ["workshops_coders_lab_text"],
    startDate: "2017-04",
    endDate: "2017-06",
    location: "location_warsaw",
  },
  // {
  //   titleKey: "workshops_open_university_title",
  //   listKeys:[ "workshops_open_university_text"],
  //   startDate: "2017-04",
  //   endDate: "2017-06",
  // },
];
