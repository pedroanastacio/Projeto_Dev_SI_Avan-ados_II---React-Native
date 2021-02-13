import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class BtnEntrar extends Component {
    render() {
         
      return(
        <View >
          <TouchableOpacity style={styles.btn}>
           <Text style={styles.textBtn}> {this.props.texto} </Text>
          </TouchableOpacity>  
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  btn: {
    width: 280,
    marginTop: 35,
    backgroundColor: '#1565c0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 5
  },

  textBtn: {
    color: '#fff'
  }
})

export default BtnEntrar;