import React from "react"


export default function EducationInput(props){
    return(
        <div className="education flex">
        <section className="mx-2 gap-4 w-7/12">
          <input type="text" placeholder="Name of School" className="input input-bordered w-full  mb-2" name="school" onChange={(event) => props.updateItem(event, props.education.id, "education")} value={props.education.school}/>
        
          <input type="text" placeholder="degree" className="input input-bordered w-full mt-2" name="degree" onChange={(event) => props.updateItem(event, props.education.id, "education")} value={props.education.degree} />
        </section>
        <section className="mx-2 flex flex-col items-end gap-4">
          <div className="flex items-center">
            <label className="m-1 font-bold">Start Date:</label>
            <input type="date" placeholder="Type here" className="input input-bordered w-36 max-w-xs" name="startDate" onChange={(event) => props.updateItem(event, props.education.id, "education")} value={props.education.startDate}/>
          </div>
          <div className="flex items-center">
            <label className="m-1 font-bold">End Date:</label>
            <input type="date" placeholder="Type here" className="input input-bordered w-36  max-w-xs" name="endDate" onChange={(event) => props.updateItem(event, props.education.id, "education")}  value={props.education.endDate}/>
          </div>
       
        <button className="btn btn-outline btn-error w-36" onClick={(event) => props.deleteItem(event, 'education', props.id)} >Delete</button>
        </section>
    </div>
    )
}