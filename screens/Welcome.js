import React, {useEffect, useState} from "react";
import { View } from "react-native";
import ComponentsWelcome from "../components/componentsWelcome";

const Welcome=({navigation})=>{
    const [showOneTimeScreen, setShowOneTimeScreen] = useState(true);
    useEffect(() => {
        if(showOneTimeScreen){
        setTimeout(() => {
            navigation.navigate('AcceuilScreen');
            setShowOneTimeScreen(false)
          }, 2500)
      }
    }
);
  
   if(showOneTimeScreen){
    return(
        <ComponentsWelcome/>
    ); 
   }
    else{
        return <View/>
    } 
}

export default Welcome

       

