import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [resultado, setResultado] = useState('');

  const Sumar = (valor1) => {
    if (valor1) {
      const a = valor1;
      setResultado('hola ' + a);
    } else {
      setResultado('Error!!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reto de saludo</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        onChangeText={(text1) => setText1(text1)}
        keyboardType="default"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Sumar(text1);
        }}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontSize: 24,
  },
  title: {
    padding: 15,
    fontSize: 24,
    backgroundColor: 'purple',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'yellow',
    borderRadius: 10,
    fontWeight: 'bold',
    padding: 5,
    marginTop: 10,
  },
  button: {
    height: 60,
    backgroundColor: 'blue', // Change this to the primary color of the Bruce theme
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Change this to the text color of the Bruce theme
    fontSize: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
    top: 12,
  },
  result: {
    padding: 10,
    fontSize: 32,
  },
});
