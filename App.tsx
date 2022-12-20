import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Menu from './src/components/menu/menu';
import EditTodoView from './src/components/todo/edit-todo-view';
import TodoList from './src/components/todo/todo-list';
import ITodo from './src/components/todo/todo.model';

const App = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [isEditTodoVisible, setIsEditTodoVisible] = useState(false);

  const onAddTodo = () => {
    setIsEditTodoVisible(true);
  };

  const onCloseEditTodo = () => {
    setIsEditTodoVisible(false);
  };

  const onSaveTodo = (newData: ITodo) => {
    setIsEditTodoVisible(false);
    console.log('data', newData);
    setData(d => [...d, newData]);
    console.log('data', data);
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>ToDo</Text>
      <TodoList data={data} />
      <Menu
        onAddTodo={() => {
          onAddTodo();
        }}
      />

      <EditTodoView
        isVisible={isEditTodoVisible}
        onClose={() => {
          onCloseEditTodo();
        }}
        onSave={onSaveTodo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
  },
});

export default App;
