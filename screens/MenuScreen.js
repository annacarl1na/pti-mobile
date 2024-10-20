import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'; // Importando o arquivo de estilos

// Componente funcional para a tela do menu principal
const MenuScreen = ({ navigation }) => {
  return (
    // Container principal com o estilo 'container'
    <View style={styles.container}>
      
      {/* Texto do título do menu */}
      <Text style={styles.title}> Menu Principal </Text>

      {/* Botão para registrar pacientes, que navega para a tela 'Consultation' quando pressionado */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Consultation')}
      >
        <Text style={styles.buttonText}>Registrar Pacientes</Text>
      </TouchableOpacity>

      {/* Botão para atualizar ou deletar pacientes, que navega para a tela 'CRUD' quando pressionado */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('CRUD')}
      >
        <Text style={styles.buttonText}>Atualizar ou Deletar Paciente</Text>
      </TouchableOpacity>

    </View>
  );
};

export default MenuScreen;
