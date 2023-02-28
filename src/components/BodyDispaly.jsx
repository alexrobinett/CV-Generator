import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import Resume from "./Resume";


export default function BodyDisplay(props){




    return(
      <PDFViewer
      height={"100%"}
      showToolbar={true}>
      <Resume resume={props.resume}/>
    </PDFViewer>
    )
}