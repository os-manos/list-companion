import { z } from "zod";
import { ControllerRenderProps, UseFormProps } from "react-hook-form";

export type ItemConfig = {
  Component: React.FC<ControllerRenderProps>;
  label?: string;
};

export type FormConfig<TSchema extends z.ZodTypeAny> = {
  item: Record<keyof z.infer<TSchema>, ItemConfig>;
  hookFormConfig: UseFormProps<z.infer<TSchema>, any, z.infer<TSchema>>;
};
