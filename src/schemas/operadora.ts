import { NewOperadora } from "Protocols/types";
import joi from "joi";

const operadoraSchema = joi.object<NewOperadora>({
  name: joi.string().required(),
  code: joi.number().required()
})
export default operadoraSchema