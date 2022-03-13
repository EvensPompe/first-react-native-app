import { View, Text, StyleSheet, TextInput } from "react-native"
import React, { useState } from "react";
const MainPhone = () => {
    const [text, setText] = useState("");
    const handleChange = (value) => {
        setText(value);
    }
    const subText = `Bienvenue sur L'application mobile ultime !
            Ceci est fait avec React Native.`;
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Salut {text || "étranger"} !</Text>
                <Text style={styles.text}>{subText}</Text>
            </View>
            <View style={styles.subContainer}>
                <TextInput style={{...styles.textInput,width:"95%"}}
                    placeholder="Quel est votre nom ?"
                    onChangeText={handleChange}
                    value={text}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 500,
    },
    subContainer: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    text: {
        color: "white",
        fontSize: 14
    },
    title: {
        color: "white",
        fontSize: 20
    },
    textInput: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'
    }
})

export default MainPhone;