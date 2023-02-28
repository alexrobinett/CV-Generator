import React from "react"
import { Text, View, StyleSheet } from "@react-pdf/renderer"


const styles = StyleSheet.create({
    row:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        margin: '0px 10px 0px 0px'
    },
    bullet:{
        height: '100%',
    },
    text:{
        fontSize: '12px'
    }
})


  const SkillPDF = (props) => {
    return (
        <View style={styles.row}>
            <View style={styles.bullet}>
                <Text>{'\u2022' + " "}</Text>
            </View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

export default SkillPDF