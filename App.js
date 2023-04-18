import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import NivelBateria from "./src/components/NivelBateria";
import Temas from "./src/components/Temas";
import Configuracoes from "./src/components/Configuracoes";
import themes from "./src/themes";

export default function App() {
  
  //Estado do tema dos componentes do aplicativo
  const [tema, setTema] = useState(themes.tema.verde);

  return (
    <View style={styles.conteudo}>
      <NivelBateria tema={tema} />
      <Configuracoes tema={tema}></Configuracoes>
      <Temas onChange={setTema} />
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
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 40,
  },
});
