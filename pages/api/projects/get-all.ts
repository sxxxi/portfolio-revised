import { NextApiRequest, NextApiResponse } from "next"
import { DOMAIN } from "../variables"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    fetch(`${DOMAIN}/portfolio/projects`).then(response => 
      response.json()
    ).then(data => {
      res.status(200).json(data)
    })
  }
}