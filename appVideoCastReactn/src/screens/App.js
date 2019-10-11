/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render(){
    return(
    <View style={styles.container}>
         <WebView source={{ uri: 'https://www.youtube.com/embed/6c0LA4Nb1vY' }} />
    </View>
    );}}
    const styles = StyleSheet.create({
      container:{ flex: 1, justifyContent: "center", backgroundColor:"red", height: 300},
    });