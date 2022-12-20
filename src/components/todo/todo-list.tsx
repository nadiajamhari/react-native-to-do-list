import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import Todo from './todo';

import ITodo from './todo.model';

interface ITodoListProps {
  data: ITodo[];
}

const TodoList = (props: ITodoListProps) => {
  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={(item: any) => {
        return <Todo data={item.item} />;
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
});
