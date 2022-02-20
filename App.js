import { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Item from "./components/Item";

import Colors from './constrains/Colors'

export default function App() {
  // const [bookList, setBookList] = useState([]);

  // const addBookHandler = (book) =>{

  // }
  return (
    <View style={styles.screen}>
      <Header title="Personal Library" />
      <Button title="Add new Book"  />
      <View styles={styles.listContainer}>
        <Item  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.lightpink
  },
  listContainer: {
    width: "100%",
    padding: 20,
  },

});
