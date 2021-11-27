import { Response } from "express";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function return200(res: Response, body: any): Response {
  return res.status(200).json(body);
}

export function returnError(res: Response, code: number, message: string): Response {
  return res.status(code).json({
    error: {
      code,
      message,
    },
  });
}

export function return400(res: Response, message = "Bad request"): Response {
  return returnError(res, 400, message);
}

export function return500(res: Response, error: Error): Response {
  return returnError(res, 500, error.message);
}
