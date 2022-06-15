import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigations } from './navigation-utils';
/**
 * Componente com as telas da navegacao do sistema
 */
export const NavigationStack = () => {
  // cria a navegacao de telas
  const Stack = createStackNavigator();
  // criStack = createStackNavigator();

  const createScreens = () => {
    return Object.keys(Navigations).map((key) => {
      const navigation = Navigations[key as keyof typeof Navigations];
      return (
        <Stack.Screen
          key={navigation.name}
          name={navigation.name}
          component={navigation.component}
          options={screenOptions}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack.Navigator>{createScreens()}</Stack.Navigator>
    </SafeAreaView>
  );
};

// opcoes do componente
const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  mode: 'modal',
};

// estilos do componente
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});
