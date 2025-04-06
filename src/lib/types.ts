import { z } from "zod";
import { ControllerRenderProps, UseFormProps } from "react-hook-form";

export type FormItemConfig = {
  Component: React.FC<ControllerRenderProps>;
  label?: string;
};

export type FormConfig<TSchema extends z.ZodTypeAny> = {
  item: Record<keyof z.infer<TSchema>, FormItemConfig>;
  hookFormConfig: UseFormProps<z.infer<TSchema>, any, z.infer<TSchema>>;
};
