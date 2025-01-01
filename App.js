import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Your goal" />
        <Button title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text> List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    //backgroundColor: "red",
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    //backgroundColor: "white",
    width: "70%",
  },

  goalsContainer: {
    flex: 6,
  },
});
