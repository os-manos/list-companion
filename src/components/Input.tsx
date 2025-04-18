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

type PasswordIconOption = {
  shown: React.FC<SvgProps>;
  hide: React.FC<SvgProps>;
};

type PasswordInputProps = Props & {
  icon: PasswordIconOption;
};

type IconProps = Record<AllowedInputs, React.FC<SvgProps> | PasswordIconOption>;

const Icons: Partial<IconProps> = {
  email: UserIcon,
  password: {
    hide: HideIcon,
    shown: ShowIcon,
  },
};

export const Input: React.FC<Props> = ({ type = "text", ...props }) => {
  const Svg = Icons[type];
  if (!Svg) {
    return <InputRoot type="text" data-slot="input" {...props} />;
  }
  if (typeof Svg === "object") {
    return <PasswordInput icon={Svg} {...props} />;
  }
  return <IconInput Icon={Svg} type={type} {...props} />;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  icon,
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? icon.hide : icon.shown;
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

type IconInputProps = Props & {
  Icon: React.FC<SvgProps>;
};
const IconInput: React.FC<IconInputProps> = ({
  Icon,
  disabled,
  type,
  ...props
}) => {
  return (
    <div className="relative flex items-center">
      <InputRoot
        disabled={disabled}
        type={type}
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
