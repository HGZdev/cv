import { type IconType } from 'react-icons';
import { BiWrench } from 'react-icons/bi';
import {
  MdOutlineFileDownload,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { useLang } from '../../../lib/i18n';
import getConfig from '../Components/getConfig';
import LangLink from '../Components/LangLink';
import { pdfPath } from '../contentDb';
import LangSwitcher from './LangSwitcher';

const { VITE_BASE_URL, BASE_URL } = getConfig();

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
  const { lang } = useLang();
  const { pathname } = useLocation();

  const isActiveRoute = (path: string) =>
    pathname === `${BASE_URL}/${lang}${path}`;

  return (
    <div className='flex flex-col justify-center items-center h-full py-8 md:bg-secondary'>
      <div className='text-onSecondary md:text-[24px] font-bold'>
        <LangSwitcher />
      </div>
      <div className='flex flex-col justify-center items-center h-full gap-3'>
        <LangLink to='/'>
          <Icon Cmp={MdOutlinePersonOutline} isActive={isActiveRoute('/')} />
        </LangLink>
        <LangLink to='/skills'>
          <Icon Cmp={BiWrench} size={26} isActive={isActiveRoute('/skills')} />
        </LangLink>
        <LangLink to='/experience'>
          <Icon
            Cmp={MdOutlineWorkOutline}
            isActive={isActiveRoute('/experience')}
          />
        </LangLink>
        <LangLink to='/education'>
          <Icon Cmp={PiGraduationCap} isActive={isActiveRoute('/education')} />
        </LangLink>
      </div>
      <a href={`${VITE_BASE_URL}${pdfPath}`} target='_blank'>
        <Icon Cmp={MdOutlineFileDownload} isActive={isActiveRoute('/resume')} />
      </a>
    </div>
  );
};

export default Menu;
