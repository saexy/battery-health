import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NivelBateria from "./src/components/NivelBateria"
import Temas from "./src/components/Temas"
import { Dimensions } from 'react-native';
import themes from './src/themes';
import Configuracoes from './src/components/Configuracoes';

export default function App(props) {

  const [corFundo, setCorFundo] = useState(themes.corFundo.padrao); // cor inicial

  const handleMudaCorFundo = (color) => {
    setCorFundo(color);
  }

  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Battery Health</Text>
      <NivelBateria corFundo={corFundo} />
      <Temas onChange={handleMudaCorFundo}/>
      <Configuracoes corFundo={corFundo}></Configuracoes>
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
    padding: 40
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: themes.primaria,
    marginBottom: 20
  }
});
