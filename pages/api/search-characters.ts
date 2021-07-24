// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../apollo-client";
import { getAllCharactersByName } from "../../queries/query";

type Data = {
  data: {} | null;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const characterName = req.body;

  try {
    const { data } = await client.query({
      query: getAllCharactersByName,
      variables: {
        filter: {
          name: characterName,
        },
      },
    });
    
    res.status(200).json(data.characters);
  } catch {
    res.status(404).json({
      message: "Error! Please input different name!",
      data: null,
    });
  }

}
