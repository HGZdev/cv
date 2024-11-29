import {Divider} from "./Divider";

export const Break = () => (
  <span className="text-label-medium text-onTertiary mx-2">/</span>
);

const ContentHeader = ({title, tags}: {title: string; tags: string[]}) => {
  return (
    <>
      <h1 className="text-headline-large-mobile md:text-headline-large text-onPrimary">
        {title}
      </h1>
      <p className="text-label-medium-mobile md:text-label-medium text-onSecondary">
        {tags.map((t, i) => (
          <>
            {t}
            {i !== tags.length - 1 && <Break />}
          </>
        ))}
      </p>
      <Divider />
    </>
  );
};

export default ContentHeader;
