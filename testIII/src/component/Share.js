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
import DownloadFile from './Download';

let Dimensions = require('Dimensions');
let {
    width,
    height
} = Dimensions.get('window')

const Icon = createIconSetFromIcoMoon(icomoonConfig);

class Share extends Component {

    static propTypes = {
        // modalVisible: PropTypes.string.isRequired,
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
                                        <Icon name="wechat"  color='#45E69A' style={styles.icon} />
                                    </View>
                                    <Text style ={styles.PopLinkText}>微信</Text>
                                 </View>

                                <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                    <Icon name="qq"  color='#2C9EEF' style={styles.icon} />
                                   </View>
                                    <Text style ={styles.PopLinkText}>QQ好友</Text>
                                </View>
                                <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                    <Icon name="sina"  color='#F03131' style={styles.icon} />
                                   </View>
                                    <Text style ={styles.PopLinkText}>新浪</Text>
                                </View>
                                <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                    <Icon name="github"  color='#3F3737' style={styles.icon} />
                                   </View>
                                    <Text style ={styles.PopLinkText}>github</Text>
                                </View>


                            </View>


                            <View style={styles.otheroption}>
                                <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                     <Icon name="link" style={styles.funcicon} />
                                   </View>
                                   <Text style ={styles.PopLinkText}>链接</Text>
                                </View>

                               <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                     <Icon name="report" style={styles.funcicon} />
                                   </View>
                                   <Text style ={styles.PopLinkText}>举报</Text>
                                </View>
                                 <View style ={styles.PopLinkItem}>
                                     <DownloadFile
                                       index={this.props.index}
                                     />
                                   <Text style ={styles.PopLinkText}>保存</Text>
                                </View>
                                <View style ={styles.PopLinkItem}>
                                    <View style={styles.iconview}>
                                    <Icon name="mail4"  style={styles.funcicon} />
                                    </View>
                                    <Text style ={styles.PopLinkText}>邮件</Text>
                                </View>
                            </View>
                            <View style={styles.closeview}>
                               <Text style ={styles.PopClose} onPress={this.props.onClick}>
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
        height: height * 0.5,
        backgroundColor: 'white'
    },
    PopSubContainer: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    PopLink: {
        flexDirection: 'row',
        height: height * 0.21,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor:'#F6F0F0',
        justifyContent:'space-around',
        width: width

    },
    otheroption: {
        flexDirection: 'row',
        flex: 1,
        height: height * 0.21,
        width: width,
        position: 'absolute',
        top: height * 0.21,
        alignItems: 'center',
        justifyContent:'space-around'
    },

    iconview: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        fontSize: 35
    },
    funcicon:{
        fontSize:32
    },

    PopLinkItem: {
        marginTop: 5,
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
        height: height * 0.08,
        backgroundColor: '#FFFFFF'
    },
    PopClose: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',

    }

});

export default Share;