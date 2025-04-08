import { InputRoot } from "./ui/input";

type AllowedInputs = "email" | "password" | "text";

type Props = React.ComponentProps<"input"> & {
  type?: AllowedInputs;
};

const PasswordInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <InputRoot
      type={"password"}
      data-slot="input"
      className={className}
      {...props}
    />
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
