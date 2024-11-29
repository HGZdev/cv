import AnimatedContainer from "../../AppComponents/AnimatedContainer";
import ContentHeader from "../../AppComponents/ContentHeader";
import {jobBlock} from "../../contentDb";

export const Block = ({
  title,
  subtitle,
  startDate,
  endDate,
  text,
  list,
}: {
  title?: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  text?: string;
  list?: string[];
}) => (
  <div className="flex flex-col">
    <span className="text-title-small text-onSecondary">
      {startDate}
      {endDate ? (endDate === startDate ? "" : ` - ${endDate}`) : " - "}
    </span>
    <span className="text-title-large-mobile md:text-title-large text-onPrimary">
      {title}
    </span>
    <span className="text-title-medium text-onPrimary">{subtitle}</span>
    {text && <span className="text-body-medium text-onTertiary">{text}</span>}
    {list && (
      <ul className="ml-4 mt-2">
        {list.map((t, i) => (
          <li className="text-body-medium text-onTertiary list-disc" key={i}>
            {t}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Experience = () => {
  return (
    <AnimatedContainer className="p-4 md:p-8 bg-primary">
      <ContentHeader
        {...{
          title: "experience",
          tags: [
            "Seven years of IT experience",
            "Product Management",
            "Client Liaison",
            "Market Research Experience",
          ],
        }}
      />
      <div className="flex flex-col gap-6">
        {jobBlock?.map((props, i) => (
          <Block key={i} {...props} />
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Experience;
