# react-native-exercise
结合react-native-Swiper，react-native-PhotoView,react-native-fs
点击图片进入一个图层，可滑动，可伸缩，可分享，可下载保存

引入：
npm install sharepanel

Then, edit myproject/index.ios.js, like this:
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native';

import Share from 'sharepanel';

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}]

class ImageViewer extends React.Component {
    render: function() {
        return (
            <Modal visible={true} transparent={true}>
                <Share 
                  imageUrls={images}
                />
            </Modal>
        )
    }
}

AppRegistry.registerComponent('myproject', () => ImageViewer);

API:               类型              说明           
sourceUrl(必填):   Array            uri数组  
index              number           起始序号
