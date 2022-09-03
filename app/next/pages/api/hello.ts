// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const url = `https://api.notion.com/v1/databases/${process.env.DATA_ID}/query`;
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "Notion-Version": "2022-06-28"
    },
    method: 'POST'
  };

  try {
   const result = await fetch(url, options).then((res) => res.json()).then((result) => result);
    console.log(result.results[0])

  } catch (e) {
    console.error(e)
  }


  res.status(200).json({ name: 'John Doe' })
}
