import React, { SVGProps } from "react";

const Close = ({
  height = "24px",
  width = "24px",
  fill = "#FFF",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}
      {...props}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

export default Close;
