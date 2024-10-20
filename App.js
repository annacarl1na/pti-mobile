import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importando o contêiner de navegação
import { createStackNavigator } from '@react-navigation/stack'; // Importando o criador de navegadores em pilha
import LoginScreen from './screens/LoginScreen'; // Importando a tela de login
import RegisterScreen from './screens/RegisterScreen'; // Importando a tela de registro
import MenuScreen from './screens/MenuScreen'; // Importando a tela do menu
import ConsultationScreen from './screens/ConsultationScreen'; // Importando a tela de consulta
import CRUDScreen from './screens/CRUDScreen'; // Importando a tela de CRUD

// Criando uma instância do Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    // Contêiner de navegação para gerenciar as telas do aplicativo
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hospital Código do Bem"> {/* Nome da tela inicial */}
        
        {/* Tela de Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Tela de Registro */}
        <Stack.Screen name="Register" component={RegisterScreen} />
        
        {/* Tela do Menu Principal */}
        <Stack.Screen name="Menu" component={MenuScreen} />
        
        {/* Tela de Consulta */}
        <Stack.Screen name="Consultation" component={ConsultationScreen} />
        
        {/* Tela de CRUD para manipulação de dados de pacientes */}
        <Stack.Screen name="CRUD" component={CRUDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; // Exportando o componente App como padrão
