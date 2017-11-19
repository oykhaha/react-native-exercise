import React, {
  Component,
} from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  createIconSetFromIcoMoon,
} from 'react-native-vector-icons';
import icomoonConfig from '../../config/iconImg';
import RNFS from 'react-native-fs';

let Dimensions = require('Dimensions');
let {
  width,
  height
} = Dimensions.get('window')

const Icon = createIconSetFromIcoMoon(icomoonConfig);

const imgList = [
  'https://avatars2.githubusercontent.com/u/7685233?v=3&s=460',
  'https://ooo.0o0.ooo/2017/03/31/58de0e9b287f6.jpg',
  'https://ooo.0o0.ooo/2017/03/31/58de0e9b28328.jpg'
]

class Share extends Component {
  static propTypes = {
        // modalVisible: PropTypes.string.isRequired,
  }
  handledownload = () => {
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.jpg`;
    const formUrl = imgList[this.props.index];
    const downloadFileOptions = {
            fromUrl:formUrl, // URL to download file from
            toFile:downloadDest, // Local filesystem path to save the file to
            begin:(res)=>{
              console.log('begin', res);
              console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress:(res)=>{
              let pro = res.bytesWritten / res.contentLength;
              this.setState({
                progressNum: pro,
              });
            }
          };

          try{
           const ret = RNFS.downloadFile(downloadFileOptions);
           ret.promise
           .then(res =>{
              console.log('success', res);
              console.log('file://' + downloadDest)
            })
           .catch(err =>{
               console.log('err', err);
            });
           } catch(e) {
              console.log(error);
             }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.ShareVisible}
        transparent={true}
        onRequestClose={() => {alert("Modal has been closed.")}}
      >
        <View style ={styles.PopContainer}>
          <Text onPress={this.props.onClick} style={styles.touchabale}></Text>
          <View style ={styles.PopDialog}>
            <View style ={styles.PopSubContainer}>

              <View style ={styles.PopLink}>
                <View style ={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="wechat"
                      color="#45E69A"
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.PopLinkText}>微信</Text>
                </View>

                <View style={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="qq"
                      color="#2C9EEF"
                      style={styles.icon}
                    />
                 </View>
                 <Text style={styles.PopLinkText}>QQ好友</Text>
                </View>

                <View style={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="sina"
                      color="#F03131"
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.PopLinkText}>新浪</Text>
                </View>

                <View style={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="github"
                      color="#3F3737"
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.PopLinkText}>github</Text>
                </View>
              </View>

              <View style={styles.otheroption}>
                <View style={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="link"
                      style={styles.funcicon}
                    />
                  </View>
                  <Text style={styles.PopLinkText}>链接</Text>
                </View>

                <View style={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="report"
                      style={styles.funcicon}
                    />
                  </View>
                  <Text style ={styles.PopLinkText}>举报</Text>
                </View>

                <View style={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="download"
                      style={styles.funcicon}
                      onPress={this.handledownload}
                    />
                  </View>
                  <Text style ={styles.PopLinkText}>保存</Text>
                </View>

                <View style ={styles.PopLinkItem}>
                  <View style={styles.iconview}>
                    <Icon
                      name="mail4"
                      style={styles.funcicon}
                    />
                  </View>
                  <Text style={styles.PopLinkText}>邮件</Text>
                </View>
              </View>

              <View style={styles.closeview}>
                <Text
                  style={styles.popClose}
                  onPress={this.props.onClick}>
                  取消
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  PopContainer: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    width: width,
    height: height,
  },
  touchabale: {
    height: height * 0.7,
    width: width,
    position: 'absolute',
    top: 0,
  },
  PopDialog: {
    position: 'absolute',
    bottom: 20,
    width: width,
    height: height * 0.37,
     backgroundColor: 'white'
  },
  PopSubContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  PopLink: {
    flexDirection: 'row',
    height: height * 0.15,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor:'#F6F0F0',
    width: width
  },
  otheroption: {
    flexDirection: 'row',
    height: height * 0.15,
    width: width,
    position: 'absolute',
    top: height * 0.15,
    alignItems: 'center',
  },
  iconview: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
        fontSize:36
  },
  funcicon:{
    fontSize:32
  },
  PopLinkItem: {
    marginTop: 5,
    width:width*0.25,
    alignItems: 'center',
  },
  PopLinkText: {
    textAlign: 'center',
    padding: 5,
    fontSize:12
  },
  closeview: {
    position: 'absolute',
    bottom: 0,
    width: width * 1,
    height: height * 0.07,
    backgroundColor: '#FFFFFF'
  },
  popClose: {
    fontSize: 18,
    margin: 7,
    textAlign: 'center',
  }
});

export default Share;