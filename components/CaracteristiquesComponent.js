import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import base64 from "react-native-base64";

const GridItem=(props)=>{
    return(
<View style={styles.container}>
<View  style={{...styles.card, ...{backgroundColor: props.backColor, width: props.widthCard, height: props.heightCard}}}>
    <TouchableOpacity style={{flex: 1}} onPress={props.onSelect}>
       <View style={styles.containerImage}>
       <Image 
     style={{width: props.widthImage, height: props.heightImage}}
     source={props.image}
       />
       </View>
    </TouchableOpacity>
</View>
<View style={styles.containerTitre}>
    <Text style={styles.titreStyle}>{props.titre}</Text>
</View>
</View>

    )
}

export default GridItem


const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
        borderRadius: 5,
        elevation: 7,
        overflow: 'hidden'
    },
     
    containerImage:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
    },

    containerTitre: {
         marginTop: 10
    },
    titreStyle: {
     //   fontFamily: 'open-sans-bold',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 25
    }
})
  