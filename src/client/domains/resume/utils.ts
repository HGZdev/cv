import { formatDate } from '../../../../lib/utils';

export const getDateRangeString = ({
  startDate,
  endDate,
  getText,
  lang: forceLang,
}: {
  startDate: string;
  endDate?: string;
  getText: Function;
  lang?: 'en' | 'pl';
}) => {
  return `${formatDate(startDate, 'MMM yyyy', forceLang)} ${
    endDate
      ? endDate !== startDate
        ? ` – ${formatDate(endDate, 'MMM yyyy', forceLang)}`
        : ''
      : ` – ${getText('date_present', forceLang)}`
  }`;
};
