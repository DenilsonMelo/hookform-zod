import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../../types/form";
import { UFs } from "../../../utils/uf";

type AddressProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function Address({ register, errors }: AddressProps) {
  return (
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
  );
}
