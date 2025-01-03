import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(""); // here enteredGoalText is the name of the state value and setEnteredGoalText is the function to update the state value
  const [goals, setGoals] = useState([]); // here goals is the name of the state value and setGoals is the function to update the state value

  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);

    // we can set the goals by calling setGoals() function and passing the new value of goals array as an argument to it.
    // But we can't directly modify the state value. So, we have to use the previous state value to update the state value.
    // We can do this by passing a function to the setGoals() function. This function will receive the previous state value as an argument
    // and we can return the new state value from this function.

    // setGoals([...goals, enteredGoalText]); //this is the wrong way to update the state value. Because we are directly modifying the state value.

    setGoals((currentGoals) => [...currentGoals, enteredGoalText]); //here a function is passed to the setGoals() function. This function will receive the previous state value as an argument and we can return the new state value from this function.
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      {/* Here we are displaying the goals in the goalsContainer 
      
      */}

      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goal}>
            <Text>{goal}</Text>
          </View>
        ))}
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
  goal: { padding: 10, marginVertical: 10, backgroundColor: "#ccc" },
});
