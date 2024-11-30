import React from "react";

const sizes = {
  texts: "text-[15px] font-medium",
  textmd: "text-[18px] font-medium",
  headingxs: "text-[15px] font-bold",
  headings: "text-[16px] font-bold",
  headingmd: "text-[17px] font-semibold",
  text3xl: "text-[18px] font-medium",
  heading2xl: "text-[22px] font-semibold",
};

const Heading = ({ children, className = "", size = "text3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
