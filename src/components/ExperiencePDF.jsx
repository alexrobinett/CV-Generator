import React from "react"
import { createTw } from "react-pdf-tailwind"
import { Text, View,} from "@react-pdf/renderer";


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

export default function ExperiencePDF(props){
    return(
        <>
        <View style={tw("flex flex-col justify-evenly mt-4 mb-1")}>
                <View style={tw("flex flex-row content-center")}>
                    <Text style={tw("text-2xl")}>{props.experience.company} -</Text>
                    <Text style={tw("text-xl")}> {props.experience.title}</Text>
                </View>
              <Text style={tw("text-sm -mt-4 mb-2")} >{props.experience.startDate} - {props.experience.endDate}</Text>
              <Text style={tw("text-sm")}>{props.experience.summary}</Text>
        </View>
        </>
    )
}