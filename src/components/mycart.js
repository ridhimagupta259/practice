import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

class MyCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  render() {
    return (
      <View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  textEdit: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
});

export default MyCart;
