import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';

import { useLang } from '../../../../lib/i18n';
import AnimatedContainer from '../../AppComponents/AnimatedContainer';
import ContentHeader from '../../AppComponents/ContentHeader';
import { DividerLight } from '../../AppComponents/Divider';
import {
  BlockProps,
  langSection,
  SectionProps,
  techSection,
  toolsSection,
} from '../../contentDb';
import { useStarRating } from '../../Hooks';

export const skillsSections: SectionProps[] = [
  langSection,
  techSection,
  toolsSection,
];

export const Block = ({ Icon, titleKey, stars = 0 }: BlockProps) => {
  const { getText } = useLang();
  const { filledStars, emptyStars } = useStarRating(stars);

  return (
    <div className='flex items-center gap-4 w-42'>
      <div className='flex flex-col items-center text-onPrimary w-16 gap-1'>
        {Icon && <Icon size={36} />}
        <span className='text-label-small text-onTertiary text-center'>
          {getText(titleKey!)}
        </span>
      </div>
      <div className='flex gap-1'>
        {filledStars.map(i => (
          <MdOutlineStar
            key={`star-${i}`}
            size={22}
            className='text-onSecondary'
          />
        ))}
        {emptyStars.map(i => (
          <MdOutlineStarBorder
            key={`empty-star-${i}`}
            size={22}
            className='text-onBackground'
          />
        ))}
      </div>
    </div>
  );
};

export const Section = ({ headlineKey, blocks }: SectionProps) => {
  const { getText } = useLang();
  return (
    <div className='flex flex-col gap-2 py-2'>
      <span className='text-label-large text-onPrimary'>
        {getText(headlineKey!)}
      </span>
      <div className='flex flex-col gap-2'>
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

const Blocks = ({ list }: { list: BlockProps[] }) => {
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
        {skillsSections.map((s, i) => (
          <Section key={i} {...s} />
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Skills;
