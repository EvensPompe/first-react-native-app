import { View, Text, StyleSheet } from "react-native";
import React from "react";
const HeaderPhone = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>First React Native Application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:70,
        display:'flex',
        justifyContent:"flex-end",
        alignItems:'center',
        backgroundColor:"white"
    },
    text:{
        fontSize:26,
        fontWeight:"bold",
        color:"black"
    }
})
export default HeaderPhone;