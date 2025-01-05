import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

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

    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random.toString },
    ]); //here a function is passed to the setGoals() function. This function will receive the previous state value as an argument and we can return the new state value from this function.
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonAddGoal}>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
      </View>

      {/* Here we are displaying the goals in the goalsContainer 
      
      We are using the map() function to loop through the goals array and display each goal in a separate View component.
      key prop is used to uniquely identify the View component. We can use the index of the goal in the goals array as the key prop value.
      */}

      <View style={styles.goalsContainer}>
        {/* <ScrollView> */}
        {/* //ScrollView renders all its children components at once. So, it is
          not suitable for rendering a large number of components. It is
          suitable for rendering a small number of components. */}
        {/* //alwaysBounceVertical prop is used to enable the vertical bounce
            effect when the user scrolls the FlatList component. */}
        {/* {goals.map((goal, index) => ( */}
        {/* // now when we are using flatlist we don't need to map manually // we
        can use the renderItem prop to render the items */}
        {/*

              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View> */}
        {/* ))} */}
        {/* </ScrollView> */}

        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item.item.text}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        />
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
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    fontFamily: "Times New Roman",
    width: "70%",
  },

  buttonAddGoal: {
    borderRadius: 12,
    overflow: "hidden",
  },

  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },

  goalText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
});
