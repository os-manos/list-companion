import { useState } from "react";
import { InputRoot } from "./ui/input";
import { ShowIcon } from "./icons/Show";
import { HideIcon } from "./icons/Hide";
import { UserIcon } from "./icons/User";
import { SvgProps } from "@/lib/Props";
import { cn } from "@/lib/utils";

type AllowedInputs = "email" | "password" | "text";

type Props = React.ComponentProps<"input"> & {
  type?: AllowedInputs;
};

type PasswordProps = {
  shown: React.FC<SvgProps>;
  hide: React.FC<SvgProps>;
};

type IconProps = {
  [K in AllowedInputs]: K extends "password"
    ? PasswordProps
    : React.FC<SvgProps>;
};

const Icons: Partial<IconProps> = {
  email: UserIcon,
  password: {
    hide: HideIcon,
    shown: ShowIcon,
  },
};

const PasswordInput: React.FC<Props> = ({ disabled, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? Icons.password!.hide : Icons.password!.shown;

  return (
    <div className="relative flex items-center">
      <InputRoot
        disabled={disabled}
        data-slot="input"
        className={"peer"}
        {...props}
        type={showPassword ? "text" : "password"}
      />
      <Icon
        className={cn(
          "peer-focus:fill-brand fill-border-primary",
          "peer-hover:fill-border-hover peer-hover:transition-colors",
          "peer-focus-visible:fill-brand",
          "absolute right-3 h-5 w-5 hover:cursor-pointer",
          {
            "pointer-events-none cursor-not-allowed opacity-50": disabled,
          }
        )}
        onClick={() => setShowPassword(!showPassword)}
        aria-disabled={disabled}
      />
    </div>
  );
};

const IconInput: React.FC<Props> = ({ disabled, type, ...props }) => {
  const Icon = type && typeof Icons[type] === "function" && Icons[type];

  return (
    <div className="relative flex items-center">
      <InputRoot
        disabled={disabled}
        type={type}
        data-slot="input"
        className={"peer"}
        {...props}
      />
      {Icon && (
        <Icon
          className={cn(
            "peer-focus:fill-brand fill-border-primary",
            "peer-hover:fill-border-hover peer-hover:transition-colors",
            "peer-focus-visible:fill-brand",
            "absolute right-3 h-5 w-5 hover:cursor-pointer",
            {
              "pointer-events-none cursor-not-allowed opacity-50": disabled,
            }
          )}
          aria-disabled={disabled}
        />
      )}
    </div>
  );
};

const DefaultInput: React.FC<Props> = ({ disabled, ...props }) => {
  return (
    <InputRoot disabled={disabled} type="text" data-slot="input" {...props} />
  );
};

export const Input: React.FC<Props> = ({ type, disabled, ...props }) => {
  const inputType = type ?? "text";

  if (inputType === "text") {
    return <DefaultInput disabled={disabled} {...props} />;
  }
  if (inputType === "password") {
    return <PasswordInput disabled={disabled} {...props} />;
  }
  if (typeof Icons[inputType] === "function") {
    return <IconInput type={inputType} disabled={disabled} {...props} />;
  }
};
