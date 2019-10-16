/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Video from 'react-native-video';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Dimensions} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {


  render(){
    return(
      <View style={styles.container}>
           <Video ignoreSslError={true}  source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style = {styles.backgroundVideo}
       />
       </View> 
    );}}
    const styles = StyleSheet.create({
      container:{flex:1, backgroundColor:'#2b78e4'},
      backgroundVideo: {
        display:'flex',
        flex:1,
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
      },
    });