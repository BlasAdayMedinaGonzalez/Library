import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Item = () => {
  return (
    <View style={styles.item}>
      <View styles={styles.itemText}>
        <Text>Imagen</Text>
      </View>
      <View style={styles.textInfo}>
        <Text styles={styles.itemText}>Hola</Text>
        <Text styles={styles.itemText}>Hola</Text>
        <Text styles={styles.itemText}>Hola</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity >
            <View style={styles.edit}>
                <Text style={styles.itemText}>Edit</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity >
            <View style={styles.delete}>
                <Text style={styles.itemText}>Delete</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F48FB1",
    width: "100%",
    height: 110,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    marginRight: 10,
  },
  textInfo: {
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  edit: {
    backgroundColor: "yellow",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  delete: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Item;
