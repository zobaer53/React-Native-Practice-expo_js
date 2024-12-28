import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.dummyText}>Hello World</Text>
      </View>
      <Text style={styles.dummyText}>
        Open up App.js to start working on your app!
      </Text>

      <Button style={styles.dummyText} title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  dummyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
