import { type IconType } from 'react-icons';
import { BiWrench } from 'react-icons/bi';
import {
  MdOutlineFileDownload,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

import { getConfig } from '../../../../lib/config';
import { useActiveRoute } from '../../../../lib/routing';
import { resumeConfig } from '../../domains/index.ts';
import LangLink from '../common/LangLink';
import LangSwitcher from './LangSwitcher';

const { VITE_BASE_URL } = getConfig();

const Icon = ({
  Cmp,
  size = 28,
  className = '',
  isActive,
}: {
  Cmp: IconType;
  size?: number;
  className?: string;
  isActive: boolean;
}) => (
  <div
    className={twMerge(
      isActive ? 'text-onSecondary' : 'text-onTertiary',
      'hover:text-onPrimary hover:scale-110 transition-transform duration-200',
      className
    )}
  >
    <Cmp size={size} />
  </div>
);

const Menu = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full py-8 md:bg-secondary'>
      <div className='text-onSecondary md:text-[24px] font-bold'>
        <LangSwitcher />
      </div>
      <div className='flex flex-col justify-center items-center h-full gap-3'>
        <LangLink to='/'>
          <Icon Cmp={MdOutlinePersonOutline} isActive={useActiveRoute('/')} />
        </LangLink>
        <LangLink to='/skills'>
          <Icon Cmp={BiWrench} size={26} isActive={useActiveRoute('/skills')} />
        </LangLink>
        <LangLink to='/experience'>
          <Icon
            Cmp={MdOutlineWorkOutline}
            isActive={useActiveRoute('/experience')}
          />
        </LangLink>
        <LangLink to='/education'>
          <Icon Cmp={PiGraduationCap} isActive={useActiveRoute('/education')} />
        </LangLink>
      </div>
      <a href={`${VITE_BASE_URL}${resumeConfig.pdfPath}`} target='_blank'>
        <Icon
          Cmp={MdOutlineFileDownload}
          isActive={useActiveRoute('/resume')}
        />
      </a>
    </div>
  );
};

export default Menu;
