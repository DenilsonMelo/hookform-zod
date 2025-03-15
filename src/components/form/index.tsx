import { useForm } from "react-hook-form";
import { UFs } from "../../utils/uf";
import { FormData, FormSchema } from "../../types/form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const submit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
    >
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
          <span className="text-red-500 text-sm">
            {errors.password?.message}
          </span>
        </div>

        <div className="form-group">
          <label className="form-label">Idade</label>
          <input type="number" className="form-input" {...register("age")} />
          <span className="text-red-500 text-sm">{errors.age?.message}</span>
        </div>
      </fieldset>

      <fieldset className="space-y-4 mt-6">
        <legend className="text-lg font-semibold border-b pb-2">
          Informações da residência
        </legend>

        <div className="form-group">
          <label className="form-label">Rua</label>
          <input
            type="text"
            className="form-input"
            {...register("address.street")}
          />
          <span className="text-red-500 text-sm">
            {errors.address?.street?.message}
          </span>
        </div>

        <div className="form-group">
          <label className="form-label">Número</label>
          <input
            type="number"
            className="form-input"
            {...register("address.number")}
          />
          <span className="text-red-500 text-sm">
            {errors.address?.number?.message}
          </span>
        </div>

        <div className="form-group">
          <label className="form-label">Cidade</label>
          <input
            type="text"
            className="form-input"
            {...register("address.city")}
          />
          <span className="text-red-500 text-sm">
            {errors.address?.city?.message}
          </span>
        </div>

        <div className="form-group">
          <label className="form-label">Complemento</label>
          <input
            type="text"
            className="form-input"
            {...register("address.complement")}
          />
          <span className="text-red-500 text-sm">
            {errors.address?.complement?.message}
          </span>
        </div>

        <div className="form-group">
          <label className="form-label">UF</label>
          <select className="form-input" {...register("address.state")}>
            <option value="">Selecione</option>
            {UFs.map((uf) => (
              <option key={uf.value} value={uf.value}>
                {uf.label}
              </option>
            ))}
          </select>
          <span className="text-red-500 text-sm">
            {errors.address?.state?.message}
          </span>
        </div>
      </fieldset>

      <div className="flex flex-col mt-4">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" {...register("terms")} />
          <label className="form-label">Aceito os termos de uso</label>
        </div>
        <span className="text-red-500 text-sm">{errors.terms?.message}</span>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}
