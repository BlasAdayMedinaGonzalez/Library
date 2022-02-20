import { useState } from "react";
import { Modal, Button, StyleSheet, TextInput, View } from "react-native";

const InputBook = ({addBookHandler, addModal,editValidate, editBookHandler}) => {
  const [title, settitle] = useState("");
  const [page, setpage] = useState("");
  const [ptg, setptg] = useState("");


  const titleHandler = (title) => {
    settitle(title);
  };
  const pageHandler = (page) => {
    setpage(page);
  };

  const ptgHandler = (ptg) => {
    setptg(ptg);
  };


  const validateProduct = () => {
      if (!editValidate) {
        addBookHandler(title, page, ptg);
      } else {
        editBookHandler(title, page, ptg);
      } 
  };
  
  return (
    <Modal visible={addModal} animationType={"slide"} transparent={true}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.productInput}
          placeholder="Add title"
          value={title}
          onChangeText={titleHandler}
        />
        <TextInput
          style={styles.productInput}
          placeholder="Add number of pages"
          value={page}
          onChangeText={pageHandler}
        />
        <TextInput
          style={styles.productInput}
          placeholder="Add percentage"
          value={ptg}
          onChangeText={ptgHandler}
        />
        <Button
          style={styles.productButton}
          title="Add"
          onPress={validateProduct}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  productInput: {
    width: "75%",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
    height: 40,
  },
  productButton: {
    width: "25%",
  },
});

export default InputBook;
