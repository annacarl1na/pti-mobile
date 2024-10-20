import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; // Importando os componentes necessários do React Native
import styles from '../styles/styles'; // Importando o arquivo de estilos

// Componente funcional para exibir informações de um paciente
const PatientItem = ({ patient, onSelect }) => {
  return (
    // Botão que, ao ser pressionado, executa a função 'onSelect' passando o paciente como argumento
    <TouchableOpacity 
      style={styles.patientItem} 
      onPress={() => onSelect(patient)}
    >
      {/* Exibindo o nome e a idade do paciente */}
      <Text>{`${patient.name} (${patient.age} anos)`}</Text>
    </TouchableOpacity>
  );
};

export default PatientItem; // Exportando o componente PatientItem como padrão
