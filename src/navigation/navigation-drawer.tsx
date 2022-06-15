import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationStack } from "./navigation-screens";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { default as MaterialIcon } from "react-native-vector-icons/MaterialIcons";
import { default as MaterialCommunityIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { observer } from "mobx-react-lite";
import { Navigations } from "./navigation-utils";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SessionStore } from "../application/session-store";
import { ScrollView } from "react-native-gesture-handler";
import { useObservableState } from "../utils/mobx";
import { Fragment } from "../components/fragment";
import { useEffect } from "react";
import { UIStore } from "../application/ui-store";

export const NavigationDrawer = observer(() => {
  // cria navegacao da gaveta
  const Drawer = createDrawerNavigator();

  // acao de logout
  const handleLogoutPress = async () => {
    // reseta os dados da base local
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          drawerStyle: { backgroundColor: "#fff" },
        }}
        drawerContent={({ navigation }) => (
          <DrawerContent
            navigation={navigation}
            handleLogoutPress={handleLogoutPress}
          />
        )}
        // sceneContainerStyle={{ backgroundColor: 'transparent' }}
      >
        <Drawer.Screen
          options={{ headerShown: false }}
          name="NavigationStack"
          component={NavigationStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
});

const DrawerContent = observer(
  ({ handleLogoutPress, navigation }: DrawerContentProps) => {
    // cria o state do componente
    const stateValues = {
      adminCollapsed: true,
      fieldCollapsed: true,
      officeCollapsed: true,
      reportCollapsed: true,
      optionsCollapsed: true,
      multipleFarms: false,
    };
    const state = useObservableState(stateValues);

    //Função para a navegação
    const herdPress = (screen: string) => {
      navigation.navigate(screen);
    };

    return (
      <View style={styles.drawerContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/Trollface.png")}
          />
          <TouchableOpacity
            style={styles.itemButton}
            onPress={() => navigation.closeDrawer()}
          >
            <MaterialIcon name="keyboard-arrow-right" color="#888" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <ScrollView
          keyboardShouldPersistTaps={"handled"}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View style={{ padding: 25 }}>
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                Seja bem vindo(a) à{" "}
                <Text style={{ fontWeight: "bold", color: "green" }}></Text>!
              </Text>
            </View>
            <View style={styles.divider} />

            {/* Opcoes */}
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => (state.optionsCollapsed = !state.optionsCollapsed)}
            >
              <MaterialIcon name="settings" color="#402457" size={25} />
              <Text style={styles.menuButtonText}>Opções</Text>
            </TouchableOpacity>
            {/* <Collapsible collapsed={state.optionsCollapsed}> */}
            <View style={styles.divider} />
            <TouchableOpacity style={styles.subMenuButton} onPress={() => {}}>
              <MaterialCommunityIcon
                name="subdirectory-arrow-right"
                color="#000"
                size={25}
              />
              <Text style={styles.subMenuButtonText}>Alterar Senha</Text>
            </TouchableOpacity>
            <Fragment visible={state.multipleFarms}>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.subMenuButton} onPress={() => {}}>
                <MaterialCommunityIcon
                  name="subdirectory-arrow-right"
                  color="#000"
                  size={25}
                />
                <Text style={styles.subMenuButtonText}>Mudar de Fazenda</Text>
              </TouchableOpacity>
            </Fragment>
            {/* </Collapsible> */}
            <View style={styles.divider} />
          </View>

          {/* logout*/}
          <View style={{ bottom: 0, marginVertical: 35, width: "100%" }}>
            <View style={styles.divider} />
            <TouchableOpacity
              style={{ ...styles.menuButton }}
              onPress={() => handleLogoutPress()}
            >
              <MaterialIcon name="logout" color="#f00" size={25} />
              <Text style={styles.menuButtonText}>Sair</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        </ScrollView>
      </View>
    );
  }
);

type DrawerContentProps = {
  handleLogoutPress: () => void;
  navigation: DrawerNavigationHelpers;
};
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
    headerShown: false!,
  },
};

// estilos do componente
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    // backgroundColor: '#F0F',
  },
  divider: {
    backgroundColor: "#999999",
    height: 1,
  },
  logo: {
    marginTop: 40,
    height: 110,
    width: "100%",
    resizeMode: "contain",
    // position: 'absolute',
  },
  logoContainer: {
    height: 170,
    width: "100%",
    backgroundColor: "#e6e8e6",
  },
  itemButton: {
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    position: "absolute",
    alignSelf: "flex-start",
    width: 50,
    // backgroundColor: '#d11',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  menuButton: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    flexDirection: "row",
    width: "100%",
  },
  menuButtonText: {
    color: "#000",
    fontWeight: "bold",
    paddingLeft: 5,
    fontSize: 15,
  },
  subMenuButton: {
    paddingHorizontal: 50,
    paddingVertical: 2,
    flexDirection: "row",
    width: "100%",
  },
  subMenuButtonText: {
    color: "#000",
    marginTop: 3,
    fontWeight: "bold",
    paddingLeft: 5,
    fontSize: 15,
  },
});
