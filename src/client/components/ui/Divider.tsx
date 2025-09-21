import { twMerge } from 'tailwind-merge';

const Divider = ({ className }: { className?: string }) => {
  return (
    <hr
      className={twMerge(
        'border-outline border-solid border-t my-6 md:my-8 text-onBackground opacity-45',
        className
      )}
      role='separator'
    />
  );
};

export const DividerLight = ({ className }: { className?: string }) => {
  return (
    <hr
      className={twMerge(
        'border-outline border-solid border-t my-2 text-onBackground opacity-50',
        className
      )}
      role='separator'
    />
  );
};

export default Divider;
