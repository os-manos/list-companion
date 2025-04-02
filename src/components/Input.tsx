import { InputRoot } from "./ui/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputRoot
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground text-content-primary placeholder:text-content-tertiary",
        "selection:bg-border-primary dark:bg-input/30 border-2 border-border-primary",
        "flex w-full min-w-0 rounded-lg bg-transparent outline-none",
        "h-11 px-3 py-2.5 text-sm leading-normal",
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium",
        "md:h-12 md:px-4 md:py-3 md:text-base md:file:h-7 md:file:text-sm",
        "transition-all duration-200 ease-in-out",
        "hover:border-border-hover hover:transition-colors",
        "focus-visible:border-brand focus-visible:placeholder:text-content-primary focus-visible:transition-colors",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
