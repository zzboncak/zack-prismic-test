import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export type Handler = (req: NextApiRequest, res: NextApiResponse<Data>) => void;
