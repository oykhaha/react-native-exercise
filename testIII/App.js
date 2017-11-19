import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import ViewImg from './src/component/ImgView';
import Share from './src/component/Share';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
    imgZoomVisible: false,
    shareVisible: false,
    id: 0
  };
}

  poptoShare = () => {
    this.setState({
      shareVisible: !this.state.shareVisible
    });
  }
  onSetImg = () => {
    this.setState({
      imgZoomVisible: !this.state.imgZoomVisible
  });
 }
  setImg1 = () => {
    this.setState({
      imgZoomVisible: !this.state.imgZoomVisible,
      id: 0
    });
  }
  setImg2 = () => {
    this.setState({
      imgZoomVisible: !this.state.imgZoomVisible,
      id: 1
    });
  }
  setImg3 = () => {
    this.setState({
      imgZoomVisible: !this.state.imgZoomVisible,
      id: 2
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.content}>
          <ViewImg
            index={this.state.id}
            imgZoomVisible={this.state.imgZoomVisible}
            onSetImg={this.onSetImg}
            poptoShare={this.poptoShare}
          />
          <Share
            ShareVisible={this.state.shareVisible}
            index={this.state.id}
            onClick={this.poptoShare}
          />
              {/*<AlerSelect
                onClick={this.onSetAler}
                index={this.state.id}
                onPop={this.onSetPop}
                AlerVisible={this.state.AlerVisible}
              />*/}

          <Text style={styles.txt}>
            Zoom Image Examples! Try to click them~
          </Text>

          <View style={styles.imgItem}>
            <TouchableHighlight onPress={this.setImg1}>
              <Image
                source={require('./src/img/1.png')}
                style={styles.img}
              />
            </TouchableHighlight>
          </View>

          <View style={styles.imgItem}>
            <TouchableHighlight onPress={this.setImg2}>
              <Image
                source={require('./src/img/2.jpg')}
                style={styles.img}
              />
            </TouchableHighlight>
          </View>

          <View style={styles.imgItem}>
            <TouchableHighlight onPress={this.setImg3}>
              <Image
                source={require('./src/img/3.jpg')}
                style={styles.img}
              />
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAD5F1'
  },
  txt: {
    fontSize: 16,
    marginTop: 50,
    color: '#333'
  },
  img: {
    borderWidth: 3,
    width: 250,
    height: 230,
    borderColor: '#3D2929',
    borderRadius: 5
  },
  imgItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
});