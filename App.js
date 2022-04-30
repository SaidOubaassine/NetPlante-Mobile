import React from 'react';
import 'react-native-gesture-handler';
import { combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { legacy_createStore as createStore} from 'redux';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import PlanteNavigator from './navigation/planteNavigator';
import famillesReducer from './store/reducers/familles';
import plantesReducer from './store/reducers/plantes';
import planteReducer from './store/reducers/plante';



const rootReducer = combineReducers({
familles : famillesReducer,
plantes: plantesReducer,
plante: planteReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));




export default props => {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
		"Roboto-Bold": require("./assets/Fonts/Roboto-Bold.ttf"),
		"Tangerine-Bold":require("./assets/Fonts/Tangerine-Bold.ttf"),
		"Oswald-bold": require("./assets/Fonts/Oswald-Bold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
  <Provider store={store}>
    <PlanteNavigator/>
  </Provider>
  );

  }



