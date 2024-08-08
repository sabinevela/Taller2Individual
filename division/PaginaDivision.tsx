import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { styles } from '../theme/appThemes';


type Parametros = {
  Bienvenidos: undefined;
  Division: { num1: number; num2: number };
};

type BienvenidosProp = NativeStackNavigationProp<Parametros, 'Bienvenidos'>;
type BienvenidosRutaProp = RouteProp<Parametros, 'Bienvenidos'>;

interface Props {
  navigation: BienvenidosProp;
  route: BienvenidosRutaProp;
}

export const PaginaDivision = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleBienvenidos}>Bienvenido</Text>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.imageBienvenidos} />
      <Button title="Acceder" onPress={() => navigation.navigate('Division', { num1: 4, num2: 2 })} />
    </View>
  );
};

