import { type IconType } from 'react-icons';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { DiCss3Full, DiHtml5 } from 'react-icons/di';
import { FaGithub, FaGitSquare, FaNode, FaSass } from 'react-icons/fa';
import { FaMasksTheater } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { GrGraphQl, GrReactjs } from 'react-icons/gr';
import { RiJavascriptFill, RiTailwindCssLine } from 'react-icons/ri';
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
} from 'react-icons/si';
import { VscGithubProject, VscVscode } from 'react-icons/vsc';

import { useLang } from '../../../lib/i18n';
import { AnimatedContainer, ContentHeader } from '../../components';
import LangLink from '../../components/common/LangLink';
import Divider from '../../components/ui/Divider';

export const IconWithTooltip = ({
  Icon,
  titleKey,
  size = 36,
}: {
  Icon: IconType;
  titleKey: string;
  size?: number;
}) => {
  const { getText } = useLang();
  return (
    <div className='relative group flex flex-col items-center gap-1 w-12'>
      <Icon
        size={size}
        className='group-hover:text-onPrimary hover:scale-110 transition-transform duration-200'
      />
      <span className='text-label-small text-onPrimary text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
        {getText(titleKey)}
      </span>
    </div>
  );
};

const IconList = () => (
  <LangLink
    to='/skills'
    className='flex flex-wrap gap-1 justify-center text-onTertiary'
  >
    <IconWithTooltip Icon={GrReactjs} titleKey='technologies_react_title' />
    <IconWithTooltip
      Icon={RiJavascriptFill}
      titleKey='technologies_javascript_title'
    />
    <IconWithTooltip
      Icon={BiLogoTypescript}
      titleKey='technologies_typescript_title'
    />
    <IconWithTooltip Icon={SiVite} titleKey='technologies_vite_title' />
    <IconWithTooltip Icon={SiQwik} titleKey='technologies_qwik_title' />
    <IconWithTooltip Icon={SiWebpack} titleKey='technologies_webpack_title' />
    <IconWithTooltip Icon={DiHtml5} titleKey='technologies_html_title' />
    <IconWithTooltip Icon={DiCss3Full} titleKey='technologies_css_title' />
    <IconWithTooltip
      Icon={RiTailwindCssLine}
      titleKey='technologies_tailwind_title'
    />
    <IconWithTooltip
      Icon={SiStyledcomponents}
      titleKey='technologies_styled_components_title'
    />
    <IconWithTooltip Icon={FaSass} titleKey='technologies_sass_title' />
    <IconWithTooltip Icon={FaNode} titleKey='technologies_nodejs_title' />
    <IconWithTooltip Icon={GrGraphQl} titleKey='technologies_graphql_title' />
    <IconWithTooltip Icon={SiSqlite} titleKey='technologies_sqlite_title' />
    <IconWithTooltip Icon={SiFirebase} titleKey='technologies_firebase_title' />
    <IconWithTooltip Icon={BiLogoRedux} titleKey='technologies_redux_title' />
    <IconWithTooltip Icon={SiVitest} titleKey='technologies_vitest_title' />
    <IconWithTooltip Icon={SiJest} titleKey='technologies_jest_title' />
    <IconWithTooltip
      Icon={SiTestinglibrary}
      titleKey='technologies_testing_library_title'
    />
    <IconWithTooltip
      Icon={FaMasksTheater}
      titleKey='technologies_playwright_title'
    />
    <IconWithTooltip Icon={SiCypress} titleKey='technologies_cypress_title' />
    <IconWithTooltip Icon={FaGitSquare} titleKey='tools_git_title' />
    <IconWithTooltip Icon={FaGithub} titleKey='tools_github_title' />
    <IconWithTooltip
      Icon={SiGithubactions}
      titleKey='tools_github_actions_title'
    />
    <IconWithTooltip
      Icon={VscGithubProject}
      titleKey='tools_github_projects_title'
    />
    <IconWithTooltip Icon={VscVscode} titleKey='tools_vscode_title' />
    <IconWithTooltip Icon={FiFigma} titleKey='tools_figma_title' />
    <IconWithTooltip Icon={SiAffinity} titleKey='tools_affinity_photo_title' />
    <IconWithTooltip Icon={SiCoreldraw} titleKey='tools_corel_photo_title' />
  </LangLink>
);

const Personal = () => {
  const { getText } = useLang();
  return (
    <AnimatedContainer className='p-4 md:p-8 bg-primary'>
      <ContentHeader
        {...{
          title: getText('about_title'),
          tags: [
            getText('about_tag_1'),
            getText('about_tag_2'),
            getText('about_tag_3'),
          ],
        }}
      />
      <span className='flex flex-col gap-3 text-body-medium text-onTertiary'>
        <p>{getText('about_text_paragraph_1')}</p>
        <p>{getText('about_text_paragraph_2')}</p>
        <p>{getText('about_text_paragraph_3')}</p>
        <p>
          {getText('about_github_invitation_text')}{' '}
          <a
            href='https://github.com/HGZdev'
            className='text-primaryResume underline underline-offset-2 hover:text-onPrimary'
          >
            {getText('about_github_link_text')}
          </a>
          .
        </p>
      </span>
      <Divider />
      <IconList />
    </AnimatedContainer>
  );
};

export default Personal;
