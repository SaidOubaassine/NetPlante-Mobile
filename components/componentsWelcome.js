import React from "react";
import {Image, Text, View , StyleSheet, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const ComponentsWelcome=()=>{
return(
<View style={styles.container}>
<ImageBackground source={require('../assets/images/back.jpg')} resizeMode="stretch" style={styles.imageBack}>
     <MaterialIcons name="chevron-left" size={25} color="#FA9005" style={styles.chevronleft} />
         <Image
             style={styles.logo}
             source={require('../assets/images/logo.svg')}
          />
     <MaterialIcons name="chevron-right" size={25} color="#FA9005" style={styles.chevronright} />
         <Text style={styles.text1}>Netplant-arboretum</Text>
         <Text style={styles.text2}>les plantes avec les yeux de technologie</Text>
</ImageBackground>
</View>
)
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
    },
    logo: {
      width: 40,
      height: 40,
    },
    imageBack: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
      },
      text1:{
          color: "green",
          fontSize: 40,
          fontFamily: 'Tangerine-Bold'
      },
      text2:{
        color: '#FA9005',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        margin: 1,
        top: 5
      },
      chevronleft: {
          right: 30,
          transform: [{ rotate: '45deg'}]
      },
      chevronright:{
          left: 30,
          transform: [{ rotate: '45deg'}]
      }
  });

export default ComponentsWelcome

