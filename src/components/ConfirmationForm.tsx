import Input from "./Input";

const ConfirmationForm = () => {
  return (
    <form action="">
      <Input
        type="text"
        name="name"
        id="name"
        className="form-input base-input"
        placeholder="Insira seu nome completo"
        errorMessage="O nome é obrigatório"
      />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
      <Input
        type="tel"
        name="phone"
        placeholder="Insira seu telefone"
        errorMessage="Insira um telefone corretamente"
      />
    </form>
  );
};

export default ConfirmationForm;
