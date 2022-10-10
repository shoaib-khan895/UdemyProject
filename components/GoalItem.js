import {Pressable, StyleSheet} from 'react-native';
import {Text} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onLongPress={props.deleteGoal.bind(this,props.id)}>
      <Text style={styles.goalsItem}>{props.text}</Text>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    marginBottom: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});
