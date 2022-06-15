import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Snackbar as SnackbarPaper } from 'react-native-paper';
import { theme } from '../style/global-style';

const state = makeAutoObservable({
  snackbar: {} as {
    button: string;
    message: string;
    duration: number;
  },
});

/**
 * Loader da aplicacao
 */
export const ApplicationSnackbar = observer(() => {
  console.log('a');
  return (
    <SnackbarPaper
      duration={state.snackbar.duration}
      onDismiss={() => (state.snackbar.message = '')}
      visible={!!state.snackbar.message}
      action={{
        label: state.snackbar.button,
        color: theme.colors.primary,
      }}>
      {state.snackbar.message}
    </SnackbarPaper>
  );
});

/**
 * Operacao para exibir o snackbar
 */
export const showSnackbar = (message: string, button = 'OK', duration = 5000) => {
  state.snackbar = {
    button: button,
    message: message,
    duration: duration,
  };
};
