import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableHighlight, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home(){
    const navigation = useNavigation();
    const route = useRoute();

    const {nome} = route.params || "";

    return(
        <View style={styles.container}>
            <View styles={styles.box}>
                <Image 
            source={require('../images/ImagemHome^.jpg')} 
            style={styles.image} 
            />
            </View >
                <View style={styles.search}>
                <EvilIcons  name="search" size={30} color="black" />
                <TextInput style={styles.textSearch} placeholder = 'Pesquisar'  ></TextInput>
            </View>

            <View style={styles.boxText}>
                <Text style={styles.text} >Olá, {nome}!</Text>
            </View>

            <View style={styles.content} >
                <View style={styles.caixaNearby}>
                    <View style={styles.boxItens}>
                        <Text style={styles.textNearby}>Acampamentos próximos de você!</Text>
                        <TouchableHighlight style={styles.buttonNearby}><Text style={styles.textButton}>Localizações</Text></TouchableHighlight>
                    </View>
                <Image 
                    source={require('../images/barraca-de-acampamento-isolada-na-natureza.png')} 
                    style={styles.imageNearby} 
                />
                </View>
                <View style={styles.allItens}>
                    <Image
                        source={require('../images/Icons/1.jpg')} 
                        style={styles.itens}
                    />
                    <Image
                        source={require('../images/Icons/2.jpg')} 
                        style={styles.itens}
                    />
                    <Image
                        source={require('../images/Icons/3.jpg')} 
                        style={styles.itens}
                    />
                    <Image
                        source={require('../images/Icons/4.jpg')} 
                        style={styles.itens}
                    />
                </View>
                <View style={styles.boxNomesItens} >
                    <Text style={styles.nomesItens}> Los Angeles</Text>
                    <Text style={styles.nomesItens}>    Chicago</Text>
                    <Text style={styles.nomesItens}>   Houston</Text>
                    <Text style={styles.nomesItens}>   San Diego</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerItens}>
                        <FontAwesome name="home" size={34} color="black" />
                        <Text style={styles.nomesItem}> Home</Text>
                    </View>
                    <View style={styles.footerItens}>
                        <Fontisto name="photograph" size={34} color="black" />
                        <Text style={styles.nomesItem}> Galeria</Text>
                    </View>
                    <View style={styles.footerItens}>
                        <FontAwesome name="wechat" size={34} color="black" />
                        <Text style={styles.nomesItem}> Chat</Text>
                    </View>
                    <View style={styles.footerItens}>
                        <Fontisto name="player-settings" size={34} color="black" />
                        <Text style={styles.nomesItem}> Settings</Text>
                    </View>
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

    caixaNearby:{
        position: "relative",
        backgroundColor: "#c2f09fff",
        marginTop: 30,
        width: 350,
        height: 150,
        borderRadius: 20
    },

    textNearby:{
        width: 180,
        height: 60,
        fontWeight: "bold"
    },

    buttonNearby:{
        backgroundColor: "#366f1dff",
        width: 140,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    textButton:{
        color:"#fff"
    },

    imageNearby:{
        height: 130,
        width: "50%",
        position: "absolute",
        bottom: 10,
        right: 3,
    },
    
    image:{
        height: 350,
        width: "100%",
    },

    search:{
        display: "inline-block",
        margin: 10,
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 30,
        marginTop: -125,
        opacity: 0.8
    },

    textSearch:{
        fontSize: 20,
        marginLeft: 30,
        marginBottom: 3,
        outlineStyle: "none"
    },

    content:{
        alignItems: "center",
        marginTop: 165,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#ebfaf3ff",
        height: "80%",
        width: "100%"
    },

    boxItens:{
        width: "55%",
        height: "100%",
        padding: 20
    },

    text: {
        fontSize: 40,
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        margin: 25
    },


    boxText:{
        marginTop: -250
    },

    allItens:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: "100%",
        height: 90,
        padding: 20,
        marginTop: 20
    },

    itens:{
        height: 80,
        width: 80,
        borderRadius: 50,
    },

    boxNomesItens:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: "100%",
        height: 100,
        padding: 15
    },

    nomesItens:{
        height: 70,
        width: 90,
        fontWeight: "bold"
    },

    footer:{
        backgroundColor: "#dbdcbbff",
        height:150,
        width: "100%",
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 25

    },

    footerItens:{
        backgroundColor: "#bdbe98ff",
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 85,
        borderRadius: 15
    },

    nomesItem:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }

})