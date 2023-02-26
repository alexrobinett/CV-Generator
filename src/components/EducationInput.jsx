import React from "react"


export default function EducationInput(){
    return(
        <div className="education flex">
        <section className="mx-2 gap-4 w-7/12">
          <input type="text" placeholder="Title" className="input input-bordered w-full mb-2" />
          <input type="text" placeholder="Name of School" className="input input-bordered w-full mt-2" />
        
        </section>
        <section className="mx-2 flex flex-col items-end gap-4">
          <div className="flex items-center">
            <label className="m-1 font-bold">Start Date:</label>
            <input type="date" placeholder="Type here" className="input input-bordered w-36 max-w-xs" />
          </div>
          <div className="flex items-center">
            <label className="m-1 font-bold">End Date:</label>
            <input type="date" placeholder="Type here" className="input input-bordered w-36  max-w-xs" />
          </div>
       
        <button className="btn btn-outline btn-error w-36">Delete</button>
        </section>
    </div>
    )
}