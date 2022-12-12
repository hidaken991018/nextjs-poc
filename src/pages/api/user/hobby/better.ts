import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  better: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ better: "fashion" })
}