import { Request, Response } from "express";
import { getAddress } from "@ethersproject/address";
import { getTopPairs } from "../../utils";
import { getTokenByAddress } from "../../utils";
import { return200, return500, return400 } from "../../utils/response";

interface ReturnShape {
  [tokenAddress: string]: {
    name: string;
    symbol: string;
    price: string;
    price_CRO: string;
  };
}

export async function getTokens(req: Request, res: Response): Promise<void> {
  try {
    const topPairs = await getTopPairs();

    const tokens = topPairs.reduce<ReturnShape>((accumulator, pair): ReturnShape => {
      for (const token of [pair.token0, pair.token1]) {
        const tId = getAddress(token.id);

        accumulator[tId] = {
          name: token.name,
          symbol: token.symbol,
          price: token.derivedUSD,
          price_CRO: token.derivedCRO,
        };
      }

      return accumulator;
    }, {});

    return200(res, { updated_at: new Date().getTime(), data: tokens });
  } catch (error) {
    return500(res, <Error>error);
  }
}

export async function getTokenByAddressHash(req: Request, res: Response): Promise<void> {
  if (
    !req.params.address ||
    typeof req.params.address !== "string" ||
    !req.params.address.match(/^0x[0-9a-fA-F]{40}$/)
  ) {
    return400(res, "Invalid address");
    return;
  }

  try {
    const address = getAddress(req.params.address);
    const token = await getTokenByAddress(address.toLowerCase());

    return200(res, {
      updated_at: new Date().getTime(),
      data: {
        name: token?.name,
        symbol: token?.symbol,
        price: token?.derivedUSD,
        price_CRO: token?.derivedCRO,
      },
    });
  } catch (error) {
    return500(res, <Error>error);
  }
}