import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { globalStyleProps } from '../style/global-style';

const state = makeAutoObservable({
  count: 0,
  time: new Date(),
});

/**
 * Loader da aplicacao
 */
export const ApplicationLoader = observer(() => {
  return (
    <Modal statusBarTranslucent={true} animationType="none" transparent={true} visible={state.count > 0}>
      <View style={styles.background} />
      <View style={styles.container}>
        <ActivityIndicator animating={true} color="#FFF" size="large" />
      </View>
    </Modal>
  );
});

/**
 * Operacao para exibir o loader
 */
export const showLoader = () => {
  state.count++;
  state.time = new Date();
};

/**
 * Operacao para esconder o loader
 */
export const hideLoader = () => {
  // calcula a diference entre as datas
  const diff = +new Date() - +state.time;

  // exibe o loader por no minimo 300 milisegundos
  if (state.count === 1 && diff < 500) {
    setTimeout(() => {
      state.count--;
    }, 500 - diff);
  } else {
    state.count--;
  }
};

/**
 * Estilos do componente
 */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.3,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    marginHorizontal: '20%',
    marginVertical: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyleProps.radius,
  },
});
