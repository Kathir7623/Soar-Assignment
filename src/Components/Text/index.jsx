import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal",
  texts: "text-[13px] font-normal",
  textmd: "text-[14px] font-normal",
  textlg: "text-[15px] font-normal",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
