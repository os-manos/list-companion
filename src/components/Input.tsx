import { InputRoot } from "./ui/input";

import { cn } from "@/lib/utils";

export const Input: React.FC<React.ComponentProps<"input">> = ({
  className,
  type,
  ...props
}) => {
  return (
    <InputRoot
      type={type}
      data-slot="input"
      className={cn(
        "h-11 px-3 py-2.5 leading-normal",
        "file:h-6 file:text-xs",
        "md:h-12 md:px-4 md:py-3 md:text-base md:file:h-7 md:file:text-sm",
        "transition-all duration-200 ease-in-out",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};
