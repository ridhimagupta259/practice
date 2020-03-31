import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.outercontainer}>
          <View style={styles.innerleftcontainer}>
            <View style={styles.uppertext}>
              <Text style={styles.upperteststyle}>Welcome!</Text>
            </View>
            <View style={styles.lowertext}>
              <View style={styles.signinstyle}>
                <TouchableOpacity>
                  <Text>SIGN IN </Text>
                </TouchableOpacity>

                <Text> | </Text>
                <TouchableOpacity>
                  <Text> JOIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.TitleImage}>
            <TouchableOpacity>
              <Image
                style={styles.imageStyle}
                source={require('../assets/login.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.strip} />
        {/* list1 starts here */}
        <TouchableOpacity activeOpacity={0.7}>
          <View style={{backgroundColor: '#fff'}}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image source={require('../assets/location.png')} />
                <Text style={styles.upperlistcontent}>Track Order</Text>
              </View>

              <View>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>

            <View style={styles.greystrip} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={{backgroundColor: '#fff'}}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{marginLeft: 5}}
                  source={require('../assets/sizearrow.png')}
                />
                <Text style={styles.upperlistcontent}>Size Chart</Text>
              </View>

              <View>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>

            <View style={styles.greystrip} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={{backgroundColor: '#fff'}}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image source={require('../assets/bell.png')} />
                <Text style={styles.upperlistcontent}>Notification</Text>
              </View>

              <View>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>

            <View style={styles.greystrip} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={{backgroundColor: '#fff'}}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{marginLeft: 5}}
                  source={require('../assets/store.png')}
                />
                <Text style={styles.upperlistcontent}>Store Locator</Text>
              </View>

              <View>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>

            <View style={styles.greystrip} />
          </View>
        </TouchableOpacity>
        <View style={styles.strip} />

        <View style={{flex: 0.7, backgroundColor: '#fff'}}>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/globe.png')}
                />
                <Text style={styles.upperlistcontent}>Country</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{height: 25, width: 40, marginRight: 20}}
                  source={require('../assets/aedflag.png')}
                />
                <Text style={{marginRight: 20, fontSize: 18}}>AED</Text>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.greystrip} />
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/language.png')}
                />
                <Text style={styles.upperlistcontent}>Language</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 20, fontSize: 18}}>ENG</Text>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.greystrip} />
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/person.png')}
                />
                <Text style={styles.upperlistcontent}>About Us</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.greystrip} />
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/faq.png')}
                />
                <Text style={styles.upperlistcontent}>FAQ</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.greystrip} />
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.upperlist}>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/box.png')}
                />
                <Text style={styles.upperlistcontent}>Shipping & Returns</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.arrowimage}
                  source={require('../assets/arrow.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  outercontainer: {
    flex: 0.3,
    backgroundColor: '#fff',
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  innerleftcontainer: {
    //backgroundColor: 'yellow',
    flex: 0.5,
    marginTop: 20,
    //flexDirection: 'row',
  },
  uppertext: {
    margin: 20,
  },
  upperteststyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  lowertext: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    //marginTop:10,
    flex: 0.5,
    //marginLeft: 3,
  },
  signinstyle: {
    flexDirection: 'row',
    backgroundColor: '#fffcef',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 130,
    //marginBottom:50
  },
  TitleImage: {
    flex: 0.5,
    justifyContent: 'center',
  },
  imageStyle: {
    alignSelf: 'flex-end',
    width: 80,
    height: 80,
    marginRight: 20,
  },
  strip: {
    backgroundColor: '#f2f2f2',
    flex: 0.02,
    // height:15,
  },
  upperlist: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    //alignContent: 'center',
    height: 40,
    backgroundColor: 'white',
  },
  upperlistcontent: {
    fontSize: 17,
    marginLeft: 20,
    marginTop: 5,
  },
  arrowimage: {
    marginRight: 20,
    height: 20,
    width: 20,
    marginTop: 5,
  },
  greystrip: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
});

export default Account;
