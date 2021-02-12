import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BemVindo from './src/components/bemVindo';
import Imagem from './src/components/imagem';
import BtnEntrar from './src/components/btnEntrar'

class App extends Component {
  render() {

    let nome = 'Pedro'

    return(
      <View style={styles.container}>
        <BemVindo texto='Olá Seja Bem-Vindo'/>
        <Text>Lorem Ipsum is simply dummy text of the {nome}</Text>
        <Imagem largura={400} altura={300} texto='Clique aqui para acessar'/>
        <BtnEntrar texto='Entrar'/>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
