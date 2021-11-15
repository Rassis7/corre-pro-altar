import { InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  name: string;
  errorMessage: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ errorMessage, name, ...props }: Props): JSX.Element => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <>
      <input className="form-input base-input" {...props} />
      {errors[name] && (
        <p className="text-red-500 text-xs italic">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
