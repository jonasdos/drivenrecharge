import Joi from "joi"
import { NewRecharge } from "../Protocols/types"

const newRechargerSchema = Joi.object<NewRecharge>({
    phoneNumber: Joi.string().min(11).max(11).required(),
    rechargeValue: Joi.number().min(1000).max(100000)
})

export default newRechargerSchema