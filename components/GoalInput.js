import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="  Your Goal....."
          onChangeText={props.onGoalInputHandler}></TextInput>
        <View style={styles.buttonContainer}>
        <View>
          <Button onPress={props.onAddGoal} title="Add Goals"></Button>
        </View>
        <View>
          <Button title="cancel" onPress={props.onCancel}></Button>
        </View>
        </View>
      </View>
    </Modal>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection:'row',
  }
});
