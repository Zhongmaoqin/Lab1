import * as React from "react";
import {
  View,
  Text,
} from "react-native";

function App() {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: 20
    }}>
      <Text style={{
        fontSize: 18,
        color: 'deepskyblue'
      }}>
        I plan to develop a mobile phone sales mall, where users can purchase mobile phones and generate orders
      </Text>
    </View>
  );
}

export default App;
