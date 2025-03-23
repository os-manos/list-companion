import { SvgProps } from "@/lib/Props";
import { cn } from "@/lib/utils";

export const Checklist: React.FC<SvgProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={cn("fill-white w-4 h-4 lg:w-6 lg:h-6", className)}
      {...props}
    >
      <path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z" />
    </svg>
  );
};
