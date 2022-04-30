import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, View, Button, Platform, StyleSheet, ActivityIndicator ,Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colours from '../constants/Colours';
import {SearchBar } from "react-native-elements";
import GridItem from '../components/GridItem';
import * as plantesActions from '../store/actions/plantes'



const Acceuil = (props) => {
  const nomFamille = props.navigation.getParam('nomFamille');
  const [ isLoading, setIsLoading ] = useState(false);
	const [ onRefreshing, setOnRefreshing ] = useState(false);
	const [ error, setError ] = useState(false);
	const plantes = useSelector((state) => state.plantes.availablePlantes);
	const dispatch = useDispatch();

	const loadPlantes= useCallback(
        async ()=>{
            setError(null);
			setOnRefreshing(true);
			try {
				await dispatch(plantesActions.fetchPlantes(nomFamille));
			} catch (err) {
				setError(err.message);
			}
			setOnRefreshing(false);
		},
		[ dispatch ]
    );
	
    useEffect(
		() => {
			const willFocusEvent = props.navigation.addListener('willFocus', loadPlantes);
			return () => willFocusEvent.remove();
		},
		[ loadPlantes ]
	);

	// This is also needed to fire loadProducts initially!
	useEffect(
		() => {
			setIsLoading(true);
			loadPlantes().then(() => setIsLoading(false));
		},
		[ dispatch, loadPlantes ]
	);

	

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button title="Try again" onPress={loadPlantes} color={Colours.chocolate} />
			</View>
		);
	}

	if (isLoading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" color={Colours.chocolate} />
			</View>
		);
	}

	if (!isLoading && plantes.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No products found!</Text>
			</View>
		);
	}
  return (
    <View style={{flex: 1}}>
       <SearchBar
      placeholder="Chercher les categories"
      lightTheme
      round
    //  value={searchValue}
    //  onChangeText={(text) => searchFunction(text)}
     // autoCorrect={false}
      style={{height: 25, width: 500, fontSize: 15}}
    />
<FlatList
  onRefresh={loadPlantes}
  refreshing={onRefreshing}
  data={plantes}
  keyExtractor={(item) => item.nomScientifique}
  numColumns={2}
  renderItem={(itemData) => (

        <GridItem 
            widthImage={150}
            heightImage={150}
            widthCard={150} 
            height={150} 
            titre={itemData.item.nomScientifique} 
            image={itemData.item.images[0].imgBytes}  
            onSelect={() => {
                props.navigation.navigate({
                    routeName: "CaracteristiquesScreen",
                    params: {
                      nomScientifique: itemData.item.nomScientifique
                    }
                  });
              }}
        />
  )}
/>
    </View>
)};



const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Acceuil;
