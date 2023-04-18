import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import themes from "../themes";
import * as Battery from "expo-battery";
import { MotiView } from "moti";

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
    <MotiView style={styles.config} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'timing', duration: 1000 }}>
      <Text style={styles.titulo}>
        Configurações
      </Text>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Text style={styles.label}>Modo Economia de Bateria</Text>
          <AntDesign name={modoBateriaBaixa ? "checkcircle" : "closecircleo"} size={25} color={props.tema.terceiro} />
        </View>
        <View style={styles.action}>
          <Text style={styles.label}>
            Otimização de Bateria Ativo no Aplicativo
          </Text>
          <AntDesign name={modoOtimizacaoBateria ? "checkcircle" : "closecircleo"} size={25} color={props.tema.terceiro} />
        </View>
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  config: {
    width: "100%",
    display: "flex",
  },
  titulo: {
    color: themes.primaria,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    marginTop: -10,
  },
  actions: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
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
  },
});

export default Configuracoes;
