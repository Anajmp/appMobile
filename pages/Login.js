import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function Login(){
    const navigation = useNavigation();
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");

    const btn = () => {
    if(!email || !senha){
        alert("É necessário todos os dados!")
    }else{
    if(email !== "anajmp11@gmail.com" || senha !== "Teste@123"){
        alert("Email ou senha inválidos")
    }else{
        navigation.navigate("Home", {nome: nome})
    }
    }
}
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Image 
                source={require('../images/ImagemLogin1.png')} 
                style={styles.image} 
                />
                <View style={styles.redonda}></View>
            </View>

            <View style={styles.login}>
                <View style={styles.boxLogin}>
                <Text style={styles.textLogin}>L O G I N</Text>
                </View>
                
                <View style={styles.input}>
                <TextInput style={styles.textInput} placeholder = 'Nome'  value = {nome} onChangeText={(value) => setNome(value)} />
                <TextInput style={styles.textInput} placeholder = 'Email' value = {email} onChangeText={(value) => setEmail(value)}/>
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder = 'Senha' value = {senha} onChangeText={(value) => setSenha(value)} />
                </View>
                
                <Pressable style={ styles.sucess}
                    onPress={() => navigation.navigate("Cadastro")} 
                >
                <Text style={styles.esquecerSenha}>Não possui cadastro?</Text>
                </Pressable>

                <View style={styles.buttonDiv}> 
                <TouchableHighlight style={styles.button} onPress={btn}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#99c282ff"
    },
    box:{
        width: "100%",
        height: "50%",
        position: "relative"
    },

    image:{
        height: 325,
        width: 420,
    },

    login:{
        marginTop: -90,
        borderTopLeftRadius:230,
        backgroundColor: "#b7d7f5ff",
        height: "100%",
    },

    redonda:{
        height: 180,
        width: 155,
        display: "flex",
        position: "absolute",
        backgroundColor: "#b7d7f5ff",
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 200,
        opacity: 0.9
    },

    textLogin:{
        transform: [{ rotate: '90deg' }], // Pode usar '90deg' ou '-90deg'
        fontSize: 70,
        marginRight: -100,
        marginTop: 70,
        color: "#5c370fff"
    },

    boxLogin:{
        alignItems: "flex-end",
        height: 100,
    },

    input:{
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        width: "80%",
        gap: 20,
        marginTop: -29,
        marginLeft: 34
    },

    textInput:{
        backgroundColor: "#a8d2ffff",
        padding: 13,
        borderRadius: 19,
        border: "1px solid #538fffff",
        fontSize: 20,
    },

    sucess:{
        width: 320,
        alignItems: "flex-end",
        height: 90,
    },

    esquecerSenha:{
        fontSize: 15,
        marginTop: 20
    },

    button:{
        backgroundColor: "#9dd6a8ff",
        height: 70,
        width:280,
        alignItems: "center",
        borderRadius: 60,
        border: "2px solid green"
    },

    buttonText:{
        fontSize: 35,
        margin: 10
    },

    buttonDiv:{
        alignItems: "center"
    }

})