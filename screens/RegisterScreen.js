import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from '../styles/styles'; // Importando o arquivo de estilos

// Componente funcional para a tela de cadastro
const RegisterScreen = ({ navigation }) => {

  // Função para lidar com o evento de cadastro
  const handleRegister = () => {
    // Exibe um alerta informando que o cadastro foi realizado com sucesso
    Alert.alert('Cadastro realizado com sucesso!');
    // Navega para a tela "Menu" após o cadastro
    navigation.navigate('Menu');
  };

  return (
    // Container principal com o estilo 'container'
    <View style={styles.container}>
      
      {/* Texto do título da tela */}
      <Text style={styles.title}>Tela de Cadastro</Text>

      {/* Campo de entrada para o nome */}
      <TextInput style={styles.input} placeholder="Nome" />

      {/* Campo de entrada para o e-mail, com o teclado ajustado para endereços de e-mail */}
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />

      {/* Campo de entrada para a senha, com a opção de esconder o texto (senha) */}
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      {/* Botão de cadastro que, ao ser pressionado, executa a função 'handleRegister' */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default RegisterScreen;
