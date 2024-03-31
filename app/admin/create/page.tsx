"use client"
import JwtService from "@/app/service/jwt.service";
import { useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import ProjectPack from "@/pages/api/projects/project-pack.model";


export default function ProjectCreatePage() {
  const {push} = useRouter()
  const [formData, setFormData] = useState(new FormData())
  const [image, setImage] = useState<File>()
  const [project, setProject] = useState<ProjectPack>(
    {
      title: "",
      description: "",
      images: []
    }
  )

  useEffect(() => {
    JwtService.getToken(() => {push('/auth/login')})
  }, [])


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
      formData.append('images', image)
    }
    console.log('appended image', formData.get('images'))

    fetch("/api/projects/add", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('sxxxi-token')}`  
      },
      body: formData,
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
    formData.set(event.currentTarget.name, event.currentTarget.value)
    console.log(formData)
  }

  return <>
    <input type="text" name="title" value={project.title} onChange={updateProject} />
    <input type="text" name="description" value={project.description} onChange={updateProject} />
    <input type="file" name="image" onChange={onImageSelect} />
    <input type="submit" title="Submit" onClick={uploadImage}/>
  </>
}