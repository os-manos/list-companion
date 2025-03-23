import { SvgProps } from "@/lib/Props";
import { cn } from "@/lib/utils";

export const Home: React.FC<SvgProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={cn("fill-white w-4 h-4 lg:w-6 lg:h-6", className)}
      {...props}
    >
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );
};
