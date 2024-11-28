import { Router } from "express";
import { getSumaryByNumber } from "../controllers/sumaryControllers";

const sumaryRouter = Router()

sumaryRouter.get("/sumary/:document", getSumaryByNumber)

export default sumaryRouter