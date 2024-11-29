import {Helmet} from "react-helmet";
import getConfig from "../Components/getConfig";
import {fullName} from "../contentDb";

const {BASE_URL, VITE_APP_NAME} = getConfig();

const Metadata = () => {
  if (!BASE_URL) throw new Error("root: BASE_URL is undefined");
  if (!VITE_APP_NAME) throw new Error("root: VITE_APP_NAME is undefined");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={`Professional CV of ${fullName}, showcasing skills, experience, and accomplishments in web development and design. Explore an interactive and detailed profile.`}
      />
      <meta name="author" content={fullName} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Professional CV - ${fullName}`} />
      <meta
        property="og:description"
        content={`Explore the professional CV of ${fullName}. Highlighting expertise, projects, and achievements in web development and design.`}
      />
      <meta
        property="og:url"
        content={`https://hgzdev.github.io/${BASE_URL}/`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${VITE_APP_NAME}`} />
      <meta
        name="twitter:description"
        content={`Detailed CV of ${fullName} showcasing experience, skills, and achievements in web development and design.`}
      />
      <meta
        name="twitter:url"
        content={`https://hgzdev.github.io/${BASE_URL}/`}
      />

      {/* Favicon */}
      <link
        rel="icon"
        href={`https://hgzdev.github.io/${BASE_URL}favicon.ico`}
        type="image/x-icon"
      />
      <title>{VITE_APP_NAME}</title>
    </Helmet>
  );
};

export default Metadata;
