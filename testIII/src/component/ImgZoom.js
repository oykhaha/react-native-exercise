import React, {
  Component
} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TouchableHighlight
} from 'react-native';
import PhotoView from 'react-native-photo-view';

const loading_1 = require('../img/1.png')
const loading_2 = require('../img/2.jpg')
const loading_3 = require('../img/3.jpg')

const imgList = [
  loading_1,
  loading_2,
  loading_3
]

let {
  width,
  height
} = Dimensions.get('window');

export default class ImageZoom extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.content} >
          <PhotoView
            source={imgList[this.props.index]}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            onTap={this.props.onSetImg}
            onViewTap={this.props.onSetImg}
            androidScaleType='centerInside'
            style={{width:width*1,height:height*0.92}}
          />
          <Text
            onLongPress={this.props.poptoShare}
            style={styles.zindexText}>
          </Text>
        </View>
                {/*<View style={styles.footer}>
                  <Text style={styles.footertext}>保存原图</Text>
                </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#070707',
  },
  zindexText: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});