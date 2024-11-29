import getConfig from "./getConfig";

const {BASE_URL} = getConfig();

const Logo = ({className}: {className?: string}) => {
  return (
    <span>
      <img alt="logo" className={className} src={`${BASE_URL}/favicon.ico`} />
    </span>
  );
};

export default Logo;
