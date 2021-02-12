import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Imagem extends Component {
    render() {
  
      let imagem = 'https://miro.medium.com/max/700/1*xDi2csEAWxu95IEkaNdFUQ.png'
  
      return(
        <View>
          <Image
            source={{uri: imagem}}
            style={{width: this.props.largura, height: this.props.altura}}
          ></Image>
          <Text> {this.props.texto} </Text>
        </View>
      )
    }
  }

  export default Imagem;