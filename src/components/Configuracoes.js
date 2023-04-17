import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import themes from "../themes";
import * as Battery from "expo-battery";

const Configuracoes = (props) => {
  
  const [modoBateriaBaixa, setModoBateriaBaixa] = useState(false);
  const [modoOtimizacaoBateria, setModoOtimizacaoBateria] = useState(false);

  const atualizarInformacoes = () => {
    //Loop infinito para atualizar as informações
    let intervalo = setInterval(async () => {
      //Atualizar estado de acordo com o modo de bateria baixa
      const modoBateriaBaixaInfos = await Battery.isLowPowerModeEnabledAsync();
      setModoBateriaBaixa(modoBateriaBaixaInfos);
      //Atualizar estado de acordo com o modo de otimização de bateria
      const modoOtimizacaoBateriaInfos =
        await Battery.isBatteryOptimizationEnabledAsync();
      setModoOtimizacaoBateria(modoOtimizacaoBateriaInfos);
    }, 100);
  };

  useEffect(() => {
    atualizarInformacoes();
  }, []);

  return (
    <View style={styles.config}>
      <Text style={styles.titulo}>
        Configurações
      </Text>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Text style={styles.label}>Modo Economia de Bateria</Text>
          <Switch
            trackColor={{ false: "#B6B4B4", true: "#B6B4B4" }}
            thumbColor={modoBateriaBaixa ? props.tema : "#f4f3f4"}
            value={modoBateriaBaixa}
          />
        </View>
        <View style={styles.action}>
          <Text style={styles.label}>
            Otimização de Bateria Ativo no Aplicativo
          </Text>
          <Switch
            trackColor={{ false: "#B6B4B4", true: "#B6B4B4" }}
            thumbColor={modoOtimizacaoBateria ? props.tema : "#f4f3f4"}
            value={modoOtimizacaoBateria}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  config: {
    width: "100%",
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
  actions: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  action: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "300",
  },
});

export default Configuracoes;
