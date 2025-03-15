import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../../types/form";

type UserProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function User({ register, errors }: UserProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold border-b pb-2">
        Informações do usuário
      </legend>

      <div className="form-group">
        <label className="form-label">Nome</label>
        <input type="text" className="form-input" {...register("name")} />
        <span className="text-red-500 text-sm">{errors.name?.message}</span>
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input type="text" className="form-input" {...register("mail")} />
        <span className="text-red-500 text-sm">{errors.mail?.message}</span>
      </div>

      <div className="form-group">
        <label className="form-label">Senha</label>
        <input
          type="password"
          className="form-input"
          {...register("password")}
        />
        <span className="text-red-500 text-sm">{errors.password?.message}</span>
      </div>

      <div className="form-group">
        <label className="form-label">Idade</label>
        <input type="number" className="form-input" {...register("age")} />
        <span className="text-red-500 text-sm">{errors.age?.message}</span>
      </div>
    </fieldset>
  );
}
