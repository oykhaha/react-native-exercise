import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import RNFS from 'react-native-fs';
import {
    createIconSetFromIcoMoon,
} from 'react-native-vector-icons';
import icomoonConfig from '../../config/iconImg';


const Icon = createIconSetFromIcoMoon(icomoonConfig);
const imgList = [
    'https://avatars2.githubusercontent.com/u/7685233?v=3&s=460',
    'https://ooo.0o0.ooo/2017/03/31/58de0e9b287f6.jpg',
    'https://ooo.0o0.ooo/2017/03/31/58de0e9b28328.jpg'
]

export default class DownloadFile extends Component {
    handledownload = () => {
        const downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.jpg`;
        const formUrl = imgList[this.props.index];
        const DownloadFileOptions = {
            fromUrl: formUrl, // URL to download file from
            toFile: downloadDest, // Local filesystem path to save the file to
            begin: (res) => {
                console.log('begin', res);
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {

                let pro = res.bytesWritten / res.contentLength;

                this.setState({
                    progressNum: pro,
                });
            }
        };

        try {
            const ret = RNFS.downloadFile(DownloadFileOptions);
            ret.promise.then(res => {
                console.log('success', res);
                console.log('file://' + downloadDest)

            }).catch(err => {
                console.log('err', err);
            });
        } catch (e) {
            console.log(error);
        }
    }
    render() {
        return (
            <View style={styles.iconview}>
                <Icon name="download"  color='#3F3737' style={styles.funcicon} onPress={this.handledownload} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconview: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    funcicon: {
        fontSize: 35
    },
});