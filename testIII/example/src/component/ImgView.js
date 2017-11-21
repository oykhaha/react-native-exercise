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
import PropTypes from 'prop-types';

let {
  width,
  height
} = Dimensions.get('window');


export default class ViewImg extends Component {

  static propTypes = {
    index:PropTypes.number,
    setImg:PropTypes.func,
    sourceUrl:PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      swipershow: false
    };
  }

  componentDidMount(){
    setTimeout(() =>
    {
      this.setState({
        swipershow: true
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
            onRequestClose={() =>{
              alert('Modal has been closed.')}
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
                this.props.sourceUrl.map((item,i)=>{
                  return(
                    <ImageZoom
                      setImg={this.props.setImg}
                      poptoShare={this.props.poptoShare}
                      source={{uri:item.url}}
                      key={i}
                    />
                  )
                })
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
            onRequestClose={() => {
              alert("Modal has been closed.")
            }}
          >
            <Text>404 NOT FOUND</Text>
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