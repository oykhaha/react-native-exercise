import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import ViewImg from './src/component/ImgView';
import Share from './src/component/Share';


let {
  width,
  height
} = Dimensions.get('window')

export default class sharepanel extends Component {

  static propTypes = {
    sourceUrl:PropTypes.array.isRequired,
  }

  constructor() {
    super();
    this.state = {
      imgZoomVisible: false,
      shareVisible: false,
      index:0,
      url:'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
    };
  }

  poptoShare = () => {
    this.setState({
      shareVisible: !this.state.shareVisible
    });
  }
  setImg = (item) => {
   // console.log(this.props.sourceUrl.indexOf(item));
    this.setState({
      imgZoomVisible: !this.state.imgZoomVisible,
      url:item.url,
      index:this.props.sourceUrl.indexOf(item)
    });
  }

  render() {
    const {
      sourceUrl,
      index
    }  = this.props;
    return (
      <View style={styles.content}>
        <ViewImg
          index={this.state.index}
          imgZoomVisible={this.state.imgZoomVisible}
          setImg={this.setImg}
          poptoShare={this.poptoShare}
          sourceUrl={this.props.sourceUrl}
        />
        <Share
          ShareVisible={this.state.shareVisible}
          source={this.state.url}
          index={this.state.index}
          onClick={this.poptoShare}
        />
         <View style={styles.subcontent}>
           {
            this.props.sourceUrl.map((item,i) => {
              return(
                <View
                  style={styles.imgItem}
                  key={i}
                >
                  <TouchableHighlight
                    onPress={this.setImg.bind(this,item)}
                  >
                    <Image
                      source={{uri:item.url}}
                      style={styles.img}
                    />
                  </TouchableHighlight>
                </View>
              )
            })
          }
         </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAD5F1',
    width:width,
    height:height
  },
  subcontent:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  txt: {
    fontSize: 16,
    marginTop: 50,
    color: '#333'
  },
  img: {
    borderWidth: 3,
    width: 90,
    height: 90,
    borderColor: '#3D2929',
    borderRadius: 5
  },
  imgItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  }
});