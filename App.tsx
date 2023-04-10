/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { generateTestCrash } from 'appcenter-crashes';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const [isGifLoading, setIsGifLoading] = useState(true);
  const [arr, setArr] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setIsGifLoading(false)
      console.log("Loading ...", arr[2])
      generateTestCrash()
    }, 10000);

   // clearTimeout(oneSec)
}, []);

  return (
    <View style={styles.container}>
    {isGifLoading ? <Image
        style={styles.logo} source={require('./ios/logo.gif')} /> : <View />
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#F6F6F6",
    flex: 1
  },
  logo: {
    width: 300,
    height: 100,
  },
});

export default App;
