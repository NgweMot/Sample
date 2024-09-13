import React from "react";

const ContainerComponent = ({ children }) => {
  return (
    <div className=" xl:max-w-[1280px] 3xl:max-w-[1536px] mx-auto">
      {children}
    </div>
  );
};

export default ContainerComponent;
