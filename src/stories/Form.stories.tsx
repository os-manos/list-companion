import { z } from "zod";
import type { Meta, StoryObj } from "@storybook/react";
import { ControllerRenderProps } from "react-hook-form";

import { FormConfig } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/Form";

const meta = {
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const Schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .string()
    .nonempty("O campo email é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z
    .string()
    .min(
      6,
      "O campo senha precisa ter no mínimo 6 caracteres, um simbolo e um número"
    )
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "O campo senha precisa ter no mínimo 6 caracteres, um simbolo"
    ),
});
type Schema = typeof Schema;

const FormInputName: React.FC<ControllerRenderProps> = (field) => {
  return <input {...field} placeholder="Enter your name" />;
};

const FormInputPassword: React.FC<ControllerRenderProps> = (field) => {
  return <input {...field} type="password" placeholder="Enter your password" />;
};

const FormInputEmail: React.FC<ControllerRenderProps> = (field) => {
  return <input {...field} type="email" placeholder="Enter your email" />;
};

const config: FormConfig<Schema> = {
  hookFormConfig: {
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  },
  item: {
    name: {
      Component: FormInputName,
      label: "Nome",
    },
    password: {
      Component: FormInputPassword,
      label: "Senha",
    },
    email: {
      Component: FormInputEmail,
      label: "Email",
    },
  },
};

export const Default: Story = {
  args: {
    config: config,
    buttonLabel: "Submit",
    onSubmit: () => alert("Form submitted"),
  },
};
