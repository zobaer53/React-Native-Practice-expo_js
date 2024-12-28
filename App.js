import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.style1}>
        <Text>1</Text>
      </View>
      <View style={styles.style2}>
        <Text>2</Text>
      </View>
      <View style={styles.style3}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-around",
    alignContent: "center",
  },
  style1: {
    flex: 1,
    backgroundColor: "red",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  style2: {
    flex: 1,
    backgroundColor: "blue",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  style3: {
    flex: 1,
    backgroundColor: "green",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
