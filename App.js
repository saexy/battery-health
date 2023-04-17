import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import NivelBateria from "./src/components/NivelBateria";
import Temas from "./src/components/Temas";
import Configuracoes from "./src/components/Configuracoes";
import themes from "./src/themes";

export default function App() {
  const [tema, setTema] = useState(themes.corFundo.padrao);

  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Battery Health</Text>
      <NivelBateria tema={tema} />
      <Temas onChange={setTema} />
      <Configuracoes tema={tema}></Configuracoes>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    minWidth: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "#F1F1F1",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: themes.primaria,
    marginBottom: 20,
  },
});
