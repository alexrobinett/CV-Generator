import React, { useState } from "react"
import BodyDisplay from "./BodyDispaly";
import BodyInput from "../inputs/BodyInput";
import uuid from 'react-uuid';

export default function Body(props){
  
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
  })

  const [skillVal, setSkillVal] = React.useState("")


  React.useEffect(() => {
    if(props.useTemplate === true){
      setResume({
        yourName: "Bob Coder",
        bio: "Bob Coder - because who needs a life when you have code? Experienced programmer with a love for all things tech, especially if they involve coffee and donuts. Specializing in turning incomprehensible jargon into plain English (or at least trying to). Will work for pizza, preferably with extra cheese and a side of debugging",
        phoneNumber: "555-123-4567",
        email: "bob.coder9876@gmail.com",
        portfolio: "bobcoder.com",
        linkedin: "www.linkedin.com/in/bobcoder/",
        github: "www.github.com/bobcoder42/",
        experience: [{
          id: uuid(),
          title: "Senior Software Engineer",
          company: "Twitter",
          summary: "Bob Coder, the Senior Software Engineer at Twitter, has spent countless hours perfecting the art of 280 character rants, and occasionally writes code in his spare time. He has led many successful projects, including implementing a spell-checker for angry tweets and creating a fail whale costume for the company Halloween party.",
          startDate: "2016-02-02",
          endDate: "2019-04-20",
        }, {
          id: uuid(),
          title: "Software Engineer",
          company: "Google",
          summary: "Bob Coder, the Senior Software Engineer at Google, has spent years building the world's most advanced search engine while simultaneously perfecting his own Google search skills. He's also known for his ability to make obscure programming jokes and has won several awards for his impeccable office chair racing skills.",
          startDate: "2019-02-02",
          endDate: "2022-02-20",
        }],
        education: [{
          id: uuid(),
          degree: "bachelors Computer Science",
          school: "Harvard",
          startDate: "2010-08-20",
          endDate: "2014-05-20",
        }],
       skills: [{
        id: uuid(),
        skill: "JavaScript"
      },
      {
        id: uuid(),
        skill: "Python"
      },
      {
        id: uuid(),
        skill: "React"
      },
      {
        id: uuid(),
        skill: "Node.js"
      },
      {
        id: uuid(),
        skill: "HTML"
      },
      {
        id: uuid(),
        skill: "CSS"
      },
      {
        id: uuid(),
        skill: "Java"
      },
      {
        id: uuid(),
        skill: "Swift"
      },
      {
        id: uuid(),
        skill: "PHP"
      },
      {
        id: uuid(),
        skill: "SQL"
      },
      {
        id: uuid(),
        skill: "Ruby"
      },
      {
        id: uuid(),
        skill: "C++"
      }], 
      });
    }
  }, [props.useTemplate]);



 

  function updateResume(event){
    const { name, value } = event.target;
    setResume(prevValue =>({
      ...prevValue,
      [name]: value
    }))
    console.log(resume)
  }

  function deleteItem(event, arrayName, id) {
    event.stopPropagation();
    setResume(prevResume => {
      return {
        ...prevResume,
        [arrayName]: prevResume[arrayName].filter(item => item.id !== id),
      };
    });
    console.log(resume[arrayName]);
  }


  function updateItem(event, id, itemType) {
    const { name, value } = event.target;
    setResume((prevData) => {
      const updatedItems = prevData[itemType].map((item) => {
        return item.id === id ? { ...item, [name]: value } : item;
      });
      return { ...prevData, [itemType]: updatedItems };
    });
  }
  



// Experience control 

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



  // Education control

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
  




  // Skills Control

  function createSkill(event){

    const newSkill = {
      id: uuid(),
      skill: skillVal
    }
    const {name, value} = event.target;
    setResume(prevValue => ({
      ...prevValue,
      [name]: [...prevValue.skills, newSkill]
    }))
    setSkillVal("")
  }

  function updateSkill(event){
    const {value, name} = event.target
    setSkillVal(value)
  }




  return(
    <section className="flex-grow p-6 flex flex-col">
      
      {props.isPreview ? <BodyDisplay resume={resume}/> : <BodyInput
        resumeInfo={resume}
        handleInput={updateResume}
        createExperience={createExperience}
        createEducation={createEducation}
        updateSkill={updateSkill}
        createSkill={createSkill}
        deleteItem={deleteItem}
        updateItem={updateItem}
        skillValue = {skillVal}
      />}
      
    </section>
  )
}
