import { useState } from "react";
import { InputRoot } from "./ui/input";
import { ShowIcon } from "./icons/Show";
import { HideIcon } from "./icons/Hide";

type AllowedInputs = "email" | "password" | "text";

type Props = React.ComponentProps<"input"> & {
  type?: AllowedInputs;
};

const PasswordInput: React.FC<Props> = ({ className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? HideIcon : ShowIcon;

  return (
    <div className="relative flex items-center">
      <InputRoot
        type={showPassword ? "text" : "password"}
        data-slot="input"
        className={`peer ${className}`}
        {...props}
      />
      <Icon
        className={`${
          props.disabled && "pointer-events-none cursor-not-allowed opacity-50"
        } peer-focus:fill-brand fill-border-primary peer-hover:fill-border-hover peer-hover:transition-colors peer-focus-visible:fill-brand absolute right-3 h-5 w-5 hover:cursor-pointer`}
        onClick={() => setShowPassword(!showPassword)}
        aria-disabled={props.disabled}
      />
    </div>
  );
};

const EmailInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <InputRoot
      type={"email"}
      data-slot="input"
      className={className}
      {...props}
    />
  );
};

const TextInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <InputRoot
      type={"text"}
      data-slot="input"
      className={className}
      {...props}
    />
  );
};

const inputComponents: Record<AllowedInputs, React.FC<Props>> = {
  email: EmailInput,
  text: TextInput,
  password: PasswordInput,
};

export const Input: React.FC<Props> = ({ type, ...props }) => {
  const InputComponent = type ? inputComponents[type] : inputComponents["text"];
  return <InputComponent {...props} />;
};
