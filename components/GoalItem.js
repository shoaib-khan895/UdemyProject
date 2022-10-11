import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        android_ripple={{color: '#dddddd'}}
        onLongPress={props.deleteGoal.bind(this, props.id)}>
        <Text style={{color: 'white'}}>{props.text}</Text>
      </Pressable>
    </View>
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
  pressedItem: {
    opacity: 0.5,
  },
});
