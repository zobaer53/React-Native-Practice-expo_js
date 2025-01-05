import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{props.text}</Text>
  </View>;
}

export default GoalItem;

const styles = StyleSheet.create({
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
