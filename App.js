
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

import Colors from './constrains/Colors'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Personal Library" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white
  },
  
});
