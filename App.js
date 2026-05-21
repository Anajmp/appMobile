import { NavigationContainer } from "@react-navigation/native"; //componente que vai envolvera navegação de aplicativo
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // importação da função para criar um navegador de pilha

import Home from "./pages/Home.js"
import Login from "./pages/Login.js"
import Cadastro from "./pages/Cadastro.js"
import TelaInicial from "./pages/TelaInicial.js"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="TelaInicial" component={TelaInicial}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
