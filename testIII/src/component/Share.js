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
                                <View style ={styles.PopLinkItemfirst}>
                                    <View style={styles.iconview}>
                                        <Icon name="wechat"  color='#45E69A' style={styles.icon} />
                                    </View>
                                    <Text style ={styles.PopLinkText}>微信</Text>
                                 </View>

                                <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                    <Icon name="qq"  color='#2C9EEF' style={styles.icon} />
                                   </View>
                                    <Text style ={styles.PopLinkText}>QQ</Text>
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
                                <View style ={styles.PopLinkItemlast}>
                                    <View style={styles.iconview}>
                                    <Icon name="mail4"  color='#DF2121' style={styles.icon} />
                                    </View>
                                    <Text style ={styles.PopLinkText}>邮件</Text>
                                </View>

                            </View>


                            <View style={styles.otheroption}>
                                <View style ={styles.PopLinkItemfirst}>
                                   <View style={styles.iconview}>
                                     <Icon name="attachment" style={styles.icon} />
                                   </View>
                                   <Text style ={styles.PopLinkText}>链接</Text>
                                </View>
                                <View style ={styles.PopLinkItem}>

                                     <DownloadFile
                                       index={this.props.index}
                                     />

                                   <Text style ={styles.PopLinkText}>下载</Text>
                                </View>
                               <View style ={styles.PopLinkItem}>
                                   <View style={styles.iconview}>
                                     <Icon name="cross" style={styles.icon} />
                                   </View>
                                   <Text style ={styles.PopLinkText}>举报</Text>
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
    },

    iconview: {
        height: 55,
        width: 55,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        fontSize: 40
    },
    PopLinkItemfirst: {
        marginLeft: (width - 275) / 6,
        marginTop: 5,
        marginRight: (width - 275) / 12
    },
    PopLinkItem: {
        marginHorizontal: (width - 275) / 12,
        marginTop: 5,
        alignItems: 'center',

    },
    PopLinkItemlast: {
        marginRight: (width - 275) / 6,
        marginLeft: (width - 275) / 12,
        marginTop: 5,
    },
    PopLinkText: {
        textAlign: 'center',
        padding: 5
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