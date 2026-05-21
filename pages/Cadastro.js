import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Cadastro(){
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    const btn = () => {
    if(!email || !senha || !nome){
        alert("É necessário todos os dados!")
    }else{
        return navigation.navigate("Home", {nome: nome})
    }
}

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Image 
                source={require('../images/304875-P7ZOXP-206.jpg')} 
                style={styles.image} 
                />
                <View style={styles.redonda}></View>
            </View>

            <View style={styles.login}>
                <View style={styles.boxLogin}>
                <Text style={styles.textCadastro}>C A D A S T R O</Text>
                </View>
                
                <View style={styles.input}>
                <TextInput style={styles.textInput} placeholder = 'Nome'  value = {nome} onChangeText={(value) => setNome(value)} />
                <TextInput style={styles.textInput} placeholder = 'Email' value = {email} onChangeText={(value) => setEmail(value)}/>
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder = 'Senha' value = {senha} onChangeText={(value) => setSenha(value)} />
                </View>
                
                <Pressable style={ styles.sucess}
                    onPress={() => alert("Você esqueceu a senha")} //quando toca o botao
                >
                <Text style={styles.esquecerSenha}>Esqueceu Senha?</Text>
                </Pressable>

                <View style={styles.buttonDiv}> 
                <TouchableHighlight style={styles.button} onPress={btn}>
                <Text style={styles.buttonText}>Cadastro</Text>
                </TouchableHighlight>
                </View>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#879701"
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
        marginTop: -95,
        borderTopLeftRadius:200,
        backgroundColor: "#cbe8e4",
        height: "100%",
    },

    redonda:{
        height: 190,
        width: 195,
        display: "flex",
        position: "absolute",
        backgroundColor: "#cbe8e4",
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 200,
        opacity: 0.9
    },

    textCadastro:{
        transform: [{ rotate: '90deg' }], // Pode usar '90deg' ou '-90deg'
        fontSize: 55,
        marginRight: -160,
        marginTop: 120,
        color: "#5c370fff"
    },

    boxLogin:{
        alignItems: "flex-end",
        height: 100,
    },

    input:{
        alignItems: "center",
        justifyContent: "center",
        height: 220,
        width: "90%",
        gap: 20,
        marginTop: -30,
        marginLeft: 20
    },

    textInput:{
        backgroundColor: "rgba(175, 209, 119, 1)",
        padding: 13,
        borderRadius: 19,
        border: "2px solid #879701",
        fontSize: 20,
    },

    sucess:{
        width: 350,
        alignItems: "flex-end",
        padding: 25,
        height: 100,
    },

    esquecerSenha:{
        fontSize: 15,
    },

    button:{
        backgroundColor: "#487738ff",
        height: 70,
        width:280,
        alignItems: "center",
        borderRadius: 60,
        border: "2px solid green",
        
    },

    buttonText:{
        fontSize: 32,
        margin: 10,
        color: "#fff"
    },

    buttonDiv:{
        alignItems: "center"
    }

})