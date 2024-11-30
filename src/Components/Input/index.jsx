import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <label className={className}>
        {label && <span>{label}</span>} {/* Rendering the label if it exists */}
        {prefix && <span>{prefix}</span>} {/* Rendering the prefix if it exists */}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps} // Spread any additional props
        />
        {suffix && <span>{suffix}</span>} {/* Rendering the suffix if it exists */}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func,
};

export { Input };
