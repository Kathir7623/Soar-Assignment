import React from "react";

const CloseSVG = ({
  fillColor = "#000000", 
  className = "", 
  ...props 
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={props?.height || 20}
      width={props?.width || 20}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4.707 3.293L3.293 4.707 10.586 12 3.293 19.293l1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293z" />
    </svg>
  );
};

export { CloseSVG };
