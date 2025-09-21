import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  to?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  const cmpProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    ...props,
    className: twMerge(
      'btn shadow-md shadow-gray-300 transition-all duration-300 ease-in-out',
      className
    ),
  };

  if (props.to) return <Link {...(cmpProps as LinkProps)} />;
  if (props.href)
    return (
      <a {...(cmpProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  return <button type='button' {...cmpProps} />;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({
  className,
  ...props
}) => (
  <Button
    {...props}
    className={twMerge('btn btn-primary btn-sm rounded-none', className)}
  />
);

export const ButtonSecondary: React.FC<ButtonProps> = ({
  className = '',
  ...props
}) => (
  <Button
    {...props}
    className={twMerge('btn-secondary btn-sm rounded-none', className)}
  />
);

export const ButtonAccent: React.FC<ButtonProps> = ({
  className = '',
  ...props
}) => (
  <Button
    {...props}
    className={twMerge('btn-accent btn-sm rounded-none', className)}
  />
);

export const NavButton: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button
    {...props}
    className={twMerge(
      'btn-ghost btn-md p-2 rounded-none shadow-none',
      className
    )}
  />
);
