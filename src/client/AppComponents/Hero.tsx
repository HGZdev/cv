import {Link} from "react-router-dom";
import BgContainer from "../Components/BgContainer";
import getConfig from "../Components/getConfig";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {MdOutlineEmail, MdPhoneIphone} from "react-icons/md";
import {type IconType} from "react-icons";
import {
  email,
  firstName,
  github,
  jobTitle,
  lastName,
  linkedIn,
  phone,
} from "../contentDb";

const IconLink = ({
  Cmp,
  to = "",
  size = 22,
  className = "",
}: {
  Cmp: IconType;
  to: string;
  size?: number;
  className?: string;
  isActive?: boolean;
}) => (
  <Link
    to={to}
    target="_blank"
    className={`text-onPrimary hover:text-onSecondary hover:scale-110 transition-transform duration-200 ${className}`}
  >
    <Cmp size={size} />
  </Link>
);

const {BASE_URL} = getConfig();

interface HeroBgContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const HeroBgContainer: React.FC<HeroBgContainerProps> = ({
  className,
  children,
}) => {
  const imagePath = `${BASE_URL}/images/portrait.webp`;
  return (
    <div
      className={`relative bg-clip-border bg-no-repeat bg-cover bg-[calc(50%+30px)_center] xl:bg-center ${className}`}
      // We can't use tailwind for dynamic image loading
      style={{backgroundImage: `url(${imagePath})`}}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <HeroBgContainer className="clip-container flex flex-col items-center justify-end h-full relative">
      <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-primary to-transparent"></div>

      {/* text */}
      <div className="relative p-2 mb-4">
        <h2 className="text-headline-medium-mobile lg:text-headline-medium text-onPrimary">
          {firstName}
        </h2>
        <h2 className="text-headline-medium-mobile lg:text-headline-medium text-onPrimary">
          {lastName}
        </h2>
        <h3 className="text-headline-small-mobile lg:text-headline-small text-center text-onSecondary">
          {jobTitle}
        </h3>
        <div className="flex justify-center gap-4 mt-4">
          <IconLink Cmp={MdPhoneIphone} to={`tel:${phone}`} />
          <IconLink Cmp={MdOutlineEmail} to={`mailto:${email}`} />
          <IconLink Cmp={FaGithub} to={github} />
          <IconLink Cmp={FaLinkedinIn} to={linkedIn} />
        </div>
      </div>
    </HeroBgContainer>
  );
};

export default Hero;
