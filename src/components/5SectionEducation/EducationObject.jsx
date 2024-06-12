import React from "react";

function EducationObject({ children, year, achievment }) {
  return (
    <div className="flex justify-center items-center gap-6 w-full">
      <h4 className="font-title font-medium text-2xl">{year}</h4>
      <hr className="h-5 border-0 rounded-full w-8 relative z-10 bg-secondary" />
      <h3 className="w-full h-[3.65rem] flex items-center">{achievment}</h3>
    </div>
  );
}

export default EducationObject;
