import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';

import { useLang } from '../../../../lib/i18n';
import { useStarRating } from '../../../../lib/utils';
import { AnimatedContainer, ContentHeader } from '../../components';
import { DividerLight } from '../../components/ui/Divider';
import {
  languageSection,
  SkillSection,
  techSection,
  toolsSection,
} from '../index';

export const skillsSections: SkillSection[] = [
  languageSection,
  techSection,
  toolsSection,
];

export const Block = ({
  Icon,
  titleKey,
  stars = 0,
}: {
  Icon: any;
  titleKey: string;
  stars?: number;
}) => {
  const { getText } = useLang();
  const { filledStars, emptyStars } = useStarRating(stars);

  return (
    <div className='flex items-center gap-4 w-42'>
      <div className='flex flex-col items-center text-onPrimary w-16 gap-1'>
        {Icon && <Icon size={36} aria-hidden='true' />}
        <span className='text-label-small text-onTertiary text-center'>
          {getText(titleKey!)}
        </span>
      </div>
      <div
        className='flex gap-1'
        role='img'
        aria-label={`${stars} out of 5 stars`}
      >
        {filledStars.map(i => (
          <MdOutlineStar
            key={`star-${i}`}
            size={22}
            className='text-onSecondary'
            aria-hidden='true'
          />
        ))}
        {emptyStars.map(i => (
          <MdOutlineStarBorder
            key={`empty-star-${i}`}
            size={22}
            className='text-onBackground'
            aria-hidden='true'
          />
        ))}
      </div>
    </div>
  );
};

export const Section = ({ headlineKey, blocks }: SkillSection) => {
  const { getText } = useLang();
  return (
    <section className='flex flex-col gap-2 py-2'>
      <h2 className='text-label-large text-onPrimary'>
        {getText(headlineKey!)}
      </h2>
      <div className='flex flex-col gap-2'>
        {blocks?.map((b, i) => (
          <>
            <Blocks list={b.list} />
            {blocks.length - 1 !== i && <DividerLight />}
          </>
        ))}
      </div>
    </section>
  );
};

const Blocks = ({ list }: { list: any[] }) => {
  return (
    <div className='flex gap-4 flex-wrap'>
      {list.map((props, i) => (
        <Block key={i} {...props} />
      ))}
    </div>
  );
};

const Skills = () => {
  const { getText } = useLang();
  return (
    <AnimatedContainer className='p-4 md:p-8 bg-primary'>
      <ContentHeader
        {...{
          title: getText('skills_title'),
          tags: [getText('skills_tag_1'), getText('skills_tag_2')],
        }}
      />
      <div className='flex flex-col gap-4 py-2'>
        {skillsSections.map((s: SkillSection, i: number) => (
          <Section key={i} {...s} />
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Skills;
