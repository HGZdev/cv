import AnimatedContainer from "../../AppComponents/AnimatedContainer";
import ContentHeader from "../../AppComponents/ContentHeader";
import {educationBlocks, workshopBlocks} from "../../contentDb";
import {Block} from "./Experience";

const Education = () => {
  return (
    <AnimatedContainer className="p-4 md:p-8 bg-primary">
      <ContentHeader
        {...{
          title: "education",
          tags: [
            "Programming",
            "Business Economics",
            "Social and Market Research",
          ],
        }}
      />
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-headline-small text-onPrimary">Education</h2>
          <div className="flex flex-col gap-6">
            {educationBlocks?.map((props, i) => (
              <Block key={i} {...props} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-headline-small text-onPrimary">
            Workshops & Trainings
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
