//Importanteo os componentes necessários da biblioteca do react native 

import { StyleSheet, Text, View } from "react-native";

// Definiindo o componente funional home como padrão de exportação
export default function Delivered() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivered</Text>
    </View>
  );
}

//Definindo os estilos para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela disponível
    backgroundColor: "#fff", // define o fundo da tela como branco
    alignItems: "center", //alinha os itens no centro da tela
    justifyContent: "center",  // alinha os itens no centro  verticalmente
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
        color: "#000",
    },
})