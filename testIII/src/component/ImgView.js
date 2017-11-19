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
import ImageZoom from './ImgZoom';
import Swiper from 'react-native-swiper';

let {
  width,
  height
} = Dimensions.get('window');

const loading_1 = require('../img/1.png')
const loading_2 = require('../img/2.jpg')
const loading_3 = require('../img/3.jpg')

const imgList = [
  loading_1,
  loading_2,
  loading_3
]

export default class ViewImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_1: 0,
      id_2: 1,
      id_3: 2,
      swipershow:false
    };
}

  componentDidMount(){
    setTimeout(() =>
    {
      this.setState({
        swipershow:true
      });
    },0)
  }


  render() {
    if (this.state.swipershow) {
      return (
        <View style={{position:'absolute'}}>
          <Modal
            visible={this.props.imgZoomVisible}
            transparent={true}
            onRequestClose={() =>
              {alert("Modal has been closed.")}
            }
          >
            <Swiper
              loadMinimal
              loadMinimalSize={1}
              index={this.props.index}
              style={styles.wrapper}
              loop={false}
            >
              {
                imgList.map((item,i)=>
                  <ImageZoom
                    onSetImg={this.props.onSetImg}
                    poptoShare={this.props.poptoShare}
                    index={i}
                    key={i}
                  />)
              }
            </Swiper>
               {/*<ImageZoom
                 onSetImg={this.props.onSetImg}
                 poptoShare={this.props.poptoShare}
                 index={this.state.id_1}
               />*/}


          </Modal>
        </View>
      );
    } else {
        return (
          <Modal
            visible={this.props.imgZoomVisible}
            transparent={true}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <ImageZoom
              onSetImg={this.props.onSetImg}
              poptoShare={this.props.poptoShare}
              index={this.state.id_1}
            />
          </Modal>
        );
      }
  }
}

const styles = StyleSheet.create({
  img: {
    borderWidth: 3,
    width: 250,
    height: 230,
    borderColor: '#3D2929',
    borderRadius: 5
  }
});