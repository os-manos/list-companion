import { SvgProps } from "@/lib/Props";
import { cn } from "@/lib/utils";

export const Close: React.FC<SvgProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={cn("fill-white w-4 h-4 lg:w-6 lg:h-6", className)}
      {...props}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};
