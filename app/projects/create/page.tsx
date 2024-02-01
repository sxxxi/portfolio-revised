"use client"
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

interface ProjectPack {
  title: string,
  description: string
}

const initial: ProjectPack = {
  title: "",
  description: ""
}

export default function ProjectCreatePage() {
  const [formData, setFormData] = useState(new FormData());
  const [image, setImage] = useState<File>()
  const [project, setProject] = useState<ProjectPack>(
    {
      title: "",
      description: ""
    }
  )
  const onImageSelect = (event: FormEvent<HTMLInputElement>) => {
    const newImage = event.currentTarget.files?.[0]
    if (newImage != null) {
      setImage(newImage)
    }
    console.log("Uploaded: ", newImage)
  }

  const uploadImage = () => { 
    formData.append('project', JSON.stringify(project))
    if (image) {
      formData.append('image', image)
    }

    fetch("http://localhost:8080/proto/media", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: formData
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => {setFormData(new FormData())})
  }

  const updateProject = (event: FormEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return <>
    <input type="text" name="title" value={project.title} onChange={updateProject} />
    <input type="text" name="description" value={project.description} onChange={updateProject} />
    <input type="file" name="image" onChange={onImageSelect} />
    <input type="submit" title="Submit" onClick={uploadImage}/>
  </>
}