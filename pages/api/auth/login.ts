import { NextApiRequest, NextApiResponse } from "next";
import { DOMAIN } from "../variables";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    // Consume username and password, garble out the token
    const { username, password } = JSON.parse(req.body)
  
    fetch(`${DOMAIN}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then(res => 
      res.json()
    ).then(data => {
      let token = (data as { token: string }).token
      res.status(200).json({
        token: token
      })
    })  
  }
}