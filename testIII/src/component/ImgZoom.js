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
import PropTypes from 'prop-types';

let {
  width,
  height
} = Dimensions.get('window');

export default class ImageZoom extends Component {

  static propTypes = {
    source:PropTypes.object,
    setImg:PropTypes.func,
  }

  render() {
    return (
      <View
        style={styles.mainContainer}
      >
        <View
          style={styles.content}
        >
          <PhotoView
            source={this.props.source}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            onTap={this.props.setImg}
            onViewTap={this.props.setImg}
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