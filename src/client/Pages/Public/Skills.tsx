import {MdOutlineStar, MdOutlineStarBorder} from "react-icons/md";

import AnimatedContainer from "../../AppComponents/AnimatedContainer";
import {DividerLight} from "../../AppComponents/Divider";
import ContentHeader from "../../AppComponents/ContentHeader";
import {
  BlockProps,
  langSection,
  SectionProps,
  techSection,
  toolsSection,
} from "../../contentDb";

export const skillsSections: SectionProps[] = [
  langSection,
  techSection,
  toolsSection,
];

export const Block = ({Icon, title, stars = 0}: BlockProps) => (
  <div className="flex items-center gap-4 w-42">
    <div className="flex flex-col items-center text-onPrimary w-16 gap-1 ">
      {Icon && <Icon size={36} />}
      <span className="text-label-small text-onTertiary text-center">
        {title}
      </span>
    </div>
    <div className="flex gap-1">
      {Array.from({length: stars}, (_, i) => (
        <MdOutlineStar size={22} className="text-onSecondary" />
      ))}
      {Array.from({length: 5 - stars}, (_, i) => (
        <MdOutlineStarBorder size={22} className="text-onBackground" />
      ))}
    </div>
  </div>
);

export const Section = ({headline, blocks}: SectionProps) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <span className="text-label-large text-onPrimary ">{headline}</span>
      <div className="flex flex-col gap-2">
        {blocks?.map((b, i) => (
          <>
            <Blocks list={b.list} />
            {blocks.length - 1 !== i && <DividerLight />}
          </>
        ))}
      </div>
    </div>
  );
};

const Blocks = ({list}: {list: BlockProps[]}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {list.map((props, i) => (
        <Block key={i} {...props} />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <AnimatedContainer className="p-4 md:p-8 bg-primary">
      <ContentHeader
        {...{
          title: "skills",
          tags: [
            "Versatile Front-end Proficiency",
            "Back-end Experience",
            "Tool-Driven Workflow",
          ],
        }}
      />
      {/* Blocks */}
      <div className="flex flex-col gap-4 py-2">
        {skillsSections.map((s) => (
          <Section {...s} />
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Skills;
