import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class BemVindo extends Component {
  render() {
        
    return(
      <View>
          <Text style={styles.text}> {this.props.texto} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1464f6'
  }
})

export default BemVindo;