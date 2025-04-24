import { z } from "zod";
import { Path, useForm } from "react-hook-form";

import { FormConfig } from "@/lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRoot,
} from "./ui/form";
import { Button } from "./ui/button";

type Props<T extends z.ZodTypeAny> = {
  config: FormConfig<T>;
  buttonLabel: string;
  onSubmit: (data: any) => void;
  className?: React.ComponentProps<"form">["className"];
};

export const Form = <TSchema extends z.ZodTypeAny>({
  config,
  onSubmit,
  buttonLabel,
}: Props<TSchema>) => {
  const { hookFormConfig, item } = config;

  const form = useForm<TSchema>(hookFormConfig);

  return (
    <FormRoot {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {Object.entries(item).map(([key, { label, Component }], index) => (
          <FormField
            key={index}
            control={form.control}
            name={key as Path<TSchema>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Component {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" disabled={!form.formState.isDirty}>
          {buttonLabel}
        </Button>
      </form>
    </FormRoot>
  );
};
