import BgContainer from "../../Components/BgContainer";
import getConfig from "../../Components/getConfig";
import {useTrackPageViewsInGA} from "../../../../lib/GoogleAnalytics";
import {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import {PiPrinter} from "react-icons/pi";
import {
  BlockProps,
  educationBlocks,
  fullName,
  github,
  hobbiesSection,
  jobBlock,
  jobTitle,
  langSection,
  personalSection,
  SectionProps,
  techSection,
  toolsSection,
  workshopBlocks,
} from "../../contentDb";
import {MdOutlineStar, MdOutlineStarBorder} from "react-icons/md";
import {I18nLang, useLang} from "../../../../lib/i18n";

const {VITE_BASE_URL} = getConfig();

const LeftHeadline = ({
  headlineKey,
  lang,
}: {
  headlineKey: string;
  lang: I18nLang;
}) => {
  const {getText} = useLang();
  return (
    <h2 className="bg-onSecondaryResume text-[12px] font-extralight leading-tight px-4 py-2">
      {getText(headlineKey, lang)}
    </h2>
  );
};

const LeftRatingSection = ({
  headlineKey,
  blocks,
  lang,
}: SectionProps & {lang: I18nLang}) => {
  const {getText} = useLang();
  return (
    <div>
      <LeftHeadline headlineKey={headlineKey} lang={lang} />
      <div className="flex flex-col py-3 px-4 gap-2">
        {blocks.map((b, i) => (
          <div key={i} className="flex flex-col gap-[0.1rem]">
            {b.list
              .filter((l) => !l.hidden)
              .map(({titleKey, stars = 0, Icon}, j) => (
                <div key={j} className="flex justify-between">
                  <div className="flex text-onPrimary gap-2">
                    {Icon && <Icon size={14} />}
                    <span className="text-[10px] font-extralight text-center">
                      {getText(titleKey!, lang)}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({length: stars}, (_, i) => (
                      <MdOutlineStar
                        key={`star-${i}`}
                        size={12}
                        className="text-onPrimaryResume"
                      />
                    ))}
                    {Array.from({length: 5 - stars}, (_, i) => (
                      <MdOutlineStarBorder
                        key={`empty-star-${i}`}
                        size={12}
                        className="text-onBackground"
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const LeftTextSection = ({
  headlineKey,
  blocks,
  lang,
}: SectionProps & {lang: I18nLang}) => {
  const {getText} = useLang();
  return (
    <div>
      <LeftHeadline headlineKey={headlineKey} lang={lang} />
      <div className="flex flex-col px-4 py-3 gap-[0.3rem]">
        {blocks.map((b) =>
          b.list
            .filter((l) => !l.hidden)
            .map(({titleKey, descKey, desc, linkType}, j) => (
              <span
                className="text-[10px] font-extralight leading-tight"
                key={j}
              >
                <span className="font-normal text-[10px]">
                  {titleKey ? `${getText(titleKey, lang)}: ` : ""}
                </span>
                {linkType ? (
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

const LeftBar = ({lang}: {lang: I18nLang}) => {
  const imagePath = `${VITE_BASE_URL}/images/portrait2.webp`;
  return (
    <div className="bg-primaryResume text-onPrimary flex flex-col w-1/3 gap-4 py-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 mx-4">
          <h1 className="text-[30px] font-light leading-[1.2]">{fullName}</h1>
          <p className="text-[16px] font-extralight leading-tight">
            {jobTitle}
          </p>
        </div>
        <div
          className="bg-no-repeat bg-[calc(50%+10px)_center] bg-[length:130%] mx-4"
          style={{backgroundImage: `url('${imagePath}')`}}
        >
          <div className="w-full h-60"></div>
        </div>
      </div>
      <div>
        <LeftTextSection {...personalSection} lang={lang} />
        <LeftRatingSection
          headlineKey="skills_headline"
          blocks={[
            ...langSection.blocks,
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
  const {getText} = useLang();
  return (
    <div className="py-1 my-2 border-b-primaryResume border-b-[1px] border-solid">
      <h2 className="border-y-2 text-[14px] font-light leading-tight ml-1">
        {getText(headlineKey, lang)}
      </h2>
    </div>
  );
};

const TextBubble = ({text}: {text: string}) => (
  <div className="flex bg-[#e8edff] rounded-xl m-[0.1rem] px-2 py-1 shadow-md">
    <span className="text-[8px] font-normal">{text}</span>
  </div>
);

const AboutSection = ({lang}: {lang: I18nLang}) => {
  const {getText} = useLang();
  return (
    <div className="bg-[#e8edff] text-[10px] italic font-light leading-normal flex flex-col gap-1 p-2">
      <p>{getText("about_text_paragraph_1", lang)}</p>
      <p>{getText("about_text_paragraph_2", lang)}</p>
      <p>{getText("about_text_paragraph_3", lang)}</p>
      <p>
        {getText("about_github_invitation_text", lang)}{" "}
        <a
          target="_blank"
          href={github}
          className="text-onSecondary hover:text-onPrimary transition-transform duration-200 underline underline-offset-2"
        >
          {getText("about_github_link_text", lang)}
        </a>
        .
      </p>
    </div>
  );
};

const KeySkillsSection = ({lang}: {lang: I18nLang}) => {
  const {getText} = useLang();
  const keyWords = [
    "skills_frontend",
    "skills_backend",
    "technologies_typescript_title",
    "technologies_react_title",
    "technologies_vite_title",
    "technologies_webpack_title",
    "technologies_tailwind_title",
    "technologies_styled_components_title",
    "technologies_nodejs_title",
    "technologies_graphql_title",
    "technologies_sqlite_title",
    "technologies_jest_title",
    "technologies_vitest_title",
    "technologies_testing_library_title",
    "tools_git_title",
    "tools_github_title",
    "skills_cicd_title",
    "tools_figma_title",
    "skills_pm",
    "skills_client_liaison",
  ];
  return (
    <div>
      <RightHeadline headlineKey="key_skills_headline" lang={lang} />
      <div className="flex flex-wrap gap-1">
        {keyWords.map((key) => (
          <TextBubble key={key} text={getText(key, lang)} />
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
  blocks: BlockProps[];
  lang: I18nLang;
}) => {
  const {getText} = useLang();
  return (
    <div className="flex flex-col">
      <RightHeadline headlineKey={headlineKey} lang={lang} />
      <div className="flex flex-col gap-1">
        {blocks
          .filter((b) => !b.hidden)
          .map(
            ({
              titleKey,
              subtitleKey,
              startDate,
              endDate,
              textKey,
              listKeys,
            }) => (
              <div className="flex gap-2" key={titleKey}>
                <div className="flex w-12 pl-1 pt-1">
                  <span className="font-mono font-light text-[8px] text-primaryResume">
                    {startDate}
                    {endDate
                      ? endDate !== startDate && ` – ${endDate}`
                      : ` – ${getText("date_ongoing", lang)}`}
                  </span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-primaryResume text-[14px] font-semibold leading-tight">
                    {getText(titleKey!, lang)}
                  </span>
                  <span className="text-primaryResume text-[12px] font-normal">
                    {subtitleKey && getText(subtitleKey!, lang)}
                  </span>
                  {textKey && (
                    <span className="text-primaryResume text-[10px] font-light">
                      {getText(textKey, lang)}
                    </span>
                  )}
                  {listKeys && (
                    <ul className="ml-4">
                      {listKeys.map((key, i) => (
                        <li
                          className="list-disc text-primaryResume text-[10px] font-light"
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

const ConsentSection = ({lang}: {lang: I18nLang}) => {
  const {getText} = useLang();
  return (
    <div className="flex">
      <span className="text-[8px] italic font-normal leading-none text-gray-400 pt-1">
        {getText("consent_text", lang)}
      </span>
    </div>
  );
};

const RightBar = ({lang}: {lang: I18nLang}) => (
  <div className="flex flex-col justify-between">
    <AboutSection lang={lang} />
    <div className="flex flex-col">
      <KeySkillsSection lang={lang} />
      <RightSection
        headlineKey="work_experience_headline"
        blocks={jobBlock}
        lang={lang}
      />
      <RightSection
        headlineKey="workshops_trainings_headline"
        blocks={workshopBlocks}
        lang={lang}
      />
      <RightSection
        headlineKey="education_headline"
        blocks={educationBlocks}
        lang={lang}
      />
    </div>
    <ConsentSection lang={lang} />
  </div>
);

const CVPanel = ({lang}: {lang: I18nLang}) => (
  <div className="flex bg-white h-[293mm] w-[210mm] p-4 gap-4">
    <LeftBar lang={lang} />
    <RightBar lang={lang} />
  </div>
);

const Resume = () => {
  useTrackPageViewsInGA();
  const fileName = `${fullName} - CV`;

  const cvRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: fileName,
  });

  const imagePath = `${VITE_BASE_URL}/images/bg.webp`;
  return (
    <BgContainer
      data-theme="resume"
      imagePath={imagePath}
      className="flex flex-col gap-2 items-center justify-center bg-[110%] p-2"
    >
      <div className="w-[210mm] flex items-start gap-2">
        <button
          className="bg-onPrimary text-primaryResume rounded-sm px-2"
          onClick={() => handlePrint()}
        >
          <PiPrinter />
        </button>

        {/* <a
          className="bg-onPrimary text-primaryResume rounded-sm px-2"
          href={"cv/docs/Hanna_Gaudasinska_Zapasnik_CV.pdf"}
        >
          <MdOutlineFileDownload />
        </a> */}
      </div>
      <div ref={cvRef}>
        <CVPanel lang={"en"} />
        <CVPanel lang={"pl"} />
      </div>
    </BgContainer>
  );
};

export default Resume;
