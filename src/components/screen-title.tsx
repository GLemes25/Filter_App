import { observer } from 'mobx-react-lite';
import React, { Fragment, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { default as MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

// definicoes do componente
export const ScreenTitle = observer((props: ScreenTitleProps) => {
  // navegacao
  const navigation = useNavigation();
  //Titulo padrao telas
  return (
    <View style={styles.titleContainer}>
      {navigation.canGoBack() ? (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color="#FFF" size={30} />
        </TouchableOpacity>
      ) : (
        <Fragment />
      )}
      <Text style={styles.title}>{props.children}</Text>
      <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <MaterialCommunityIcons name="menu" color="#FFF" size={30} />
      </TouchableOpacity>
    </View>
  );
});

type ScreenTitleProps = {
  children: ReactNode;
};

// estilos do componente
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    textShadowColor: '#999',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  drawerButton: {
    alignItems: 'flex-end',
    width: 50,
    textShadowColor: '#999',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  backButton: {
    alignItems: 'flex-start',
    width: 50,
    textShadowColor: '#999',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
