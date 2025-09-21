import { TranslationKey } from '../../../../lib/i18n';

export interface PersonalInfo {
  titleKey: TranslationKey;
  desc?: string;
  descKey?: TranslationKey;
  linkType?: string;
}

export interface PersonalData {
  firstName: string;
  lastName: string;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  www: string;
  linkedIn: string;
  github: string;
}

export interface PersonalSection {
  headlineKey: TranslationKey;
  blocks: { list: PersonalInfo[] }[];
}
