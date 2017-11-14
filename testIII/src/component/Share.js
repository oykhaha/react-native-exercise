import React, {
    Component,
} from 'react';
import {
    Modal,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import {
    createIconSetFromIcoMoon,
} from 'react-native-vector-icons';
import icomoonConfig from '../../config/iconImg';

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
                    <View style ={styles.PopDialog}>
                       <View style ={styles.PopSubContainer}>
                            <Text style={styles.PopHead}>
                                选择分享方式
                            </Text>
                            <View style ={styles.PopLink}>
                                <View style ={styles.PopLinkItem}>
                                    <Icon name="wechat" size={50} color='#45E69A' />
                                    <Text style ={styles.PopLinkText}>微信朋友</Text>
                                </View>
                                <View style ={styles.PopLinkItem}>
                                    <Icon name="qq" size={50} color='#2C9EEF' />
                                    <Text style ={styles.PopLinkText}>QQ好友</Text>
                                </View>
                                <View style ={styles.PopLinkItem}>
                                    <Icon name="sina" size={50} color='#F03131' />
                                    <Text style ={styles.PopLinkText}>新浪微博</Text>
                                </View>

                            </View>
                            <Text style ={styles.PopClose} onPress={this.props.onClick}>
                                取消
                            </Text>
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
    PopDialog: {
        position: 'absolute',
        bottom: 20,
        width: width,
        height: height * 0.3,
        backgroundColor: 'white'
    },
    PopSubContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    PopHead: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    PopLink: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    PopLinkItem: {
        margin: 15
    },
    PopImg: {
        width: 50,
        height: 50
    },
    PopLinkText: {
        textAlign: 'center'
    },
    PopClose: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    }

});

export default Share;