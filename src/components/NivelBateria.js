import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const NivelBateria = (props) => {
  
  const [disponivel,setDisponivel] = useState(false)
  const [nivelDeBateria,setNivelDeBateria] = useState(0)
  const [carregando,setCarregando] = useState(false)

  const atualizarInformacoes = () => {
    let intervalo = setInterval(async () => {
      const disponivelInfos = await Battery.isAvailableAsync();
      setDisponivel(disponivelInfos);
      const nvlDeBateria = await Battery.getBatteryLevelAsync();
      setNivelDeBateria((nvlDeBateria * 100).toFixed(0));
      const estadoBateria = await Battery.getBatteryStateAsync();
      if(estadoBateria == Battery.BatteryState.CHARGING){
        setCarregando(true)
      }else{
        setCarregando(false)
      }
    }, 100);
  }

  useEffect(() => {
    atualizarInformacoes()
  }, [])

  return (
    <View style={styles.nivelBateria}>
        {disponivel &&
            <>
                <View style={styles.barraBateria}>
                    <View id='bateria' style={[styles.quantidadeBarraBateria, {backgroundColor: props.corFundo ,width: `${nivelDeBateria}%`}]} >
                        {carregando &&
                            <MaterialCommunityIcons name="lightning-bolt" size={50} color="black" />
                        }
                    </View>
                </View>
                <View style={styles.textosBateria}>
                    <Text style={styles.textoBateria}>Sua bateria está em {nivelDeBateria}%.</Text>
                    {carregando &&
                        <Text style={styles.textoBateria}>Falta {100 - nivelDeBateria}% para a carga completa.</Text>
                    }
                </View>
            </>
        }
        {!disponivel &&
            <Text>As informações de bateria não estão disponíveis</Text>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  nivelBateria: {
    width: "90%",
    height: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  barraBateria: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 10
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
    margin: 10,
  },
  textoBateria: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5,
  }
});

export default NivelBateria