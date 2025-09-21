import { TranslationKey } from '../../../lib/i18n';

export interface JobExperience {
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  startDate: string;
  endDate?: string;
  listKeys?: TranslationKey[];
  location?: string;
  hiddenInResume?: boolean;
}

export interface WorkshopExperience {
  subtitleKey: TranslationKey;
  listKeys?: TranslationKey[];
  startDate: string;
  endDate?: string;
  location?: string;
}
