import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BemVindo from './src/components/bemVindo';
import Imagem from './src/components/imagem';
import BtnEntrar from './src/components/btnEntrar'

class App extends Component {
  render() {

    let nome = 'MARCOS'

    return(
      <View style={styles.container}>
        <BemVindo texto='Olá Seja Bem-Vindo'/>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the <Text style={styles.nome}>{nome}</Text></Text>
        <Imagem largura={280} altura={200} texto='Clique aqui para acessar'/>
        <BtnEntrar texto='Entrar'/>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },

  text: {
    marginTop: 15
  },

  nome: {
    fontWeight: 'bold'
  }
});

export default App;
