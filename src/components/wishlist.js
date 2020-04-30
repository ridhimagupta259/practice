// 'use strict';
// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';

// class ExampleApp extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           // androidCameraPermissionOptions={{
//           //   title: 'Permission to use camera',
//           //   message: 'We need your permission to use your camera',
//           //   buttonPositive: 'Ok',
//           //   buttonNegative: 'Cancel',
//           // }}
//           // androidRecordAudioPermissionOptions={{
//           //   title: 'Permission to use audio recording',
//           //   message: 'We need your permission to use your audio',
//           //   buttonPositive: 'Ok',
//           //   buttonNegative: 'Cancel',
//           // }}
//           // onGoogleVisionBarcodesDetected={({barcodes}) => {
//           //   console.log(barcodes);
//           // }}
//         />
//         <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//           <TouchableOpacity
//             onPress={this.takePicture.bind(this)}
//             style={styles.capture}>
//             <Text style={{fontSize: 14}}> SNAP </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       const options = {quality: 0.5, base64: true};
//       const data = await this.camera.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

// export default ExampleApp;
import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

 class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      newdata: [],
    };
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          newdata: responseJson,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.newdata}
          renderItem={({item}) => {
            return (
              <View style={styles.flatliststyle}>
                <Text style={{fontSize: 15, margin: 5}}>
                  User ID = {item.userId}
                </Text>
                <View style={styles.itemStyling}>
                  <Text style={styles.textstyle}>ID={item.id}</Text>
                  <Text style={styles.textstyle}>TITLE={item.title}</Text>
                  <Text style={styles.textstyle}> BODY= {item.body}</Text>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8585ad',
    //marginHorizontal: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatliststyle: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },

  itemStyling: {
    margin: 5,
  },

  textstyle: {
    fontSize: 15,
  },
});
export default Wishlist;
