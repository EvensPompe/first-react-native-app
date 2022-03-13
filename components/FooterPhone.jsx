import { View,Text, StyleSheet } from "react-native";
import React from "react";
const FooterPhone = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:45,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:30
    }
})
export default FooterPhone;