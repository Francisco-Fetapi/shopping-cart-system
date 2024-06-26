import { Request, Response } from "express";
import { BaseError } from "./baseError";

export function handleError(error: BaseError, req: Request, res: Response) {
  console.log(error);
  return res.status(error.statusCode).send({
    message: error.message,
    statusCode: error.statusCode,
  });
}
