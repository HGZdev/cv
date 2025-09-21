import { JobExperience, WorkshopExperience } from './types';

export const jobExperience: JobExperience[] = [
  {
    titleKey: 'jobs_eqt_title',
    subtitleKey: 'jobs_eqt_subtitle',
    startDate: '2025-06',
    listKeys: ['jobs_eqt_responsibility_1', 'jobs_eqt_responsibility_2'],
    location: 'location_warsaw',
  },
  {
    titleKey: 'jobs_stratokit_title',
    subtitleKey: 'jobs_stratokit_subtitle',
    startDate: '2021-04',
    endDate: '2025-06',
    listKeys: [
      'jobs_stratokit_responsibility_1',
      'jobs_stratokit_responsibility_2',
      'jobs_stratokit_responsibility_3',
      'jobs_stratokit_responsibility_4',
      'jobs_stratokit_responsibility_5',
      'jobs_stratokit_responsibility_6',
    ],
    location: 'location_warsaw',
  },
  {
    titleKey: 'jobs_yaska_title',
    subtitleKey: 'jobs_yaska_subtitle',
    startDate: '2017-10',
    endDate: '2021-04',
    listKeys: [
      'jobs_yaska_responsibility_1',
      'jobs_yaska_responsibility_2',
      'jobs_yaska_responsibility_3',
    ],
    location: 'location_warsaw',
  },
  {
    titleKey: 'jobs_voicemap_title',
    subtitleKey: 'jobs_voicemap_subtitle',
    listKeys: ['jobs_voicemap_text'],
    startDate: '2016-12',
  },
  {
    titleKey: 'jobs_tns_title',
    subtitleKey: 'jobs_tns_subtitle',
    startDate: '2013-05',
    endDate: '2015-05',
    listKeys: ['jobs_tns_responsibility_1'],
    location: 'location_warsaw',
  },
  {
    titleKey: 'jobs_acnielsen_title',
    subtitleKey: 'jobs_acnielsen_subtitle',
    startDate: '2012-09',
    endDate: '2013-03',
    listKeys: ['jobs_acnielsen_responsibility_1'],
    location: 'location_warsaw',
  },
  {
    titleKey: 'jobs_loreal_title',
    subtitleKey: 'jobs_loreal_subtitle',
    startDate: '2010-06',
    endDate: '2010-12',
    listKeys: ['jobs_loreal_responsibility_1'],
    location: 'location_warsaw',
    hiddenInResume: true,
  },
];

export const workshopExperience: WorkshopExperience[] = [
  {
    subtitleKey: 'workshops_coders_lab_subtitle',
    listKeys: ['workshops_coders_lab_text'],
    startDate: '2017-04',
    endDate: '2017-06',
    location: 'location_warsaw',
  },
];
