import React from "react";
import { useForm, Resolver, SubmitHandler, FieldValues } from "react-hook-form";
import { useMantineColorScheme, useMantineTheme } from "@mantine/core";

interface VerticalFromProps<TFormValues extends FieldValues> {
  defaultValues?: any;
  resolver?: Resolver<TFormValues>;
  children?: any;
  onSubmit: SubmitHandler<TFormValues>;
  formClass?: string;
}

const VerticalForm = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  defaultValues,
  resolver,
  children,
  onSubmit,
  formClass,
}: VerticalFromProps<TFormValues>) => {
  /*
   * form methods
   */
  const methods = useForm<TFormValues>({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <form
      style={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
      }}
      onSubmit={handleSubmit(onSubmit)}
      className={formClass}
      noValidate
    >
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props && child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                    errors,
                    control,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default VerticalForm;
