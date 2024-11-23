import { NewPhone } from "Protocols/types";
import joi from "joi";

const newPhoneSchema = joi.object<NewPhone>({
    number: joi.string().min(11).max(11).required(),
    carrier: joi.string().required(),
    name: joi.string().required(),
    cpf: joi.string().min(11).max(11).required(),
    description: joi.string().required(),
})
export default newPhoneSchema
