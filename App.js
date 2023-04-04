import { StyleSheet, Text, View } from 'react-native';
import NivelBateria from "./src/components/NivelBateria"
import { Dimensions } from 'react-native';
import temas from "./src/themes"

export default function App() {

  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Battery Health</Text>
      <NivelBateria />
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    minWidth: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: '#F1F1F1',
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 40
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: temas.primaria,
    marginBottom: 20
  }
});
