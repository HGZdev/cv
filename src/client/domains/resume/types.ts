import { TranslationKey } from '../../../../lib/i18n';

export interface ResumeConfig {
  fileName: string;
  pdfPath: string;
}

export interface AboutText {
  textKey: TranslationKey;
  linkKey: TranslationKey;
}

export interface KeySkill {
  en: string;
  pl: string;
}
