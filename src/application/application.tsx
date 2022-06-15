import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet } from "react-native";
import { Splash } from "./application-splash";
import { createObservableState } from "../utils/mobx";
import { observer } from "mobx-react-lite";
import { NavigationDrawer } from "../navigation/navigation-drawer";
import { ApplicationLoader } from "./application-loader";
import { Portal, Provider } from "react-native-paper";
import { theme } from "../style/global-style";
import { ApplicationSnackbar } from "./application-snackbar";
import { hasProperty } from "../utils/typescript";

// define o state do componente
const stateValues = {
  restoring: true,
  versionApp: "",
};
const state = createObservableState(stateValues);
// definicao do componente da aplicacao
export const Application = observer(() => {
  // operacao utilizada para iniciar a aplicacao
  const initialize = async () => {
    try {
      // sinaliza o fim do carregamento
      state.restoring = false;
    } catch (e) {
      if (hasProperty(e, "message")) {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <Provider theme={theme}>
      <Portal.Host>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Image
          style={styles.background}
          source={require("../images/background.png")}
        />
        <Screen />
        <ApplicationLoader />
        <ApplicationSnackbar />
      </Portal.Host>
    </Provider>
  );
});

// componente para definir a tela a ser exibida
const Screen = observer(() => {
  //  1.2.7

  if (state.restoring) {
    return <Splash />;
  } else {
    return <NavigationDrawer />;
  }
});

type ScreenProps = {
  versionApp: string;
};
// estilos do componente
const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
