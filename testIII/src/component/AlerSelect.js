import React, {
    Component
} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Modal,
    Text,
    TouchableHighlight
} from 'react-native';
import DownloadFile from './Download';

let {
    width,
    height
} = Dimensions.get('window');

class AlerSelect extends React.Component {
    downloadImg() {

    }
    render() {
        return (
            <Modal
             visible={this.props.AlerVisible}
             transparent={true}
             animationType="slide"
             onRequestClose={() => {alert("Modal has been closed.")}}
            >
               <View style={styles.maincontainer}>
               <Text onPress={this.props.onClick} style={styles.touchabale}></Text>
                  <View style={styles.subcontainer}>
                   <Text onPress={this.props.onPop}  style={styles.AlerText}>发送给朋友</Text>
                   <Text style={styles.AlerText}>举报</Text>
                   <DownloadFile
                     imgIndex={this.props.index}
                   />
                   <Text onPress={this.props.onClick} style={styles.AlerText}>取消</Text>

                 </View>



               </View>

            </Modal>



        );

    }
}

const styles = StyleSheet.create({
    maincontainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1E1C1C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchabale: {
        height: height * 0.7,
        width: width,
        position: 'absolute',
        top: 0,
    },
    subcontainer: {
        position: 'absolute',
        bottom: 0,
        height: height * 0.3,
        width: width * 1,
        backgroundColor: '#F9F4F4',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    AlerText: {
        margin: 10

    }
});

export default AlerSelect;