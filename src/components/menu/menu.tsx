import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

interface IMenu {
  onAddTodo: () => void;
}

const Menu = (props: IMenu) => {
  return (
    <View>
      <Button title="+ Add To Do" onPress={props.onAddTodo} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '30px',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
});
