import { Request, Response, NextFunction } from "express";
import { MessageError } from "../model/MessageError";

export function Auth(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers["x-service-token"];
    console.log(`Headers: ${token}`);

    if (token === undefined || token.length === 0) {
        res.status(401).json(new MessageError(401, "Unauthorized, token is mandatory"));
        return;
    }

    return originalMethod.apply(this, [req, res, next]);
  };

  return descriptor;
}
