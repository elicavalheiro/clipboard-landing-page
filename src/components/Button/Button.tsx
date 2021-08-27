import React from 'react';
import { ButtonProps, ButtonVariationsType } from './Button.types';

import './Button.style.scss'

export const Button = ({ children, variation }: ButtonProps) => {
  const variations: ButtonVariationsType = {
    primary: 'button button__primary-green',
    secondary: 'button button__secondary-blue',
  };

  return <button className={variations[variation]}>{children}</button>;
};
