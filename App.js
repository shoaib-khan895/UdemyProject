import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

function app() {
  const [goalTextEntred, setGoalTextEntred] = useState('');
  const [goals, SetGoals] = useState([]);

  function goalInputHandler(enterdText) {
    setGoalTextEntred(enterdText);
  }
  function addGoalHandler() {
    SetGoals(currentGoalState => [...currentGoalState, goalTextEntred]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.InputContainer}>
        <TextInput
        
          style={styles.textInput}
          placeholder="  Your Goal....."
          onChangeText={goalInputHandler}></TextInput>
        <Button onPress={addGoalHandler} title="Add Goals"></Button>
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <Text style={styles.goalsItem} key={index}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
  },
  InputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsItem: {
    marginBottom: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});

export default app;
