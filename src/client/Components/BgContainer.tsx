import React from "react";
import {twMerge} from "tailwind-merge";

interface BgContainerProps {
  imagePath: string;
  className?: string;
  children?: React.ReactNode;
}

const BgContainer: React.FC<BgContainerProps> = ({
  imagePath,
  className,
  children,
}) => {
  return (
    <div
      className={twMerge("relative bg-no-repeat bg-cover bg-center", className)}
      // Dynamic image loading (cannot use Tailwind bg-[url(<imagePath>)])
      style={{backgroundImage: `url(${imagePath})`}}
    >
      {children}
    </div>
  );
};

export default BgContainer;
