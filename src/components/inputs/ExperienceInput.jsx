import React from "react"


export default function ExperienceInput(props){
    return(
        <div className="experience  flex">
              <section className="mx-2 gap-4 w-7/12">
                <input type="text" placeholder="Title" className="input input-bordered w-full mb-2" name="title"  onChange={(event) => props.updateItem(event, props.experience.id, "experience")} value={props.experience.title}/>
                <input type="text" placeholder="Name of Company" className="input input-bordered w-full mt-2" name="company" onChange={(event) => props.updateItem(event, props.experience.id, "experience")} value={props.experience.company}/>
                <textarea className="textarea textarea-bordered w-full my-4 max-h-fit" placeholder="Small Bio or summary about yourself" name="summary" onChange={(event) => props.updateItem(event, props.experience.id, "experience")} value={props.experience.summary}></textarea>
              </section>
              <section className="mx-2 flex flex-col items-end gap-4">
                <div className="flex items-center">
                  <label className="m-1 font-bold">Start Date:</label>
                  <input type="date" placeholder="Type here" className="input input-bordered w-36 max-w-xs" name="startDate" onChange={(event) => props.updateItem(event, props.experience.id, "experience")} value={props.experience.startDate} />
                </div>
                <div className="flex items-center">
                  <label className="m-1 font-bold">End Date:</label>
                  <input type="date" placeholder="Type here" className="input input-bordered w-36  max-w-xs" name="endDate" onChange={(event) => props.updateItem(event, props.experience.id, "experience")}value={props.experience.endDate}/>
                </div>
             
              <button className="btn btn-outline btn-error w-36" onClick={(event) => props.deleteItem(event, 'experience', props.id)}>Delete</button>
              </section>
          </div>
    )
}