import { ReactNode, useRef } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import { PiPrinter } from 'react-icons/pi';
import { useReactToPrint } from 'react-to-print';

import getConfig from '../../../../lib/config';
import { useTrackPageViewsInGA } from '../../../../lib/GoogleAnalytics';
import { I18nLang, useLang } from '../../../../lib/i18n';
import { BgContainer } from '../../components';
import {
  educationData,
  hobbiesSection,
  jobExperience,
  languageSection,
  personalData,
  PersonalSection,
  personalSection,
  resumeConfig,
  SkillSection,
  techSection,
  toolsSection,
  workshopExperience,
} from '../index';
import { getDateRangeString } from './utils';

const { VITE_BASE_URL } = getConfig();

const LeftHeadline = ({
  headlineKey,
  lang,
}: {
  headlineKey: string;
  lang: I18nLang;
}) => {
  const { getText } = useLang();
  return (
    <h2 className='bg-onSecondaryResume text-[12px] font-extralight leading-tight px-3 py-2'>
      {getText(headlineKey, lang)}
    </h2>
  );
};

const IconAndLabel = ({
  Icon,
  labelKey,
  lang,
  iconProps,
}: {
  Icon: React.ComponentType<any>;
  labelKey: string;
  lang: I18nLang;
  iconProps?: any;
}) => {
  const { getText } = useLang();
  return (
    <div className='flex gap-2'>
      <Icon size={14} {...iconProps} />
      <span className='text-[10px] font-extralight'>
        {getText(labelKey, lang)}
      </span>
    </div>
  );
};

export const Rating = ({ stars = 0 }) => (
  <div className='flex gap-1'>
    {Array.from({ length: stars }, (_, i) => (
      <MdOutlineStar
        key={`star-${i}`}
        size={12}
        className='text-onPrimaryResume'
      />
    ))}
    {Array.from({ length: 5 - stars }, (_, i) => (
      <MdOutlineStarBorder
        key={`empty-star-${i}`}
        size={12}
        className='text-onBackground'
      />
    ))}
  </div>
);

