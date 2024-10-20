import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'; // Importando os componentes necessários do React Native
import styles from '../styles/styles'; // Importando o arquivo de estilos

// Componente funcional para a tela de login
const LoginScreen = ({ navigation }) => {
  
  // Função para lidar com o evento de login
  const handleLogin = () => {
    // Exibe um alerta informando que o login foi realizado com sucesso
    Alert.alert('Login realizado com sucesso!');
    // Navega para a tela "Menu" após o login
    navigation.navigate('Menu');
  };

  return (
    // Container principal com o estilo 'container'
    <View style={styles.container}>
      
      {/* Texto do nome do hospital */}
      <Text style={styles.nome}>Hospital Código do Bem</Text>
      
      {/* Texto do título para instruir o usuário */}
      <Text style={styles.title}>Digite seus dados</Text>
      
      {/* Campo de entrada para o e-mail, com o teclado ajustado para endereços de e-mail */}
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      
      {/* Campo de entrada para a senha, com a opção de esconder o texto (senha) */}
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      
      {/* Botão de login que, ao ser pressionado, executa a função 'handleLogin' */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      {/* Botão que, ao ser pressionado, navega para a tela de registro */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen; // Exportando o componente LoginScreen como padrão
