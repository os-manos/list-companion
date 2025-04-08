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
        "file:text-foreground text-content-primary placeholder:text-content-tertiary rounded-lg selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-brand focus-visible:placeholder:text-content-primary focus-visible:transition-colors",
        "hover:border-border-hover hover:transition-colors",
        "selection:bg-content-tertiary border-2 border-border-primary",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  );
}

export { InputRoot };
