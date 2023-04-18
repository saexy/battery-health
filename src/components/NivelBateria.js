import * as Battery from "expo-battery";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import Spinner from "../../assets/spinner.gif"
import themes from "../themes";

const NivelBateria = (props) => {
  
  const [disponivel, setDisponivel] = useState(false);
  const [nivelDeBateria, setNivelDeBateria] = useState(0);
  const [carregando, setCarregando] = useState(false);

  const mostraSpinner = () => {
    return (nivelDeBateria > 20 && nivelDeBateria < 100)
  }

  const atualizarInformacoes = () => {
    //Loop infinito para atualizar as informações
    let intervalo = setInterval(async () => {
      //Atualizar estado de acordo com a disponibilidade das informações de bateria
      const disponivelInfos = await Battery.isAvailableAsync();
      setDisponivel(disponivelInfos);
      //Atualizar estado de acordo com o nível de bateria
      const nvlDeBateria = await Battery.getBatteryLevelAsync();
      setNivelDeBateria((nvlDeBateria * 100).toFixed(0));
      //Atualizar estado de acordo com o estado da bateria
      const estadoBateria = await Battery.getBatteryStateAsync();
      if (estadoBateria == Battery.BatteryState.CHARGING) {
        setCarregando(true);
      } else {
        setCarregando(false);
      }
    }, 100);
  };

  const corBateriaDegrade = () => {
    if(nivelDeBateria >= 60){
      return props.tema.primeiro;
    }
    if(nivelDeBateria >= 30){
      return props.tema.segundo;
    }
    return props.tema.terceiro;
  }

  useEffect(() => {
    atualizarInformacoes();
  }, []);

  return (
    <MotiView style={styles.nivelBateria} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'timing', duration: 500 }}>
      <Text style={styles.titulo}>Battery Health</Text>
      {disponivel && (
        <>
          <View style={styles.barraBateria}>
            <View
              id="bateria"
              style={[
                styles.quantidadeBarraBateria,
                {
                  backgroundColor: corBateriaDegrade(),
                  width: `${nivelDeBateria}%`,
                },
              ]}
            >
              {carregando && (
                <>
                  <MaterialCommunityIcons
                    name="lightning-bolt"
                    size={40}
                    color="black"
                    style={styles.icone}
                  />
                  {mostraSpinner() &&
                    <Image source={Spinner} style={styles.spinner}></Image>
                  }
                </>
              )}
            </View>
          </View>
          <View style={styles.textosBateria}>
            <Text style={styles.textoBateria}>
              Sua bateria está em {nivelDeBateria}%.
            </Text>
            {carregando && (
              <Text style={styles.textoBateria}>
                Falta {100 - nivelDeBateria}% para a carga completa.
              </Text>
            )}
          </View>
        </>
      )}
      {!disponivel && (
        <Text>As informações de bateria não estão disponíveis</Text>
      )}
    </MotiView>
  );
};

const styles = StyleSheet.create({
  nivelBateria: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  titulo: {
    color: themes.primaria,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    marginTop: -16,
  },
  barraBateria: {
    marginTop: 5,
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  icone: {
    zIndex: 100
  },
  spinner: {
    zIndex: 200,
    position: 'absolute',
    width: 75,
    height: 75
  },
  quantidadeBarraBateria: {
    height: "100%",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textosBateria: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
  textoBateria: {
    fontSize: 15,
    fontWeight: "300",
    marginTop: 5,
  },
});

export default NivelBateria;
