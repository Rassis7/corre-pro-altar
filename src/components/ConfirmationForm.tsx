import { forwardRef, useImperativeHandle } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ConfirmationFormRef = {
  save: () => void;
};

type Inputs = {
  name: string;
  phone: string;
};

export const ConfirmationForm = forwardRef<ConfirmationFormRef, unknown>(
  (_, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log("aqui");
    };

    useImperativeHandle(ref, () => ({
      save: () => {
        handleSubmit(onSubmit);
      },
    }));

    return (
      <>
        <input
          className="form-input base-input"
          type="text"
          placeholder="Insira seu nome completo"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">O nome é obrigatório</p>
        )}
        <input
          className="form-input base-input"
          type="text"
          placeholder="Insira seu telefone"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs italic">
            O telefone é obrigatório
          </p>
        )}
      </>
    );
  }
);
