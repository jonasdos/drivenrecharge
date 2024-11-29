import { NewCarrier } from "Protocols/types";
import joi from "joi";

const newCarrierSchema = joi.object<NewCarrier>({
  name: joi.string().required(),
  code: joi.number().required()
})
export default newCarrierSchema
