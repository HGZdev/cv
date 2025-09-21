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
    <article className='flex flex-col'>
      <time
        className='text-title-small text-onSecondary'
        dateTime={`${startDate}/${endDate ?? 'present'}`}
      >
        {startDate && getDateRangeString({ startDate, endDate, getText })}
      </time>
      <h3 className='text-title-large-mobile md:text-title-large text-onPrimary'>
        {titleKey ? getText(titleKey) : ''}
      </h3>
      <h4 className='text-title-medium text-onPrimary'>
        {subtitleKey ? getText(subtitleKey) : ''}
      </h4>
      {textKey && (
        <p className='text-body-medium text-onTertiary'>{getText(textKey)}</p>
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
    </article>
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
