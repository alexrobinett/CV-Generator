import { createTw } from "react-pdf-tailwind"
import { Document, Page, Text, View, Svg, Path, Font} from "@react-pdf/renderer";
import ListItem from "./skillPDF"

import ExperiencePDF from "./ExperiencePDF";
import EducationPDF from "./EducationPDF";
import SkillPDF from "./skillPDF";

const tw = createTw({
    theme: {
      fontFamily: {
        inter: ["Comic Sans"],
      },
      extend: {
        colors: {
          custom: "#bada55",
        },
      },
    },
  });



  export default function Resume(props) {

    const experienceList = props.resume.experience.map(experience =>  
        <ExperiencePDF
            key={experience.id} 
            id={experience.id}
            experience={experience}
        />)

    const educationList = props.resume.education.map(education =>  
            <EducationPDF
                key={education.id} 
                id={education.id}
                education={education}
        />)



    const skillList = props.resume.skills.map((skill => 
            <SkillPDF
    
            key={skill.id}
            id={skill.id}
            text={skill.skill}
    
        />))

    return (
        
        
    <Document>
        <Page size="A4" style={tw("flex p-12")}>
        <View style={tw("flex flex-row justify-between")}>
        <View style={tw(" w-8/12")}>
          <Text style={tw("text-5xl")}>{props.resume.yourName}</Text>
          <Text style={tw("pt-6 text-sm")}>{props.resume.bio}</Text>
        </View>
        <View>
          <View style={tw("flex flex-row items-center")}>
          <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 24 24" fill="neutral" style={tw("w-6 h-6 m-2")}>
            <Path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
            <Path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
           </Svg>
           <Text style={tw("text-sm")}>{props.resume.phoneNumber}</Text>
          </View>
          <View style={tw("flex flex-row items-center")}>
            <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 24 24" fill="neutral" style={tw("w-6 h-6 m-2")}>
             <Path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <Path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </Svg>
            <Text style={tw("text-sm")}>{props.resume.email}</Text>
          </View>
          <View style={tw("flex flex-row items-center")}>
            <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 24 24" fill="neutral" style={tw("w-6 h-6 m-2")}>
            <Path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
            </Svg>
            <Text  style={tw("text-sm")}>{props.resume.portfolio}</Text>
          </View>
          <View style={tw("flex flex-row items-center")}>
          <Svg xmlns="http://www.w3.org/2000/Svg" style={tw("w-6 h-6 m-2")} fill="neutral" viewBox="0 0 24 24"><Path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></Svg>
          <Text  style={tw("text-sm")}>{props.resume.linkedin}</Text>
          </View>
          <View style={tw("flex flex-row items-center")}>
          <Svg xmlns="http://www.w3.org/2000/Svg" style={tw("w-6 h-6 m-2")} fill="neutral" viewBox="0 0 24 24"><Path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></Svg>
          <Text  style={tw("text-sm")}>{props.resume.github}</Text>
          </View>
        </View>
      </View>
      <View style={tw("flex flex-col justify-center")}>
        <View style={tw("flex flex-row justify-start content-center border-b w-full")}>
         <Text style={tw("text-3xl -mb-6")}>Experience</Text>
        </View>
        {experienceList}
       </View>

        <View style={tw("flex flex-row items-center border-b w-full")}>
         <Text style={tw("text-3xl mt-4 -mb-6")}>Education</Text>
        </View>

        {educationList}


        <View style={tw("flex flex-row items-center border-b w-full")}>
             <Text style={tw("text-3xl mt-4 -mb-6")}>Skills</Text>
        </View>
       
        <View style={tw("flex flex-wrap mt-4 max-h-44")}>
          {skillList}
        </View>
        </Page>
    </Document>

    );
  }
