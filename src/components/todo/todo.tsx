import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import ITodo from './todo.model';

interface ITodoProps {
  data: ITodo;
}

const Todo = (props: ITodoProps) => {
  console.log('the Data at Todo', props.data);
  const [isDone, setIsDone] = useState(false);

  return (
    <View style={[styles.container, {backgroundColor: props.data.color}]}>
      <BouncyCheckbox
        fillColor="black"
        unfillColor="#ffffff"
        iconStyle={{borderColor: 'black'}}
        isChecked={isDone}
        onPress={() => {
          setIsDone(true);
        }}
        style={styles.checkbox}
      />
      <Text style={styles.text}>{props.data.text}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  checkbox: {
    width: 40,
    minWidth: 40,
    height: 40,
  },
  text: {
    color: 'black',
    width: '100%',
  },
});
