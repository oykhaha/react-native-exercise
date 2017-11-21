import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import Shareimg from './sharepanel';

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://ooo.0o0.ooo/2017/03/31/58de0e9b287f6.jpg'
}, {
    url: 'https://ooo.0o0.ooo/2017/03/31/58de0e9b28328.jpg'
}]
const index =1;
export default class test extends Component {
  render(){
    return(
     <View style={styles.main}>

        <Shareimg
           sourceUrl={images}
        />
         {/*<Image
           source={{uri: images[1].url}}
           style={{width:100,height:100}}
         />*/}


     </View>
    );
  }
}

const styles = StyleSheet.create({
    main:{
      height:200,
      width:200
    }
});