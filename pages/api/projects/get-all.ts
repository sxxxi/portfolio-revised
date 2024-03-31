import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    fetch("http://localhost:8080/portfolio/projects").then(response => 
      response.json()
    ).then(data => {
      res.status(200).json(data)
    })
  }
}