import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Imagem extends Component {
  render() {

    let imagem = 'https://miro.medium.com/max/700/1*xDi2csEAWxu95IEkaNdFUQ.png'

    return(
      <View style={[styles.container, this.props.imgStyle]}>
        <Image source={{uri: imagem}} style={{width: this.props.largura, height: this.props.altura}} />
        <Text> {this.props.texto} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30
  }
})




export default Imagem;