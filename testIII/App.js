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
import Share from './src/component/Share';
import AlerSelect from './src/component/AlerSelect';
import ZoomImg from './src/component/ShowImg';

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7685233?v=3&s=460'
}, {
    url: 'https://ooo.0o0.ooo/2017/03/31/58de0e9b287f6.jpg'
}, {
    url: 'https://ooo.0o0.ooo/2017/03/31/58de0e9b28328.jpg'
}]


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            ImgZoomVisible: false,
            AlerVisible: false,
            ShareVisible: false,
            Imgsource: null,
            id: 1
        };
    }
    onSetPop = () => {
        this.setState({
            ShareVisible: !this.state.ShareVisible,
            AlerVisible: !this.state.AlerVisible
        });
    }

    onSetShare = () => {
        this.setState({
            ShareVisible: !this.state.ShareVisible
        });
    }
    onSetAler = () => {
        this.setState({
            AlerVisible: !this.state.AlerVisible
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
             <Share
               onClick={this.onSetShare}
               ShareVisible={this.state.ShareVisible}
              />

              <AlerSelect
                onClick={this.onSetAler}
                index={this.state.id}
                onPop={this.onSetPop}
                AlerVisible={this.state.AlerVisible}
              />

              <ZoomImg
                source={require('./src/img/3.jpg')}
                onClick={this.onSetImg1}
                onPoptoAler={this.onSetAler}
                ImgZoomVisible={this.state.ImgZoomVisible}
                index={this.state.id}
              />

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
            <TouchableHighlight onPress={this.onSetImg2} >
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