import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import themes from "../themes";
import { MotiView } from "moti";

const Temas = (props) => {

  const mudaTema = (cor) => {
    //Pegando propriedade passada e atribuindo uma cor
    props.onChange(themes.tema[cor]);
  };

  return (
    <MotiView style={styles.conteudo} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'timing', duration: 1500 }}>
      <Text style={styles.titulo}>Temas</Text>
      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: themes.tema.verde.primeiro }]}
          onPress={() => mudaTema("verde")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: themes.tema.vermelho.primeiro }]}
          onPress={() => mudaTema("vermelho")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: themes.tema.azul.primeiro }]}
          onPress={() => mudaTema("azul")}
        ></TouchableOpacity>
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    width: "90%",
    display: "flex",
  },
  titulo: {
    color: themes.primaria,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    marginTop: -12,
  },
  botoes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 5
  },
  botao: {
    width: "30%",
    height: 80,
    borderRadius: 5,
  },
});

export default Temas;
