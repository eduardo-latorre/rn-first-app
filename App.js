//useState permite trabajar con diferentes estados al presionar botones
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  //outputText: es la variable que contiene el String
  //setOutputText: es la función que cambia el estado
  const [outputText, setOutputText] = useState('Mi amor, presiona el botón...');
  return (
    //El método onPress del componente Button es el evento que se activa
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Aqui" onPress={() => setOutputText('Te amo infinito!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