const LeftSkillsSection = ({
  headlineKey,
  blocks,
  lang,
}: SkillSection & { lang: I18nLang }) => {
  return (
    <div>
      <LeftHeadline headlineKey={headlineKey} lang={lang} />
      <div className='flex flex-col py-3 px-3 '>
        {blocks.map((b: any, i: number) => (
          <>
            <div key={i} className='grid grid-cols-2 gap-1 gap-x-2'>
              {b.list
                .filter((l: any) => !l.hiddenInResume)
                .map(({ titleKey, Icon, iconProps }: any, j: number) => (
                  <div key={j}>
                    {/* ICON AND LABEL */}
                    <IconAndLabel
                      Icon={Icon!}
                      labelKey={titleKey!}
                      lang={lang}
                      iconProps={iconProps}
                    />
                  </div>
                ))}
            </div>
            {i < blocks.length - 1 && (
              <div className='border-b-[1px] border-onPrimaryResume/10 bg-opacity-10 border-dotted my-2' />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

const LeftTextSection = ({
  headlineKey,
  blocks,
  lang,
}: PersonalSection & { lang: I18nLang }) => {
  const { getText } = useLang();
  return (
    <div>
      <LeftHeadline headlineKey={headlineKey} lang={lang} />
      <div className='flex flex-col px-3 py-3 gap-2'>
        {blocks.map((b: any) =>
          b.list
            .filter((l: any) => !l.hiddenInResume)
            .map(({ titleKey, descKey, desc, linkType }: any, j: number) => (
              <span
                className='text-[10px] font-extralight leading-tight'
                key={j}
              >
                <span className='font-normal text-[10px]'>
                  {titleKey ? `${getText(titleKey, lang)}: ` : ''}
                </span>
                {linkType !== undefined ? (
                  <a href={`${linkType}${desc}`}>
                    {descKey ? getText(descKey, lang) : desc}
                  </a>
                ) : (
                  <>{descKey ? getText(descKey, lang) : desc}</>
                )}
              </span>
            ))
        )}
      </div>
    </div>
  );
};

const LeftBar = ({ lang }: { lang: I18nLang }) => {
  const imagePath = `${VITE_BASE_URL}/images/portrait2.webp`;
  return (
    <div className='bg-primaryResume text-onPrimary flex flex-col w-2/5 gap-3 py-3'>
      <div className='flex flex-col gap-4'>
        {/* TITLE */}
        <div className='flex flex-col gap-1 mx-3'>
          <h1 className='text-[30px] font-light leading-[1.2]'>
            {personalData.fullName}
          </h1>
          <p className='text-[16px] font-extralight leading-tight'>
            {personalData.jobTitle}
          </p>
        </div>
        {/* IMAGE */}
        <div
          className='bg-no-repeat bg-[calc(50%+10px)_calc(50%-10px)] bg-[length:130%] mx-3'
          style={{ backgroundImage: `url('${imagePath}')` }}
        >
          <div className='w-full h-[15rem]'></div>
        </div>
      </div>
      <div>
        <LeftTextSection {...personalSection} lang={lang} />
        <LeftSkillsSection
          headlineKey='skills_headline'
          blocks={[
            ...languageSection.blocks,
            ...techSection.blocks,
            ...toolsSection.blocks,
          ]}
          lang={lang}
        />
        <LeftTextSection {...hobbiesSection} lang={lang} />
      </div>
    </div>
  );
};

const RightHeadline = ({
  headlineKey,
  lang,
}: {
  headlineKey: string;
  lang: I18nLang;
}) => {
  const { getText } = useLang();
  return (
    <div className='py-1 my-2 border-t-transparent border-b-onSecondaryResume/30 border-b-[1px] border-solid'>
      <h2 className=' text-[14px] font-light leading-tight ml-1'>
        {getText(headlineKey, lang)}
      </h2>
    </div>
  );
};

const AboutSection = ({ lang }: { lang: I18nLang }) => {
  const { getText } = useLang();
  return (
    <div className='bg-[#e8edff] text-[10px] italic font-light leading-normal flex flex-col gap-1 p-2'>
      <p>{getText('about_text_paragraph_1', lang)}</p>
      <p>{getText('about_text_paragraph_2', lang)}</p>
      <p>{getText('about_text_paragraph_3', lang)}</p>
    </div>
  );
};

const Li = ({ children }: { children: ReactNode }) => (
  <li className='flex py-[0.1rem] gap-[3px] text-body-small '>
    <GiCheckMark className='text-[#7085c9]' />
    <span className='font-normal'>{children}</span>
  </li>
);

const keySkillsI18nMap = [
  [
    { en: 'Frontend Focus', pl: 'Specjalizacja frontendowa' },
    { en: 'JavaScript / TypeScript', pl: 'JavaScript / TypeScript' },
    { en: 'React.js 18+', pl: 'React.js 18+' },
    { en: 'HTML / CSS', pl: 'HTML / CSS' },
    {
      en: 'Test-driven development',
      pl: 'Test-driven development',
    },
    { en: 'Webpack / Vite', pl: 'Webpack / Vite' },
  ],
  [
    {
      en: 'Backend Experience',
      pl: 'Doświadczenie w technologiach serwerowych',
    },
    { en: 'Node.js / Express.js', pl: 'Node.js / Express.js' },
    { en: 'SQL / SQLite / PostgreSQL', pl: 'SQL / SQLite / PostgreSQL' },
    {
      en: 'API Integration: REST / GraphQL',
      pl: 'Integracja API: REST / GraphQL',
    },
    { en: 'Git / Github', pl: 'Git / Github' },
    { en: 'CI/CD', pl: 'CI/CD' },
  ],
  [
    { en: 'Economics, Market Research', pl: 'Ekonomia, Badania Rynkowe' },
    {
      en: 'Adaptability & Fast Learning',
      pl: 'Szybka adaptacja i nauka',
    },
    {
      en: 'Agile Methodologies Knowledge',
      pl: 'Znajomość metod Agile',
    },
    {
      en: 'Comunication Skills',
      pl: 'Umiejętności komunikacji',
    },
    { en: 'Client Liaison Experience', pl: 'Współpraca z klientem biznesowym' },
    { en: `Pixel-perfect Approach`, pl: `Dbałość o detale (Pixel-perfect)` },
  ],
];

const KeySkillsSection = ({ lang }: { lang: I18nLang }) => {
  return (
    <div>
      <RightHeadline headlineKey='key_skills_headline' lang={lang} />
      <div className='flex px-2'>
        {keySkillsI18nMap.map((list, i) => (
          <ul key={i} className='w-full'>
            {list.map(({ en, pl }) => (
              <Li key={en}>{lang === 'en' ? en : pl}</Li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const RightSection = ({
  headlineKey,
  blocks,
  lang,
}: {
  headlineKey: string;
  blocks: any[];
  lang: I18nLang;
}) => {
  const { getText } = useLang();
  return (
    <div className='flex flex-col '>
      <RightHeadline headlineKey={headlineKey} lang={lang} />
      <div className='flex flex-col gap-2 ml-1'>
        {blocks
          .filter(b => !b.hiddenInResume)
          .map(
            ({
              titleKey,
              subtitleKey,
              startDate = '',
              endDate,
              textKey,
              listKeys,
              location,
            }) => (
              <div className='flex gap-2' key={titleKey}>
                {/* <div className="flex w-12 pl-1">
                  <span className="font-mono font-light text-[7px] text-primaryResume">
                    {getDateRangeString({startDate, endDate, getText, lang})}
                  </span>
                </div> */}
                <div className='flex flex-col flex-1'>
                  {/* POSITION */}
                  <span className='text-primaryResume text-[12px] font-semibold uppercase'>
                    {subtitleKey && getText(subtitleKey!, lang)}
                  </span>
                  {/* TITLE */}
                  <span className='text-[10px] font-normal leading-tight'>
                    <span className='text-[#7085c9]'>
                      {getDateRangeString({
                        startDate,
                        endDate,
                        getText,
                        lang,
                      })}
                    </span>
                    {' | '}
                    {[
                      titleKey ? getText(titleKey!, lang) : '',
                      location ? getText(location, lang) : '',
                    ]
                      .filter(Boolean)
                      .join(', ')}
                  </span>
                  {textKey && (
                    <span className='text-primaryResume text-[10px] font-light'>
                      {getText(textKey, lang)}
                    </span>
                  )}
                  {listKeys && (
                    <ul className='ml-4'>
                      {listKeys.map((key: any, i: number) => (
                        <li
                          className='list-disc text-primaryResume text-[10px] font-light'
                          key={i}
                        >
                          {getText(key, lang)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

const ConsentSection = ({ lang }: { lang: I18nLang }) => {
  const { getText } = useLang();
  return (
    <div className='flex'>
      <span className='text-[8px] italic font-normal leading-none text-gray-400 pt-1'>
        {getText('consent_text', lang)}
      </span>
    </div>
  );
};

const RightBar = ({ lang }: { lang: I18nLang }) => (
  <div className='flex flex-col justify-between'>
    <div className='flex flex-col'>
      <AboutSection lang={lang} />
      <KeySkillsSection lang={lang} />
      <RightSection
        headlineKey='work_experience_headline'
        blocks={jobExperience}
        lang={lang}
      />
      <RightSection
        headlineKey='workshops_trainings_headline'
        blocks={workshopExperience}
        lang={lang}
      />
      <RightSection
        headlineKey='education_headline'
        blocks={educationData}
        lang={lang}
      />
    </div>
    <ConsentSection lang={lang} />
  </div>
);

const CVPanel = ({ lang }: { lang: I18nLang }) => (
  <div className='flex bg-white h-[293mm] w-[210mm] p-4 gap-3'>
    <LeftBar lang={lang} />
    <RightBar lang={lang} />
  </div>
);

const Resume = () => {
  useTrackPageViewsInGA();

  const cvRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: resumeConfig.fileName,
  });

  const imagePath = `${VITE_BASE_URL}/images/bg.webp`;
  return (
    <BgContainer
      data-theme='resume'
      imagePath={imagePath}
      className='flex flex-col gap-2 items-center justify-center bg-[110%] p-2'
    >
      <div className='w-[210mm] flex items-start gap-2'>
        <button
          className='bg-onPrimary text-primaryResume rounded-sm px-2'
          onClick={() => handlePrint()}
        >
          <PiPrinter />
        </button>
      </div>
      <div ref={cvRef} className='bg-white'>
        <CVPanel lang={'en'} />
        {/* <CVPanel lang={"pl"} /> */}
      </div>
    </BgContainer>
  );
};

export default Resume;
