import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaginaDivision } from './division/PaginaDivision';
import { PaginaBienvenidos } from './screen/PaginaBienvenidos';


type RootStackParamList = {
  Bienvenidos: undefined;
  Division: { num1: number; num2: number }; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenidos" component={PaginaBienvenidos} />
        <Stack.Screen name="Division" component={PaginaDivision} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

