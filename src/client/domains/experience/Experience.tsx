import { useLang } from '../../../../lib/i18n';
import { AnimatedContainer, ContentHeader } from '../../components';
import { jobExperience } from '../index';
import { getDateRangeString } from '../resume/utils';

export const Block = ({
  titleKey,
  subtitleKey,
  startDate,
  endDate,
  textKey,
  listKeys,
}: {
  titleKey?: string;
  subtitleKey?: string;
  startDate?: string;
  endDate?: string;
  textKey?: string;
  listKeys?: string[];
}) => {
  const { getText } = useLang();

  return (
    <div className='flex flex-col'>
      <span className='text-title-small text-onSecondary'>
        {startDate && getDateRangeString({ startDate, endDate, getText })}
      </span>
      <span className='text-title-large-mobile md:text-title-large text-onPrimary'>
        {titleKey ? getText(titleKey) : ''}
      </span>
      <span className='text-title-medium text-onPrimary'>
        {subtitleKey ? getText(subtitleKey) : ''}
      </span>
      {textKey && (
        <span className='text-body-medium text-onTertiary'>
          {getText(textKey)}
        </span>
      )}
      {listKeys && (
        <ul className='ml-4 mt-2'>
          {listKeys.map((key, i) => (
            <li className='text-body-medium text-onTertiary list-disc' key={i}>
              {getText(key)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Experience = () => {
  const { getText } = useLang();

  return (
    <AnimatedContainer className='p-4 md:p-8 bg-primary'>
      <ContentHeader
        {...{
          title: getText('experience_title'),
          tags: [
            getText('experience_tag_1'),
            getText('experience_tag_2'),
            getText('experience_tag_3'),
            getText('experience_tag_4'),
          ],
        }}
      />
      <div className='flex flex-col gap-6'>
        {jobExperience.map((props, i) => (
          <Block key={i} {...props} />
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Experience;
