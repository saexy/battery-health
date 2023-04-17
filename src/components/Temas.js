import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import themes from "../themes";

const Cores = {
  verde: themes.corFundo.padrao,
  vermelho: themes.corFundo.cor2,
  azul: themes.corFundo.cor3,
};

const Temas = (props) => {

  const mudaTema = (cor) => {
    props.onChange(Cores[cor]);
  };

  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Temas</Text>
      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: themes.corFundo.padrao }]}
          onPress={() => mudaTema("verde")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: themes.corFundo.cor2 }]}
          onPress={() => mudaTema("vermelho")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: themes.corFundo.cor3 }]}
          onPress={() => mudaTema("azul")}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    width: "90%",
    display: "flex",
    marginTop: "30%",
  },
  titulo: {
    color: themes.primaria,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  botoes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  botao: {
    width: "30%",
    height: 80,
    borderRadius: 5,
  },
});

export default Temas;
