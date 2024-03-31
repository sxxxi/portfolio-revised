import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    fetch("http://localhost:8080/portfolio/projects", {
      method: "POST",
      body: req.body,
      headers: {
        'Content-Type': req.headers['content-type'] as string,
        'Authorization': req.headers['authorization'] as string
      }
    }).then(response => 
      response.json() 
    ).then(data => 
      res.status(200).send(data)
    )
  }
}