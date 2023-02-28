import React from "react"


export default function Sidebar(props){

    

    return(
      <section className="bg-base-200 flex-shrink-0 overflow-y-hidden min-h-full w-64 flex flex-col items-center drop-shadow-2xl">

        <div className="px-6 pt-4 pb-2 border-b">
            <h4 className="pt-0 text-3xl">Instructions</h4>
        </div>
        <div className=" bg-base-300 p-4 m-4 rounded">
        <p className="text-xs text-left">Fields below require specific formats</p>
        <ul className="text-xs mt-2 list-none list-inside">
            <li className="my-1">- Phone requires a number format</li>
            <li className="my-1">- Email requires a valid email format</li>
            <li className="my-1">- Github and Linkedin require a valid URL format</li>
        </ul>
        </div>
     
        <div className=" px-12 pt-4 pb-2 border-b">
            <h3 className="pt-0 text-3xl font-bold">Settings</h3>
        </div>
        <div className="form-control m-2 flex flex-col items-center">
            <label className="label cursor-pointer">
            <span className="label-text p-2">Resume Preview</span> 
            <input type="checkbox" className="toggle" checked={props.isPreview} onChange={props.togglePreview}/>
            </label>
            <button className="btn btn-primary w-44 m-4" onClick={props.toggleTemplate}>CV Template</button>
            <button className="btn btn-primary w-44">Download PDF</button>
        </div>
       
      </section>
    )
}