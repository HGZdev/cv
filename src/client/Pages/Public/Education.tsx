import {useLang} from "../../../../lib/i18n";
import AnimatedContainer from "../../AppComponents/AnimatedContainer";
import ContentHeader from "../../AppComponents/ContentHeader";
import {educationBlocks, workshopBlocks} from "../../contentDb";
import {Block} from "./Experience";

const Education = () => {
  const {getText} = useLang();
  return (
    <AnimatedContainer className="p-4 md:p-8 bg-primary">
      <ContentHeader
        {...{
          title: getText("education_title"),
          tags: [
            getText("education_tag_1"),
            getText("education_tag_2"),
            getText("education_tag_3"),
          ],
        }}
      />
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-headline-small text-onPrimary">
            {getText("education_education_title")}
          </h2>
          <div className="flex flex-col gap-6">
            {educationBlocks?.map((props, i) => (
              <Block key={i} {...props} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-headline-small text-onPrimary">
            {getText("education_workshops_title")}
          </h2>
          <div className="flex flex-col gap-6">
            {workshopBlocks?.map((props, i) => (
              <Block key={i} {...props} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default Education;
