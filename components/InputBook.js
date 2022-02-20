import { useState } from "react";
import { Modal, Button, StyleSheet, TextInput, View } from "react-native";

const InputBook = ({addBookHandler, addModal,editValidate, editBookHandler}) => {
  const [title, settitle] = useState("");
  const [page, setpage] = useState("");
  const [ptg, setptg] = useState("");

  const [titleEdit, settitleEdit] = useState("");
  const [pageEdit, setpageEdit] = useState("");
  const [ptgEdit, setptgEdit] = useState("");


  const titleHandler = (title) => {
    settitleEdit(title);
    settitle(title);
  };
  const pageHandler = (page) => {
    setpageEdit(page);
    setpage(page);
  };

  const ptgHandler = (ptg) => {
    setptgEdit(ptg);
    setptg(ptg);
  };


  const validateProductAdd = () => {
    addBookHandler(title, page, ptg);
    settitle("");
    setpage("");
    setptg("");
    console.log(title);
  };

  const validateProductEdit = () => {
    editBookHandler(titleEdit, pageEdit, ptgEdit);
    settitle("");
    setpage("");
    setptg("");
  };

  
  if (!editValidate) {
    return (
        <Modal visible={addModal} animationType={"slide"} transparent={true}>
          <View style={styles.inputBook}>
            <TextInput
              style={styles.bookInput}
              placeholder="Add title"
              value={title}
              onChangeText={titleHandler}
            />
            <TextInput
              style={styles.bookInput}
              placeholder="Add number of pages"
              value={page}
              onChangeText={pageHandler}
            />
            <TextInput
              style={styles.bookInput}
              placeholder="Add percentage"
              value={ptg}
              onChangeText={ptgHandler}
            />
            <Button
              style={styles.bookButton}
              title="Add"
              onPress={validateProductAdd}
            />
          </View>
        </Modal>
      );
  } else {
    return (
        <Modal visible={addModal} animationType={"slide"} transparent={true}>
          <View style={styles.inputBook}>
            <TextInput
              style={styles.bookInput}
              placeholder="Edit title"
              value={titleEdit}
              onChangeText={titleHandler}
            />
            <TextInput
              style={styles.bookInput}
              placeholder="Edit number of pages"
              value={pageEdit}
              onChangeText={pageHandler}
            />
            <TextInput
              style={styles.bookInput}
              placeholder="Edit percentage"
              value={ptgEdit}
              onChangeText={ptgHandler}
            />
            <Button
              style={styles.bookButton}
              title="Edit"
              onPress={validateProductEdit}
            />
          </View>
        </Modal>
      );
  }
  
};
const styles = StyleSheet.create({
  inputBook: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  bookInput: {
    width: "75%",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    height: 40,
  },
  bookButton: {
    width: "25%",
  },
});

export default InputBook;
