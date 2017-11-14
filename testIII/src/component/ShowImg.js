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
import Swiper from 'react-native-swiper';


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


class zoomImg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadindex: this.props.index + 1
        }
    }
    loadHandle = (i) => {
        let loadindex = i + 1;
        this.setState({
            loadindex: loadindex
        })
    }
    render() {
        return (
            <Modal
             visible={this.props.ImgZoomVisible}
             transparent={true}
             onRequestClose={() => {alert("Modal has been closed.")}}
            >


              {/* <View style={styles.maincontainer}>
                <View style={styles.content} >
                  <PhotoView
                  source={imgList[this.props.index]}
                  minimumZoomScale={0.5}
                  maximumZoomScale={3}
                  onTap={this.props.onClick}
                  onViewTap={this.props.onClick}
                  androidScaleType='centerInside'
                  style={{width:width*1,height:height*0.92}}
                 />
                 <Text onLongPress={this.props.onPoptoAler} style={styles.zIndextext}></Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footertext}>保存原图</Text>
              </View>
            </View>*/}
        <View style={{flex: 1}}>
        <Swiper
          loadMinimal loadMinimalSize={1}
          index={this.props.index}
          style={styles.wrapper} loop={false}
        >
        {
            imgList.map((item, i) =>
                <View style={styles.maincontainer}
                  i={i}
                  key={i}>
                  <View style={styles.content} >
                   <PhotoView
                    source={item}
                    minimumZoomScale={0.5}
                    maximumZoomScale={3}
                    onTap={this.props.onClick}
                    onLoad={this.loadHandle.bind(this,i)}
                    onViewTap={this.props.onClick}
                    androidScaleType='centerInside'
                    style={{width:width*1,height:height*0.92}}
                   />
                 <Text onLongPress={this.props.onPoptoAler} style={styles.zIndextext}></Text>
                </View>
                <View style={styles.footer}>
                  <Text style={styles.footertext}>保存原图</Text>
                </View>
             </View>)
          }
        </Swiper>
        <View>
          <Text>Current Loaded Images: {this.state.loadindex}</Text>
        </View>
      </View>
            </Modal>



        );

    }
}

const styles = StyleSheet.create({
    maincontainer: {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#060606',
    },
    zIndextext: {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    footer: {
        height: 30,
        position: 'absolute',
        bottom: 0,
    },
    footertext: {
        fontSize: 13,
        borderWidth: 1,
        borderColor: '#9A9494',
        backgroundColor: '#F6F0F0',
        padding: 2
    },
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: width * 1,
        flex: 1,
    },

    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    loadingImage: {
        width: 60,
        height: 60
    }
});

export default zoomImg;