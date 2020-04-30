import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }
  signin = () => {
    return (
      <View style={styles.lowerview}>
        <SafeAreaView style={{backgroundColor: '#fff'}}>
          <View style={{height: 65}} />
          <TextInput
            style={styles.textInputFields}
            defaultValue={'Your Email Address'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.textInputFields}
            defaultValue={'Password'}
            secureTextEntry={false}
          />
          <TouchableOpacity>
            <Text style={styles.forPass}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{height: 20}} />
            <View
              style={{
                ...styles.textInputFields,
                backgroundColor: '#000',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#fff', alignSelf: 'center'}}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{height: 50}} />
          <Text style={{alignSelf: 'center', fontSize: 13, color: '#484d4c'}}>
            or Sign In via
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <TouchableOpacity style={{flex: 1}}>
              <View
                style={{
                  height: 50,
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '2f3030',
                }}>
                <View style={{flex: 4}}>
                  <Image
                    source={require('../assets/aedflag.png')}
                    style={{
                      height: 50,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <Text style={{flex: 7, fontSize: 20}}> Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1}}>
              <View
                style={{
                  height: 50,
                  margin: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '2f3030',
                }}>
                <Image
                  source={require('../assets/cart.png')}
                  style={{
                    flex: 6,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    height: 25,
                  }}
                />
                <Text style={{flex: 7, fontSize: 20}}> Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: 150}} />
        </SafeAreaView>
        <View style={{justifyContent: 'flex-end', backgroundColor: '#f2ede9'}}>
          <TextInput
            style={{borderColor: '#cfccc8', borderWidth: 0.7, height: 1}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 22,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#6b6967',
                marginHorizontal: 10,
              }}>
              Don't have an account?
            </Text>
            <Text style={{fontSize: 15, marginHorizontal: 10}}> Join</Text>
          </View>

          <TextInput
            style={{borderColor: '#cfccc8', borderWidth: 1, height: 1}}
          />
        </View>
      </View>
    );
  };
  join() {
    return (
      <View style={styles.lowerview}>
        <View style={{height:30}}></View>
        <TextInput
          style={styles.textInputFields}
          defaultValue={'Your Email Address'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.textInputFields}
          defaultValue={'Your Email Address'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.textInputFields}
          defaultValue={'Your Email Address'}
          keyboardType={'email-address'}
        />
      </View>
    );
  }

  render() {
    const {toggle, signin} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.upperview}>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.setState({toggle: true});
              }}>
              <Text style={{fontSize: 20}}>Sign In </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                this.setState({toggle: false});
              }}>
              <Text style={{fontSize: 20}}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
        {toggle ? <this.signin /> : <this.join />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  upperview: {
    flex: 0.12,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lowerview: {flex: 1, backgroundColor: '#fff'},
  textInputFields: {
    height: 50,
    marginHorizontal: 15,
    borderColor: '#e3dddc',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 8,
  },

  forPass: {
    fontSize: 13,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 14,
  },
});

export default Home;
