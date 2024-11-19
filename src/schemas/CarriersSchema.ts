import { Newcarrier } from "Protocols/types";
import joi from "joi";

const newCarrierSchema = joi.object<Newcarrier>({
  name: joi.string().required(),
  code: joi.number().required()
})
export default newCarrierSchema
