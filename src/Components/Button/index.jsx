import React from "react";
import PropTypes from "prop-types";

const Button =({
  children,
  className = "",
  leftIcon,
  ridghtIcon,

  ...restProps
}) => {
  return (
    <button className={'${className} '} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!ridghtIcon && ridghtIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  ridghtIcon: PropTypes.node,
  };

export {Button};