import { useState } from "react";
import { Button, FlatList , StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Item from "./components/Item";
import InputBook from "./components/InputBook";

import Colors from './constrains/Colors'

export default function App() {
  const [bookList, setBookList] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [editValidate, seteditValidate] = useState(false);
  const [itemKey, setItemKey] = useState("");

  const addBookHandler = (title, page, ptg) => {
    if (title !== "" && page !== "" && ptg !== "") {
      setBookList(currentBookList => [
        ...currentBookList,
        {
          key: Math.random().toString(),
          title,
          page,
          ptg
        }
      ])
      setshowModal(false);
    }
    console.log(bookList);
  }
  const deleteBookHandler = (bookKey) => {
    setBookList((currentList) => {
      return currentList.filter(book => book.key !== bookKey);
    })
  }

  const editBookHandler = (newtitle, newpage, newptg) => {
    bookList.map(item => {
      if (item.key == itemKey) {
        item.title = newtitle;
        item.page = newpage;
        item.ptg = newptg;
      }
    })
    setshowModal(false);
    console.log("Editando..");
  }
  return (
    <View style={styles.screen}>
      <Header title="Personal Library" />
      <Button title="Add new Book" onPress={() => setshowModal(true)} />
      <InputBook addBookHandler={addBookHandler} editBookHandler={editBookHandler} addModal={showModal} editValidate={editValidate} />
      <View styles={styles.listContainer}>
        <FlatList data={bookList} renderItem={itemData => {
          return (
            <Item 
            itemData={itemData.item} 
            onDelete={ () => deleteBookHandler(itemData.item.key)} 
            onEdit= { () => {setshowModal(true) ; seteditValidate(true); setItemKey(itemData.item.key)}} 
            />)
        }} />
        
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
    padding: 20
  },

});
