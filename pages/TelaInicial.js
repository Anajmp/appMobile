import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View styles={styles.box}>
                <Image 
            source={require('../images/ImagemInicial.jpg')} 
            style={styles.image} 
            />
            </View >

            <View style={styles.content} >
                <Text style={styles.text} >Bem-Vindo!</Text>
            
                <View style={styles.boxButtons}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subtext}> Login</Text>
                </TouchableHighlight>
                    
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.subtext}> Cadastro</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.boxImageBack}>
                    <Image
                source={require('../images/ImagemHome.jpg')} 
                style={styles.imageBack} 
            />
                
            </View>

            </View>

        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    
    box:{
        width: "100%",
        height: "50%",
    },

    image:{
        height: 350,
        width: "100%"
    },

    content:{
        alignItems: "center",
        marginTop: -25,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        backgroundColor: "#ebfaf3ff",
        height: "80%",
        width: "100%"
    },

    text: {
        fontSize: 40,
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        margin: 25
    },

    subtext: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    boxButtons:{
        width: "70%",
        margin: 20,
        padding: 5,
        gap: 25,
        marginBottom: 40
    },

    button:{
        width: "100%",
        padding: 30,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 70,
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid green"
    },

    boxImageBack:{
        width: "100%",
    },

    imageBack:{
        width: "100%",
        height: 190,
        borderTopLeftRadius: 250,
        borderTopRightRadius: 250,
        opacity: 0.5,
        border: "2px solid green"
    }
})