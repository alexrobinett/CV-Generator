import React from "react"
import BodyDisplay from "./BodyDispaly";
import BodyInput from "./BodyInput";
import uuid from 'react-uuid';

export default function Body(){
  
  const [resume, setResume] = React.useState({
    yourName: "",
    bio: "",
    phoneNumber: "",
    email: "",
    portfolio: "",
    linkedin: "",
    github: "",
    experience: [],
    education: [],
    skills: [],
    isPreview: false
  })

  function updateResume(event){
    const { name, value } = event.target;
    setResume(prevValue =>({
      ...prevValue,
      [name]: value
    }))
    console.log(resume)
  }


  function createExperience(event){
    const newExperience = {
      id: uuid(),
      title: "",
      company: "",
      summary: "",
      startDate: "",
      endDate: "",
    }
    const {name, type} = event.target;
    setResume(prevValue => ({
      ...prevValue,
      [name]: [...prevValue.experience, newExperience]
    }))
    console.log(resume.experience)
  }

  function createEducation(event){
    const newEducation = {
      id: uuid(),
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
    }
    const {name, type} = event.target;
    setResume(prevValue => ({
      ...prevValue,
      [name]: [...prevValue.education, newEducation]
    }))
    console.log(resume.education)
  }


  function createSkill(event){
    const newSkill = {
      id: uuid(),
      skill: ""
    }
    const {name, value} = event.target;
    setResume(prevValue => ({
      ...prevValue,
      [name]: [...prevValue.skills, newSkill]
    }))
    console.log(resume.skills)
  }

  

  return(
    <section className="flex-grow p-6 flex flex-col">
      <BodyInput
        resumeInfo={resume}
        handleInput={updateResume}
        createExperience={createExperience}
        createEducation={createEducation}
        createSkill={createSkill}
      />
    </section>
  )
}
