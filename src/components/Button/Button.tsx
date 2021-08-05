import React from 'react';
import { ButtonProps, ButtonVariationsType } from './Button.types';

export const Button = ({ children, variation }: ButtonProps) => {
  const variations: ButtonVariationsType = {
    primary: 'button__primary-green',
    secondary: 'button__secondary-blue',
  };

  return <button className={variations[variation]}>{children}</button>;
};
