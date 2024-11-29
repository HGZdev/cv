export const Divider = ({className}: {className?: string}) => {
  return (
    <div
      className={`border-outline border-solid border-t my-6 md:my-8 text-onBackground opacity-45 ${className}`}
    ></div>
  );
};

export const DividerLight = ({className}: {className?: string}) => {
  return (
    <div
      className={`border-outline border-solid border-t my-2  text-onBackground opacity-50 ${className}`}
    ></div>
  );
};
