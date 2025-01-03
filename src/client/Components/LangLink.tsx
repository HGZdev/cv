import React from "react";
import {Link, LinkProps} from "react-router-dom";
import {useLang} from "../../../lib/i18n";
import getConfig from "./getConfig";

const {BASE_URL} = getConfig();

type LangLinkProps = LinkProps & {
  to: string;
};

const LangLink: React.FC<LangLinkProps> = ({to, ...props}) => {
  const {lang} = useLang();
  const localizedPath = `${BASE_URL}/${lang}${to}`;

  return <Link to={localizedPath} {...props} />;
};

export default LangLink;
