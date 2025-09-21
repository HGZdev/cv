import { type IconType } from 'react-icons';

import { TranslationKey } from '../../../lib/i18n';

export interface SkillItem {
  Icon?: IconType | typeof FlagIcon;
  iconProps?: object;
  titleKey: TranslationKey;
  stars?: number;
  hiddenInResume?: boolean;
}

export interface SkillSection {
  headlineKey: TranslationKey;
  blocks: { list: SkillItem[] }[];
}

export interface LanguageSkill {
  Icon: typeof FlagIcon;
  iconProps: { flag: string };
  titleKey: TranslationKey;
  stars: number;
  descKey: TranslationKey;
}

export interface TechSkill {
  Icon: IconType;
  titleKey: TranslationKey;
  stars: number;
  hiddenInResume?: boolean;
}

export interface ToolSkill {
  Icon: IconType;
  titleKey: TranslationKey;
  stars: number;
  hiddenInResume?: boolean;
}

// Helper component for flag icons
export const FlagIcon = ({ flag }: { flag?: string }) => {
  if (!flag) return null;
  return <span className='leading-none'>{flag}</span>;
};
