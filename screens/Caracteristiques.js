import React from "react";
import {View,FlatList, StyleSheet} from "react-native";
import {CARACTERISTIQUE} from "../data/Caracteristiques";
import CaracteristiquesComponent from "../components/CaracteristiquesComponent"

const IMAGES = {
    0: require('../assets/images/Generalites.png'),
    1: require('../assets/images/Feuillage.png'),
    2: require('../assets/images/Fleurs.png'),
    3: require('../assets/images/Fruits.png'),
    4: require('../assets/images/Soins.png'),
    5: require('../assets/images/Utilisations.png'),
    6: require('../assets/images/Multiplications.png'),
  };
  

const Caracteristiques =(props)=>{
    const nomScientifique = props.navigation.getParam('nomScientifique');

const render=(itemData)=>{
    return(
    <CaracteristiquesComponent  backColor='white' widthImage={100} heightImage={100} titre={itemData.item.name}
    image={IMAGES[itemData.item.id]} heightCard={100} widthCard={100}
    onSelect={()=>{
        props.navigation.navigate({
            routeName: itemData.item.nameScreen,
            params:{
                nomScientifique: nomScientifique
            }
        })
    }}/>
    )
}
return(
    <View style={{top: 20, flex: 1}}>
   <FlatList
   data={CARACTERISTIQUE}
   renderItem={render}
   keyExtractor={(item) => item.id}
   numColumns={2}
 />
 </View>
)
}


export default Caracteristiques;

  
