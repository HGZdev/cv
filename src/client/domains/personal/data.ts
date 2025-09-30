import { decodeString } from '../../../../lib/utils';
import { PersonalData, PersonalSection } from './types';

export const personalData: PersonalData = {
  firstName: 'Hanna',
  lastName: 'Gaudasińska-Zapaśnik',
  fullName: 'Hanna Gaudasińska-Zapaśnik',
  jobTitle: 'Software Developer',
  email: decodeString('ih{/efwjAhnbjm/dpn'),
  phone: decodeString(',59617153:48'),
  www: 'https://hgzdev.github.io/cv',
  linkedIn: 'https://www.linkedin.com/in/hanna-gaudasinska-zapasnik',
  github: 'https://github.com/HGZdev',
};

// Export individual fields for backward compatibility
export const firstName = personalData.firstName;
export const lastName = personalData.lastName;
export const fullName = personalData.fullName;
export const jobTitle = personalData.jobTitle;
export const email = personalData.email;
export const phone = personalData.phone;
export const www = personalData.www;
export const linkedIn = personalData.linkedIn;
export const github = personalData.github;

export const personalSection: PersonalSection = {
  headlineKey: 'personal_headline',
  blocks: [
    {
      list: [
        {
          titleKey: 'personal_location_title',
          descKey: 'location_warsaw',
        },
        {
          titleKey: 'personal_phone_title',
          desc: personalData.phone,
          linkType: 'tel:',
        },
        {
          titleKey: 'personal_email_title',
          desc: personalData.email,
          linkType: 'mailto:',
        },
        {
          titleKey: 'personal_www_title',
          desc: personalData.www,
          linkType: '',
        },
        {
          titleKey: 'personal_github_title',
          desc: personalData.github,
          linkType: '',
        },
        {
          titleKey: 'personal_linkedin_title',
          desc: personalData.linkedIn,
          linkType: '',
        },
      ],
    },
  ],
};

export const hobbiesSection: PersonalSection = {
  headlineKey: 'hobbies_headline',
  blocks: [
    {
      list: [{ titleKey: '', descKey: 'hobbies_desc' }],
    },
  ],
};
