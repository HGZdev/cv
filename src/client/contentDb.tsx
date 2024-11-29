import {decodeString} from "./AppComponents/helpers";
import {BiLogoRedux, BiLogoTypescript} from "react-icons/bi";
import {type IconType} from "react-icons";
import {DiCss3Full, DiHtml5} from "react-icons/di";
import {FaGitSquare, FaNode, FaSass} from "react-icons/fa";
import {GrGraphQl, GrReactjs} from "react-icons/gr";
import {
  SiAffinity,
  SiCoreldraw,
  SiCypress,
  SiFirebase,
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

export interface BlockProps {
  desc?: string;
  endDate?: string;
  hidden?: boolean;
  Icon?: IconType;
  linkType?: string;
  list?: string[];
  stars?: number;
  startDate?: string;
  subtitle?: string;
  text?: string;
  title?: string;
}

export interface SectionProps {
  headline: string;
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

export const pdfPath = "/docs/Hanna_Gaudasinska_Zapasnik_CV.pdf";

export const aboutText = (
  <>
    <p>
      I am a software developer with seven years of experience specializing in
      complex web development, with expertise spanning front-end and soft
      back-end technologies.
    </p>
    <p>
      Throughout my career, I have been involved in creating user interfaces,
      managing client-server communication, designing database architectures,
      testing, and occasionally overseeing project management. My prior
      experience as a market researcher enhances my ability to act as a client
      liaison, analyzing technological requirements, implementing
      functionalities, and delivering training sessions.
    </p>
    <p>
      I am seeking job opportunities that will allow me to maximize my potential
      and further develop my skills and knowledge while working with experienced
      mentors.
    </p>
  </>
);

export const aboutGithubInvitation = (
  <p>
    I kindly invite you to look at my{" "}
    <a
      target="_blank"
      href={github}
      className="text-onSecondary hover:text-onPrimary transition-transform duration-200"
    >
      GitHub portfolio
    </a>
    .
  </p>
);

export const aboutGithubInvitationCV = (
  <p>
    I kindly invite you to look at my{" "}
    <a
      target="_blank"
      href={github}
      className="underline underline-offset-2 under text-primaryResume hover:text-[#4e5e91]"
    >
      GitHub portfolio
    </a>
    .
  </p>
);

export const consent =
  "I hereby consent to the processing of my vital and personal data in so far as this is required under the recruitment campaign, in accordance with applicable data protection laws.";

export const personalSection: SectionProps = {
  headline: "Personal information",
  blocks: [
    {
      list: [
        {title: "Location", desc: "Warsaw, Poland"},
        {title: "Phone", desc: phone, linkType: "tel:"},
        {
          title: "E-mail",
          desc: email,
          linkType: "mailto:",
        },
        {
          title: "WWW",
          desc: www,
          linkType: "",
        },
        {title: "GitHub", desc: github, linkType: ""},
        {title: "LinkedIn", desc: linkedIn, linkType: "", hidden: true},
      ],
    },
  ],
};

export const hobbiesSection: SectionProps = {
  headline: "Hobbies",
  blocks: [
    {
      list: [{desc: "DIY wonders, old worlds, new places"}],
    },
  ],
};

export const langSection: SectionProps = {
  headline: "Languages",
  blocks: [
    {
      list: [
        {title: "Polish", stars: 5, desc: "Native"},
        {title: "English", stars: 4, desc: "Advanced"},
      ],
    },
  ],
};

export const techSection: SectionProps = {
  headline: "Technologies",
  blocks: [
    {
      list: [
        {Icon: BiLogoTypescript, title: "TypeScript", stars: 3},
        {Icon: GrReactjs, title: "React.js", stars: 4},
        {Icon: RiNextjsFill, title: "Next.js", stars: 2},
        {Icon: SiWebpack, title: "Webpack", stars: 3},
        {Icon: SiVite, title: "Vite", stars: 2},
        {Icon: SiQwik, title: "Qwik", stars: 1, hidden: true},
      ],
    },
    {
      list: [
        {Icon: DiHtml5, title: "HTML", stars: 4, hidden: true},
        {Icon: DiCss3Full, title: "CSS", stars: 4, hidden: true},
        {Icon: RiTailwindCssLine, title: "Tailwind CSS", stars: 3},
        {
          Icon: SiStyledcomponents,
          title: "Styled-comp.",
          stars: 4,
        },
        {Icon: FaSass, title: "SASS", stars: 2, hidden: true},
      ],
    },
    {
      list: [
        {Icon: FaNode, title: "Node.js", stars: 3},
        {Icon: GrGraphQl, title: "GraphQL", stars: 4},
        {Icon: TbSql, title: "SQL", stars: 3},
        {Icon: SiSqlite, title: "SQLite", stars: 3},
        {Icon: SiFirebase, title: "Firebase", stars: 2, hidden: true},
        {Icon: BiLogoRedux, title: "Redux", stars: 2, hidden: true},
      ],
    },
    {
      list: [
        {Icon: SiJest, title: "Jest", stars: 4},
        {Icon: SiVitest, title: "Vitest", stars: 4},
        {Icon: SiTestinglibrary, title: "Testing library", stars: 3},
        {Icon: SiCypress, title: "Cypress.js", stars: 2},
      ],
    },
  ],
};

export const toolsSection: SectionProps = {
  headline: "Tools",
  blocks: [
    {
      list: [
        {Icon: FaGitSquare, title: "Git", stars: 3},
        {Icon: FaGitAlt, title: "GitUp", stars: 5},
        {Icon: VscGithubProject, title: "Github Projects", stars: 5},
        {Icon: FiFigma, title: "Figma", stars: 3},
        {Icon: SiAffinity, title: "Affinity Photo", stars: 3, hidden: true},
        {Icon: SiCoreldraw, title: "COREL Photo", stars: 2, hidden: true},
      ],
    },
  ],
};

export const jobBlock: BlockProps[] = [
  {
    title: "StratoKit SA",
    subtitle: "Full-stack Developer",
    startDate: "04.2021",
    endDate: "Ongoing",
    list: [
      "Maintenance of software integrations for the construction industry.",
      "Full-stack development of web applications.",
      "Project management (Github Projects).",
      "Co-design of the apps architecture (SQLite, GraphQL, Node.js, Redux-like events flow).",
      "Collaborated closely with clients to identify their needs and deliver tailored technical solutions (references available upon request).",
      "Contributed to the migration of the codebase from React.js/Jest to Vite/Vitest.",
    ],
  },
  {
    title: "Yaska Polska Sp. z o.o.",
    subtitle: "Software Developer",
    startDate: "10.2017",
    endDate: "04.2021",
    list: [
      "Developed websites for Belgian companies and NGOs.",
      "User interfaces creation (React.js, Final-form, styled-components, and more).",
      "Full-coverage testing (Jest, Cypress.js).",
      "Client liaison: recognition of needs and technological implementation.",
    ],
  },
  {
    title: "VoiceMap PTE LTD – GPS audioguides",
    text: "Created GPS-based audio guides, designing immersive experiences for tourists.",
    startDate: "12.2016",
    endDate: "Ongoing",
  },
  {
    title: "TNS Polska S.A.",
    subtitle: "Automotive Department - Junior Research Executive",
    startDate: "05.2013",
    endDate: "05.2015",
    list: [
      "Preparation and coordination of quantitative surveys for leading automotive and oil companies.",
      // "Preparation and coordination of quantitative, mystery shopping, and customer satisfaction surveys for leading automotive and oil companies.",
      // "Coordination of TNS Garage Quality Check countrywide survey.",
    ],
  },
  {
    title: "ACNielsen Polska Sp. z o.o.",
    subtitle:
      "Manufacturer Client Service – Marketing Research Consulting Programme",
    startDate: "09.2012",
    endDate: "03.2013",
    list: [
      "Market sales reports delivery and quantitative analysis for cosmetics and FMCG companies.",
    ],
  },
  {
    title: "L’Oreal Polska Sp. z o.o.",
    subtitle: "Media and Market Research Division – Internship",
    startDate: "06.2010",
    endDate: "12.2010",
    list: ["Cosmetics market analysis & client-side surveys coordination."],
  },
];

export const educationBlocks: BlockProps[] = [
  {
    title: "Economic Science at University of Warsaw, Poland",
    subtitle: "Master's Degree, Business Economics",
    startDate: "09.2005",
    endDate: "07.2012",
  },
  {
    title: "Sociology at University of Warsaw, Poland",
    subtitle: "Master's Certificate of Completion, Social and Market Research",
    startDate: "09.2007",
    endDate: "06.2012",
  },
  {
    title: "Social Science at Maastricht University, Netherlands",
    subtitle: "ERASMUS exchange programme",
    startDate: "01.2010",
    endDate: "06.2010",
  },
];

export const workshopBlocks: BlockProps[] = [
  {
    title: "Conference Google Developer Days in Krakow, Poland",
    text: "Participation in workshops on PWA, Firebase and Google Maps tooling",
    startDate: "09.2017",
    endDate: "09.2017",
    list: [],
  },
  {
    title: "Coders Lab – Bootcamp",
    text: "Intensive Front-End Developer Training (240h)",
    startDate: "04.2017",
    endDate: "06.2017",
    list: [],
  },
  {
    title: "Delfin English School, London, United Kingdom",
    text: "General English Course, level: advanced C1+ (150h)",
    startDate: "02.2016",
    endDate: "06.2016",
    list: [],
    hidden: true,
  },
  {
    title: "Open University of Warsaw – MS Excel & VBA course",
    text: "MS Excel Work Automation with Macros and VBA (60 hours)",
    startDate: "10.2014",
    endDate: "11.2014",
    list: [],
  },
];
