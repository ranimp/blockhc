/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { ButtonType } from './style';
import { ButtonProps } from '../../types/index';

const Button: React.FC<ButtonProps> = ({ type, title, onClick }) => {
  const classNames = ButtonType[type];
  return (
    <button className={classNames} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
