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
import AlerSelect from './src/component/AlerSelect';
import ViewImg from './src/component/ImgView';
import Share from './src/component/Share';


export default class App extends Component {
    constructor() {
            super();
            this.state = {
                ImgZoomVisible: false,
                shareVisible: false,
                //AlerVisible: false,
                id: 0
            };
        }
        /*onSetPop = () => {
            this.setState({
                ShareVisible: !this.state.ShareVisible,
                AlerVisible: !this.state.AlerVisible
            });
        }
        onSetAler = () => {
            this.setState({
                AlerVisible: !this.state.AlerVisible
            });
        }*/
    poptoShare = () => {
        this.setState({
            shareVisible: !this.state.shareVisible
        });
    }
    onSetImg = () => {
        this.setState({
            ImgZoomVisible: !this.state.ImgZoomVisible
        });
    }
    onSetImg1 = () => {
        this.setState({
            ImgZoomVisible: !this.state.ImgZoomVisible,
            id: 0
        });
    }
    onSetImg2 = () => {
        this.setState({
            ImgZoomVisible: !this.state.ImgZoomVisible,
            id: 1
        });
    }
    onSetImg3 = () => {
        this.setState({
            ImgZoomVisible: !this.state.ImgZoomVisible,
            id: 2
        });
    }

    render() {
      return (
        <ScrollView>
          <View style={styles.content}>
              <ViewImg
                index={this.state.id}
                ImgZoomVisible={this.state.ImgZoomVisible}
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

            <Text style={styles.txt}>Zoom Image Examples! Try to click them~</Text>
            <View style={styles.imgItem}>
              <TouchableHighlight onPress={this.onSetImg1}>
               <Image
                source={require('./src/img/1.png')}
                style={styles.img}
               />
              </TouchableHighlight>
            </View>

          <View style={styles.imgItem}>
            <TouchableHighlight onPress={this.onSetImg2}>
               <Image
                source={require('./src/img/2.jpg')}
                style={styles.img}
               />
              </TouchableHighlight>
          </View>

         <View style={styles.imgItem}>
            <TouchableHighlight onPress={this.onSetImg3}>
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