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
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      
    };
  }

  handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    }).then(r => {
      this.setState({photos: r.edges});
    });
  };
  render() {
    
    return (
      <View style={styles.container}>
        <Button title="Load Images" onPress={this.handleButtonPress} />
        <View>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100,
                }}
                source={{uri: p.node.image.uri}}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEdit: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
});

export default Home;
