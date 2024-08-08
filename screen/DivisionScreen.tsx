import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from '../theme/appThemes';



const DivisionScreen = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleDivide = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (n1 === 0 && n2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (n2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((n1 / n2).toString());
    }
  };

  return (
    <View style={styles.containerDiv}>
      <TextInput
        style={styles.inputDiv}
        placeholder="Campo número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.inputDiv}
        placeholder="Campo número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Dividir" onPress={handleDivide} />
      {result !== '' && <Text style={styles.resultDiv}>{result}</Text>}
    </View>
  );
};