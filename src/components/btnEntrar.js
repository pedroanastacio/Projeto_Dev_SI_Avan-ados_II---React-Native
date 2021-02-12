import React, { Component } from 'react';
import { View, Button} from 'react-native';

class BtnEntrar extends Component {
    render() {
         
      return(
        <View>
            <Button title= {this.props.texto} />
        </View>
      )
    }
  }

  export default BtnEntrar;