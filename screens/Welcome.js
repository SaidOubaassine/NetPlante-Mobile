import React, {useEffect} from "react";
import ComponentsWelcome from "../components/componentsWelcome";

const Welcome=({navigation})=>{

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AcceuilScreen');
          }, 2500)
      },
);
  
   
    return(
        <ComponentsWelcome/>
    );  
}

export default Welcome

       

