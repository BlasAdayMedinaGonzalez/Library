import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constrains/Colors';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.pink,
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Header