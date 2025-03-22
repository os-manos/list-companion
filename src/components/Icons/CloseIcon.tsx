import React from "react";
import type { SVGProps } from "react";

const ErrorIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={props.fill ?? "#FFF"}
      height={props.height ?? "24px"}
      width={props.width ?? "24px"}
      viewBox={props.viewBox ?? "0 -960 960 960"}
      className={"hover:cursor-pointer"}
      {...props}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

export default ErrorIcon;
