import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Colors from "../constrains/Colors";

const Item = ({itemData, onDelete, onEdit}) => {
  const {title, page, ptg} = itemData;
  return (
    <View style={styles.item}>
      <View style={styles.textInfo}>
        <Text styles={styles.itemText}>Título: {title}</Text>
        <Text styles={styles.itemText}>Número de Página: {page}</Text>
        <Text styles={styles.itemText}>Porcentaje leído: {ptg}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onEdit} >
            <View style={styles.edit}>
                <Text style={styles.itemText}>Edit</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} >
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
    justifyContent: "space-around",
    backgroundColor: Colors.pinkbright,
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
