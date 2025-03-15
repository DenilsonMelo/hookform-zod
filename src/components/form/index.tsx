import { useForm } from "react-hook-form";
import { FormData, FormSchema } from "../../types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import User from "./user";
import Address from "./address";

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
      <User register={register} errors={errors} />
      <Address register={register} errors={errors} />

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
