import { Image, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from "react-native-elements/dist/icons/Icon";


import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


import Welcome from "../screens/Welcome";
import Acceuil from "../screens/Acceuil";
import Plantes from "../screens/Plantes";
import Caracteristiques from "../screens/Caracteristiques";
import Generalite from "../screens/Generalite";
import Fleur from "../screens/Fleur";
import Feuillage from "../screens/Feuillage";
import Fruit from "../screens/Fruit";
import Multiplication from "../screens/Multiplication";
import Utilisation from "../screens/Utilisation";
import Soins from "../screens/Soins";
import CodeQR from "../screens/CodeQR";
import PlusOptions from "../screens/PlusOptions";
import Camera from "../screens/Camera";
import Localisation from "../screens/Localisation";

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: "#0B5910"
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold'
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans'
	},
    headerTintColor:  "white"
};

const AcceuilStackNavigator = createStackNavigator(
    {
        WelcomeScreen:
        {
            screen: Welcome,
            navigationOptions: {
                headerShown: false
            }
        },
        AcceuilScreen:
        {
            screen: Acceuil,
            navigationOptions:{
                headerLeft: () => (
                  null
                ),
                headerTitle: "Familles"
              }
        },
        PlantesScreen:
        {
            screen: Plantes,
            navigationOptions:{
                headerTitle: "Plantes"
              },
        },
        CaracteristiquesScreen:
        {
            screen: Caracteristiques,
            navigationOptions:{
                headerTitle: "Caractéristiques"
              },
        },
        GeneraliteScreen:
        {
            screen: Generalite,
            navigationOptions: {
                headerTitle: "Généralités",
                headerShown: true,
                headerStyle: {
                  backgroundColor: "white"
                },
                headerTintColor:  "#097245" 
              },        
        },
        FeuillageScreen:{
            screen: Feuillage,
            navigationOptions:{
                headerTitle: "Feuillage"
              }
        },
        FleurScreen:{
            screen:Fleur,
            navigationOptions: {
                headerShown: true,
                headerTitle: "Fleurs"
              }
          },
        MultiplicationScreen:{
            screen:Multiplication,
            navigationOptions:{
                headerTitle: "Multiplications"
              }
        },
        UtilisationScreen:{
            screen: Utilisation,
            navigationOptions:{
                headerTitle: "Utilisations"
              }
        },
        SoinsScreen:{
            screen:Soins,
            navigationOptions:{
                headerTitle: "Soins"
              }
        },
        FruitScreen:{
            screen: Fruit,
            navigationOptions:{
                headerTitle: "Fruits"
              }
        }
    },
    {
		defaultNavigationOptions: defaultNavOptions
	}
)


const CameraStackNavigator = createStackNavigator({
    CameraScreen: {
      screen: Camera,
      navigationOptions:{
        headerTitle: "Camera"
      }
    }
});


const CodeQRStackNavigator = createStackNavigator({
    CodeQRScreen: {
      screen: CodeQR,
      navigationOptions:{
        headerTitle: "QR-Code"
      }
    }
  });



  const localisationSatckNavigator = createStackNavigator({
    LocalisationScreen: {
      screen: Localisation,
      navigationOptions:{
        headerTitle: "Localisations"
      }
    }
  }
  );


  const  PlusOptionsStackNavigator = createStackNavigator({
    LocalisationScreen: {
      screen: PlusOptions,
      navigationOptions:{
        headerTitle: "Localisations"
      }
    }
  }
  );



const tabScreenConfig = {
    AcceuilScreenConfig: {
        screen: AcceuilStackNavigator,
        navigationOptions:({navigation})=>{
            let routeName = navigation.state.routes[navigation.state.index].routeName
            if (routeName === 'WelcomeScreen') {
              return {
                tabBarVisible:false,
              };
            }
            return {
              tabBarVisible: true,
              tabBarIcon: tabInfo => {
                return (
                 <Image style={{width: 25, height: 25}} source={require('../assets/icon/home.png')}/>
                );
              },
              tabBarColor:"white",
              tabBarLabel: "Acceuil"
            };
         },
    },
    LocalisationScreenConfig: {
        screen: localisationSatckNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Image style={{width: 25, height: 25}} source={require('../assets/icon/localisation.png')}/>
            );
          },
          tabBarColor: "white",
          tabBarLabel: "Localisation"
            
        }
      },

      CameraScreenConfig:{
        screen: CameraStackNavigator,
        navigationOptions: {
          
          tabBarIcon: tabInfo => {
            return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#0BBF2F", justifyContent: 'center', alignItems: 'center' }} >
              <MaterialIcons name="photo-camera" size={45} color="white"/>
              </View>
          </View>
            );
          },
          tabBarColor: "white",
          tabBarLabel: "Camera"
        }
    },
    CodeQRScreenConfig:{
        screen: CodeQRStackNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Image style={{width: 25, height: 25}} source={require('../assets/icon/qr-code.png')}/>
            );
          },
          tabBarColor: "white",
          tabBarLabel: "CodeQR",
        
        }
    },

    PlusOptionsScreenConfig:{
        screen: PlusOptionsStackNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Icon type="material" color="black" name="more-vert"/>
            );
          },
          tabBarColor: "white",
          tabBarLabel: "PlusOptions"
        }
    }
}


const PlanteTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, { 
    activeTintColor: "white",
    shifting: true,
    barStyle: {
    borderWidth: 0.5,
    borderBottomWidth: 1,
   //   backgroundColor:'orange',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: 'transparent',
    overflow: 'hidden',
    },
    tabBarOptions: {
    showLabel: false
  }
});


export default createAppContainer(PlanteTabNavigator)


