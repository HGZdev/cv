import React from "react";

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
      className={`relative bg-no-repeat bg-cover bg-center ${className}`}
      // We can't use tailwind for dynamic image loading
      style={{backgroundImage: `url(${imagePath})`}}
    >
      {children}
    </div>
  );
};

export default BgContainer;
