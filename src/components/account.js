import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import {RNCamera} from 'react-native-camera';
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      filedata: '',
      fileuri: '',
      modalVisible: false,
      newimg: '',
      newtitleimg: require('../assets/login.png'),
      titleImagepath: require('../assets/login.png'),
      DATA: [
        {
          picture: require('../assets/persona.png'),
          textList: 'Person A',
        },
        {
          picture: require('../assets/personb.png'),
          textList: 'Person B',
        },
        {
          picture: require('../assets/personc.png'),
          textList: 'Person C',
        },
      ],
    };
  }

  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  selectFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        //const source = {uri: res.uri};

        this.setState({
          filePath: res,
          filedata: res.data,
          fileuri: res.uri,
        });
      }
    });
  };
  renderFileUri() {
    if (this.state.fileuri) {
      return (
        <Image source={{uri: this.state.fileuri}} style={styles.imageStyle} />
      );
    } else {
      return (
        <Image
          source={require('../assets/login.png')}
          style={styles.imageStyle}
        />
      );
    }
  }

  render() {
    const {modalVisible, DATA, titleImagepath, newtitleimg} = this.state;
    var img = <Image style={styles.imageStyle} source={titleImagepath} />;
    //var newimg = <Image source={newtitleimg} />;
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
            <TouchableOpacity
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}>
              {img}
            </TouchableOpacity>

            <TouchableOpacity onPress={this.selectFile}>
              {this.renderFileUri()}
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
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          hasBackdrop={true}
          onBackdropPress={this.toggleModal}>
          <View style={styles.ModalMainVIew}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              data={DATA}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      this.setState({titleImagepath: item.picture});
                    }}>
                    <View style={styles.ModalFlatItemsVIew}>
                      <View style={styles.ModalFlatInnerItemsView}>
                        <Image
                          source={item.picture}
                          style={styles.ModalImagesView}
                        />
                        <Text style={styles.ModalTextView}>
                          {item.textList}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.textList}
            />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ModalTextView: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '600',
    justifyContent: 'center',
  },
  ModalImagesView: {height: 40, width: 40},
  ModalFlatInnerItemsView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ModalFlatItemsVIew: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
  },
  ModalMainVIew: {
    flex: 0.4,
    backgroundColor: '#ffe680',
    //marginTop: 50,
  },
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Account;
