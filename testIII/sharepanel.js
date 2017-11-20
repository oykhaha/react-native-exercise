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

  render() {
    const {
      sourceUrl,
      index
    } =this.props;
    return (
      <View style={styles.content}>
        <ViewImg
          index={this.props.index}
          imgZoomVisible={this.state.imgZoomVisible}
          onSetImg={this.onSetImg}
          poptoShare={this.poptoShare}
          sourceUrl={this.props.sourceUrl}
        />

              {/*<AlerSelect
                onClick={this.onSetAler}
                index={this.state.id}
                onPop={this.onSetPop}
                AlerVisible={this.state.AlerVisible}
              />*/}
          {
            this.props.sourceUrl.map((item,i) => {
              <View
                style={styles.imgItem}
                key={i}
              >
                <TouchableHighlight onPress={this.setImg}>
                  <Image
                    source={item}
                    style={styles.img}
                  />
                </TouchableHighlight>

                <Share
                  ShareVisible={this.state.shareVisible}
                  source={item}
                  index={this.props.index}
                  onClick={this.poptoShare}
                />
              </View>
            })

          }
        </View>
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