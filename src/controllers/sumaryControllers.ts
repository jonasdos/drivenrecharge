import { Request, Response } from "express";
import { sumaryService } from "../services/sumaryService";


export async function getSumaryByNumber (req: Request <{document: string}>, res: Response) {
  
  const resultado = await sumaryService(req.params.document)

  res.status(200).send(resultado)

}