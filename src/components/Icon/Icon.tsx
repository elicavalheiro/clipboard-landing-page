import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';

export const Icon = ({ ...props }: FontAwesomeIconProps) => {
  return <FontAwesomeIcon {...props} />;
};
