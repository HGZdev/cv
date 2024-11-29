import type {IconType} from "react-icons";
import {
  MdOutlineFileDownload,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from "react-icons/md";
import {PiGraduationCap} from "react-icons/pi";
import {Link, useLocation} from "react-router-dom";
import getConfig from "../Components/getConfig";
import {BiWrench} from "react-icons/bi";
import {pdfPath} from "../contentDb";
import {twMerge} from "tailwind-merge";

const {BASE_URL, VITE_BASE_URL} = getConfig();

const Icon = ({
  Cmp,
  size = 28,
  className = "",
  isActive,
}: {
  Cmp: IconType;
  size?: number;
  className?: string;
  isActive?: boolean;
}) => (
  <div
    className={twMerge(
      isActive ? "text-onSecondary" : "text-onTertiary",
      "hover:text-onPrimary hover:scale-110 transition-transform duration-200",
      className
    )}
  >
    <Cmp size={size} />
  </div>
);

const Menu = () => {
  const {pathname} = useLocation();
  const isActive = (path: string) => pathname === `${BASE_URL}${path}`;

  return (
    <div className="flex flex-col justify-center items-center h-full py-8 md:bg-secondary">
      <div className="text-onSecondary md:text-[24px] font-bold">HGZ</div>
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <Link to={`${BASE_URL}/`}>
          <Icon
            Cmp={MdOutlinePersonOutline}
            isActive={pathname === BASE_URL || pathname === `${BASE_URL}/`}
          />
        </Link>
        <Link to={`${BASE_URL}/skills`}>
          <Icon Cmp={BiWrench} isActive={isActive("/skills")} size={26} />
        </Link>
        <Link to={`${BASE_URL}/experience`}>
          <Icon Cmp={MdOutlineWorkOutline} isActive={isActive("/experience")} />
        </Link>
        <Link to={`${BASE_URL}/education`}>
          <Icon Cmp={PiGraduationCap} isActive={isActive("/education")} />
        </Link>
      </div>
      <a href={`${VITE_BASE_URL}${pdfPath}`} target="_blank">
        <Icon Cmp={MdOutlineFileDownload} />
      </a>
    </div>
  );
};

export default Menu;
