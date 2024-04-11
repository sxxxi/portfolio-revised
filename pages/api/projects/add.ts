import { NextApiRequest, NextApiResponse } from "next"
import { DOMAIN } from "../variables";
import { Files, Formidable } from "formidable";
import { readFileSync } from "fs";

export const config = {
  api: {
    bodyParser: false
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const formData: FormData = await new Promise((resolve, reject) => {
      /*
      ⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀
⢰⡿⠋⠙⠦⣄⡀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡋⠀⠀⢳⣄⠀
⠸⣧⠀⠀⠀⠈⣷⣤⣤⠛⠋⠛⣦⠀⠀⠀⠀⠀⠀⠀⣀⠀⢀⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣷⡄⠀⠀⠛⡆
⠀⠙⣷⠀⠀⠀⠀⠀⡇⠀⠀⣴⠛⠀⠀⠀⠀⠀⣠⣴⡿⠓⠛⠛⢿⣟⠒⢤⣄⠀⠀⠀⠀⢾⡏⠀⠈⢿⣿⠃⠀⠠⠀⢸
⠀⠀⢸⡄⠀⠀⠚⠋⠁⠀⣼⠁⠀⠀⠀⢀⡴⠛⠛⣋⣤⣄⠀⠠⠤⢤⣀⠀⠈⠳⢦⡀⠀⠈⢳⡀⠀⣾⠃⠀⣀⡀⠀⢺
⠀⠀⠀⢿⡀⠀⠀⠀⡀⠀⣿⠀⠀⠀⣴⠋⠡⠂⠉⠀⠀⠀⣀⣀⡀⠀⠉⠙⠀⠀⠈⠱⣆⠀⢸⡇⢀⠀⠀⠠⠋⠁⢀⡿
⠀⠀⠀⠈⢧⡀⠀⠀⠈⣰⠏⠀⠀⡾⠁⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠙⡆⠸⣦⡀⠀⠀⠀⢀⣠⠟⠁
⠀⠀⠀⠀⠀⠙⢦⣤⣴⠟⠀⠀⣸⠁⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⢿⡄⠈⠻⣦⣤⠾⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣾⣿⣿⣿⡿⠟⠛⠛⠿⣿⣿⣿⣿⣷⡀⠀⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡄⠀⣸⣿⣿⡿⠋⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣇⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⢻⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⠀⣴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠶⣄⡀⠀⠀⠀⠀⠀⠀⠀⣠⣴⠞⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
       */
      const form = new Formidable();

      form.parse(req, (err, fields, files: Files<string>) => {
        if (err) reject({ err })
        const formData = new FormData();

        Object.keys(fields).forEach(key => {
          // I don't know why a field is an array 
          let field = fields[key]
          if (field && field.length > 0) {
            formData.append(key, field[0])
          }
        })

        Object.keys(files).forEach(key => {
          let fileList = files[key]
          if (fileList) {
            fileList.forEach((file, index) => {
              let fileBuffer = readFileSync(file.filepath)
              let fileBlob = new File([fileBuffer], file.originalFilename? file.originalFilename : 'whatever.txt')
              formData.append(`${key}`, fileBlob)
            })
          }
        })
        resolve(formData);
      }) 
    })

    fetch(`${DOMAIN}/portfolio/projects`, {
      method: 'POST',
      headers: {
        'Authorization': req.headers["authorization"] as string,
      },
      body: formData 
    }).then(response => {
      if (response.status == 200) {
        res.status(200).json({})
      }
      res.status(response.status).json({})
    })
  }
}