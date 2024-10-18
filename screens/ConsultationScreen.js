import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const ConsultationScreen = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // Função para carregar os pacientes salvos
  const loadPatients = async () => {
    try {
      const storedPatients = await AsyncStorage.getItem('patients');
      if (storedPatients) {
        setPatients(JSON.parse(storedPatients));
      }
    } catch (error) {
      console.error('Error loading patients', error);
    }
  };

  // Função para adicionar um paciente
  const addPatient = async () => {
    if (!name || !age) {
      Alert.alert('Por favor, preencha todos os campos!');
      return;
    }

    const newPatient = { id: (patients.length + 1).toString(), name, age: parseInt(age) };
    const updatedPatients = [...patients, newPatient];
    setPatients(updatedPatients);
    setName('');
    setAge('');
    Alert.alert('Paciente adicionado com sucesso!');

    // Salvar pacientes no AsyncStorage
    try {
      await AsyncStorage.setItem('patients', JSON.stringify(updatedPatients));
    } catch (error) {
      console.error('Error saving patient', error);
    }
  };

  useEffect(() => {
    loadPatients(); // Carrega os pacientes ao iniciar o componente
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Pacientes</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Paciente"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade do Paciente"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity style={styles.button} onPress={addPatient}>
        <Text style={styles.buttonText}>Adicionar Paciente</Text>
      </TouchableOpacity>
      <FlatList
        data={patients}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.patientItem}>
            <Text>{`${item.name} (${item.age} anos)`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ConsultationScreen;
