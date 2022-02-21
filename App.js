import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.pigeonImage} source={require("./pigeon.gif")} />
      <Text style={styles.infoText}>110819019 許弘陽</Text>
      <Text style={styles.infoText}>wk1_homework</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    flex: 1,
    fontSize: 24,
    color: "#000",
  },
  pigeonImage: {
    flex: 2,
    resizeMode: "center",
  },
});
