import { Request, Response } from "express";
import { return200, return500 } from "../utils/response";

export default async function (req: Request, res: Response): Promise<void> {
  try {
    const result = {
      version: process.env.npm_package_version,
      upTime: process.uptime()
    };

    return200(res, result);
  } catch (error) {
    return500(res, <Error>error);
  }
}
