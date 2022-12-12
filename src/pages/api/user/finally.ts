import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  finally : string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ finally: 'よろしくお願いいたします' })
}