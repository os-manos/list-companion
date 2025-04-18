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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-fit flex flex-col items-center py-8 px-4 gap-4"
      >
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
        <Button
          type="submit"
          disabled={!form.formState.isDirty}
          className="w-full mt-4"
        >
          {buttonLabel}
        </Button>
      </form>
    </FormRoot>
  );
};
