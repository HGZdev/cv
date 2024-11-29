import AnimatedContainer from "../../AppComponents/AnimatedContainer";
import {Divider} from "../../AppComponents/Divider";
import {DiCss3Full, DiHtml5} from "react-icons/di";
import {FaGitSquare, FaNode, FaSass} from "react-icons/fa";
import {GrGraphQl, GrReactjs} from "react-icons/gr";
import {Link} from "react-router-dom";
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
import {VscGithubProject, VscVscode} from "react-icons/vsc";
import {RiJavascriptFill, RiTailwindCssLine} from "react-icons/ri";
import {FiFigma} from "react-icons/fi";
import {BiLogoRedux, BiLogoTypescript} from "react-icons/bi";
import getConfig from "../../Components/getConfig";
import ContentHeader from "../../AppComponents/ContentHeader";
import {aboutGithubInvitation, aboutText} from "../../contentDb";
import {type IconType} from "react-icons";

const {BASE_URL} = getConfig();

export const IconWithTooltip = ({
  Icon,
  title,
  size = 36,
}: {
  Icon: IconType;
  title: string;
  size?: number;
}) => {
  return (
    <div className="relative group flex flex-col items-center gap-1 w-12">
      <Icon
        size={size}
        className="group-hover:text-onPrimary hover:scale-110 transition-transform duration-200"
      />
      <span className="text-label-small text-onPrimary text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {title}
      </span>
    </div>
  );
};

const IconList = () => (
  <Link
    to={`${BASE_URL}/skills`}
    className="flex flex-wrap gap-1 justify-center text-onTertiary"
  >
    <IconWithTooltip Icon={GrReactjs} title="React.js" />
    <IconWithTooltip Icon={RiJavascriptFill} title="JavaScript" />
    <IconWithTooltip Icon={BiLogoTypescript} title="TypeScript" />
    <IconWithTooltip Icon={SiVite} title="Vite" />
    <IconWithTooltip Icon={SiQwik} title="Qwik" />
    <IconWithTooltip Icon={SiWebpack} title="Webpack" />
    <IconWithTooltip Icon={DiHtml5} title="HTML5" />
    <IconWithTooltip Icon={DiCss3Full} title="CSS3" />
    <IconWithTooltip Icon={RiTailwindCssLine} title="Tailwind CSS" />
    <IconWithTooltip Icon={SiStyledcomponents} title="Styled-components" />
    <IconWithTooltip Icon={FaSass} title="SASS" />
    <IconWithTooltip Icon={FaNode} title="Node.js" />
    <IconWithTooltip Icon={GrGraphQl} title="GraphQL" />
    <IconWithTooltip Icon={SiSqlite} title="SQLite" />
    <IconWithTooltip Icon={SiFirebase} title="Firebase" />
    <IconWithTooltip Icon={BiLogoRedux} title="Redux" />
    <IconWithTooltip Icon={SiVitest} title="Vitest" />
    <IconWithTooltip Icon={SiJest} title="Jest" />
    <IconWithTooltip Icon={SiTestinglibrary} title="Testing Library" />
    <IconWithTooltip Icon={SiCypress} title="Cypress" />
    <IconWithTooltip Icon={FaGitSquare} title="Git" />
    <IconWithTooltip Icon={VscGithubProject} title="GitHub Projects" />
    <IconWithTooltip Icon={VscVscode} title="VS Code" />
    <IconWithTooltip Icon={FiFigma} title="Figma" />
    <IconWithTooltip Icon={SiAffinity} title="Affinity Photo" />
    <IconWithTooltip Icon={SiCoreldraw} title="Corel Photo" />
  </Link>
);

const Intro = () => {
  return (
    <AnimatedContainer className="p-4 md:p-8 bg-primary">
      <ContentHeader
        {...{
          title: "about me",
          tags: ["Front-End Focus", "Back-End Support", "Warsaw, Poland"],
        }}
      />
      <span className="flex flex-col gap-3 text-body-medium text-onTertiary ">
        {aboutText}
        {aboutGithubInvitation}
      </span>
      <Divider />
      <IconList />
    </AnimatedContainer>
  );
};

export default Intro;
