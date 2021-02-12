import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BemVindo extends Component {
    render() {
         
      return(
        <View>
            <Text> {this.props.texto} </Text>
        </View>
      )
    }
  }

  export default BemVindo;