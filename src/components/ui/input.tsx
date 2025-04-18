import * as React from "react";

import { cn } from "@/lib/utils";

function InputRoot({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "transition-all duration-200 ease-in-out md:file:h-7 md:file:text-sm aria-invalid:border-destructive aria-invalid:ring-destructive/20 selection:bg-content-tertiary border-2 border-border-primary hover:border-border-hover hover:transition-colors focus-visible:border-brand focus-visible:transition-colors file:text-foreground text-content-primary placeholder:text-border-primary rounded-lg selection:text-primary-foreground flex h-11 w-full min-w-0 bg-transparent px-3 py-2.5 text-base shadow-xs outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base leading-normal",
        className
      )}
      {...props}
    />
  );
}

export { InputRoot };
