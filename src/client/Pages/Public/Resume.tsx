import BgContainer from "../../Components/BgContainer";
import getConfig from "../../Components/getConfig";
import {useTrackPageViewsInGA} from "../../../../lib/GoogleAnalytics";
import {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import {PiPrinter} from "react-icons/pi";
import {
  aboutGithubInvitationCV,
  aboutText,
  BlockProps,
  consent,
  educationBlocks,
  fullName,
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
import {
  MdOutlineFileDownload,
  MdOutlineStar,
  MdOutlineStarBorder,
} from "react-icons/md";

const {BASE_URL} = getConfig();

const LeftHeadline = ({headline}: {headline: string}) => (
  <h2
    className={`bg-[#1C1E1F] text-[12px] font-extralight leading-tight px-4 py-2`}
  >
    {headline}
  </h2>
);

const LeftRatingSection = ({headline, blocks}: SectionProps) => (
  <div>
    {headline && <LeftHeadline headline={headline} />}
    <div className="flex flex-col py-4 px-4 gap-2">
      {blocks?.map((b) => (
        <div className="flex flex-col gap-[0.1rem] ">
          {b.list
            ?.filter((l) => !l.hidden)
            .map(({title, desc, stars = 0, Icon}) => (
              <div className="flex justify-between">
                {/* logo */}
                <div className="flex text-onPrimary gap-2">
                  {Icon && <Icon size={14} />}
                  <span className="text-[10px] font-extralight text-center">
                    {title}
                  </span>
                </div>
                {/* rating */}
                <div className="flex gap-1">
                  {Array.from({length: stars}, (_, i) => (
                    <MdOutlineStar size={12} className="text-[#e8edff]" />
                  ))}
                  {Array.from({length: 5 - stars}, (_, i) => (
                    <MdOutlineStarBorder
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

const LeftTextSection = ({headline, blocks}: SectionProps) => (
  <div>
    {headline && <LeftHeadline headline={headline} />}
    <div className="flex flex-col px-4 py-4 gap-2">
      {blocks?.map((b) =>
        b.list
          ?.filter((l) => !l.hidden)
          .map(({title, desc, linkType}) => (
            <span className="text-[10px] font-extralight leading-tight">
              {title && (
                <span className="font-normal text-[10px]">{title}: </span>
              )}
              {linkType !== undefined ? (
                <a href={`${linkType}${desc}`}>{desc}</a>
              ) : (
                <>{desc}</>
              )}
            </span>
          ))
      )}
    </div>
  </div>
);

const LeftHeader = () => {
  return (
    <div className="flex flex-col gap-2 mx-4">
      <h1 className="text-[30px] font-light leading-[1.2]">{fullName}</h1>
      <p className="text-[16px] font-extralight leading-tight">{jobTitle}</p>
    </div>
  );
};

const LeftPortrait = () => {
  const imagePath = `${BASE_URL}/images/portrait2.webp`;
  return (
    <div
      className={`bg-no-repeat bg-[calc(50%+10px)_center] bg-[length:130%] mx-4`}
      style={{backgroundImage: `url('${imagePath}')`}}
    >
      <div className="w-full h-60"></div>
    </div>
  );
};

const LeftBar = () => {
  return (
    <div
      className={`bg-[#252F51] text-onPrimary flex flex-col w-1/3 gap-4 py-4`}
    >
      <LeftHeader />
      <LeftPortrait />
      <div>
        <LeftTextSection {...personalSection} />
        <LeftRatingSection
          headline="Skills"
          blocks={[
            ...langSection.blocks,
            ...techSection.blocks,
            ...toolsSection.blocks,
          ]}
        />

        <LeftTextSection {...hobbiesSection} />
      </div>
    </div>
  );
};

const RightHeadline = ({headline}: {headline: string}) => (
  <div
    className="py-1 my-2"
    style={{
      borderTop: `solid #252F51 1px`,
      borderBottom: `solid #252F51 1px`,
    }}
  >
    <h2 className={`border-y-2 text-[14px] font-light leading-tight ml-1`}>
      {headline}
    </h2>
  </div>
);

const TextBubble = ({text}: {text: string}) => (
  <div
    className={`flex bg-[#e8edff] rounded-xl m-[0.1rem] px-2 py-1 shadow-md`}
  >
    <span className="text-[8px] font-normal">{text}</span>
  </div>
);

const AboutSection = () => {
  return (
    <div
      className={`bg-[#e8edff] text-[10px] italic font-light leading-normal flex flex-col gap-1 p-2 `}
    >
      {aboutText}
      {aboutGithubInvitationCV}
    </div>
  );
};

const KeySkillsSection = () => {
  const keyWords = [
    "Front-End Focus",
    "Back-End Support",
    "TypeScript",
    "React.js",
    "Vite",
    "Webpack",
    "Tailwind",
    "Styled-components",
    "Node.js",
    "GraphQL",
    "SQLite",
    "Jest",
    "Vitest",
    "Testing Library",
    "Git",
    "Figma",
    "PM Experience",
    "Client Liaison",
  ];

  return (
    <div>
      <RightHeadline headline="Key Skills & Technologies" />
      <div className={`flex flex-wrap gap-1`}>
        {keyWords.map((skill) => (
          <TextBubble key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
};

const RightSection = ({
  headline,
  blocks,
}: {
  headline: string;
  blocks: BlockProps[];
}) => {
  return (
    <div className="flex flex-col">
      {headline && <RightHeadline headline={headline} />}
      <div className="flex flex-col gap-1">
        {blocks
          ?.filter((b) => !b.hidden)
          .map(({title, subtitle, startDate, endDate, text, list}) => (
            <div className={`flex gap-1`}>
              {/* Date */}
              <div className=" flex w-12 pl-1 pt-1 ">
                <span className="font-mono font-light text-[8px] text-[#252F51]">
                  {startDate}
                  {endDate
                    ? endDate === startDate
                      ? ""
                      : ` - ${endDate}`
                    : " - "}
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1">
                <span
                  className={`text-[#252F51] text-[14px] font-semibold leading-tight`}
                >
                  {title}
                </span>
                <span className={`text-[#252F51] text-[12px] font-normal `}>
                  {subtitle}
                </span>
                {text && (
                  <span className={`text-[#252F51] text-[10px] font-light`}>
                    {text}
                  </span>
                )}
                {list && (
                  <ul className="ml-4">
                    {list.map((t, i) => (
                      <li
                        className={`list-disc text-[#252F51] text-[10px] font-light`}
                        key={i}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const ConsentSection = () => {
  return (
    <div className="flex">
      <span className="text-[8px] italic font-normal leading-none text-gray-400 pt-1">
        {consent}
      </span>
    </div>
  );
};

const RightBar = () => {
  return (
    <div className="flex flex-col justify-between">
      <AboutSection />
      <div className="flex flex-col">
        <KeySkillsSection />
        <RightSection {...{headline: "Work Experience", blocks: jobBlock}} />
        <RightSection
          {...{headline: "Workshops & trainings", blocks: workshopBlocks}}
        />
        <RightSection {...{headline: "Education", blocks: educationBlocks}} />
      </div>
      <ConsentSection />
    </div>
  );
};

const CVPanel = ({cvRef}: {cvRef: React.RefObject<HTMLDivElement>}) => {
  return (
    <div ref={cvRef} className="flex bg-white h-[293mm] w-[210mm] p-4 gap-4">
      <LeftBar />
      <RightBar />
    </div>
  );
};

const Resume = () => {
  useTrackPageViewsInGA();
  const fileName = `${fullName} - CV`;

  const cvRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: fileName,
  });

  // TODO: Requires style fixing

  // const {downloadPDF} = useDownloadPDF();
  // const handleDownload = () => {
  //   if (cvRef.current) {
  //     downloadPDF(cvRef.current, `${fileName}.pdf`);
  //   }
  // };

  const imagePath = `${BASE_URL}/images/bg.webp`;
  return (
    <BgContainer
      data-theme="resume"
      imagePath={imagePath}
      className="flex flex-col gap-2 items-center justify-center bg-[110%] p-2"
    >
      <div className="w-[210mm] flex items-start gap-2">
        <button
          className="bg-onPrimary text-[#252F51] rounded-sm px-2"
          onClick={handlePrint}
        >
          <PiPrinter />
        </button>
        <a
          className="bg-onPrimary text-[#252F51] rounded-sm px-2"
          href={"public/docs/Hanna_Gaudasinska_Zapasnik_CV.pdf"}
        >
          <MdOutlineFileDownload />
        </a>
      </div>
      <CVPanel cvRef={cvRef} />
    </BgContainer>
  );
};

export default Resume;
