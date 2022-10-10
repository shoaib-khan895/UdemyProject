import {View, Button, TextInput, StyleSheet} from 'react-native';

function GoalInput(props) {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="  Your Goal....."
        onChangeText={props.onGoalInputHandler}></TextInput>
      <Button onPress={props.onAddGoal} title="Add Goals"></Button>
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
  },
  InputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
