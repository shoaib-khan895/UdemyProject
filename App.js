import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

function app() {
  const [goalTextEntred, setGoalTextEntred] = useState('');
  const [goals, SetGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }

  function goalInputHandler(enterdText) {
    setGoalTextEntred({text: enterdText, id: Math.random().toString()});
  }
  function addGoalHandler() {
    SetGoals(currentGoalState => [...currentGoalState, goalTextEntred]);
  }

  function deleteGoal(id) {
    SetGoals(currentGoalState => {
      return currentGoalState.filter(goal => goal.id != id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        onPress={startAddGoalHandler}
        title="Add New Goal"
        color="#5e0acc"></Button>

      <GoalInput
        visible={modalIsVisible}
        onCancel={stopAddGoalHandler}
        onAddGoal={addGoalHandler}
        onGoalInputHandler={goalInputHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                deleteGoal={deleteGoal}></GoalItem>
            );
          }}
          keyExtractor={(item, index) => {
            item.id;
          }}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default app;
