import React from "react"


export default function ExperienceInput(props){
    return(
        <div className="experience  flex">
              <section className="mx-2 gap-4 w-7/12">
                <input type="text" placeholder="Title" className="input input-bordered w-full mb-2" name="experience" onChange={props.handleInput} value={props.title}/>
                <input type="text" placeholder="Name of Company" className="input input-bordered w-full mt-2" />
                <textarea className="textarea textarea-bordered w-full my-4 max-h-fit" placeholder="Small Bio or summary about yourself"></textarea>
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