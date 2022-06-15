import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyleProps, globalStyle } from "../style/global-style";
import { observer } from "mobx-react-lite";
import { ScreenTitle } from "../components/screen-title";
import { useObservableState } from "../utils/mobx";

/**
 * Tela Inicial
 */
export const HandlingList = observer(() => {
  // state da tela
  const stateValues = {
    status: "",
    filter: "",
    syncSuccess: false,
  };
  const state = useObservableState(stateValues);

  // state do modal para selecao de manejo
  const modalStateValues = {
    visible: false,
  };
  const modalState = useObservableState(modalStateValues);

  return (
    <View style={globalStyle.screenContainer}>
      <ScreenTitle>Aplicação de Filtro</ScreenTitle>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={state.filter}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#aaa"
          placeholder="Pesquisar manejos..."
          onChangeText={(text) => {
            state.filter = text;
          }}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            {
            }
          }}
        >
          <Icon name="cached" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {!!state.status && !state.syncSuccess && (
        <Text style={styles.status}>{state.status}</Text>
      )}
      {!!state.status && state.syncSuccess && (
        <Text style={{ ...styles.status, color: "#60ad5e" }}>
          {state.status}
        </Text>
      )}
    </View>
  );
});

// estilos dos componentes
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  searchInput: {
    ...globalStyle.textInput,
    flex: 1,
  },
  searchButton: {
    ...globalStyle.button,
    width: 50,
    marginLeft: 10,
  },
  listContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: globalStyleProps.radius,
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  itemDescription: {
    color: "#666666",
    marginTop: 10,
  },
  itemDetailContainer: {
    flexDirection: "row",
    marginTop: 10,
    flex: 1,
    flexWrap: "wrap",
  },
  itemDetailName: {
    fontWeight: "bold",
  },
  itemDetailValue: {
    marginLeft: 5,
    marginRight: 15,
  },
  itemButtonContainer: {
    flexDirection: "row",
    marginTop: 15,
    flex: 1,
  },
  itemButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemButtonText: {
    marginRight: 30,
    fontSize: 14,
    fontWeight: "bold",
    color: globalStyleProps.secondaryColor,
    marginHorizontal: 5,
  },
  status: {
    color: "#FF1111",
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: 12,
    width: "100%",
    textShadowColor: "#888",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});
