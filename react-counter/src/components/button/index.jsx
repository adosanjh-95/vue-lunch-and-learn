import React from 'react';
import './index.css';

const Button = ({
  clickHandler,
  children,
  disabled = false
}) => {
  return (
    <button className="cta" disabled={disabled} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;