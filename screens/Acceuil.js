import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, View, Button, Platform, StyleSheet, ActivityIndicator, Alert, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import base64 from "react-native-base64";
import Colours from "../constants/Colours";
import {SearchBar } from "react-native-elements";
import GridItem from '../components/GridItem';
import * as famillesActions from '../store/actions/familles';





const Acceuil = (props) => {
    const [ isLoading, setIsLoading ] = useState(false);
	const [ onRefreshing, setOnRefreshing ] = useState(false);
	const [ error, setError ] = useState(false);
	const familles = useSelector((state) => state.familles.availableFamilles);
	const dispatch = useDispatch();

	const loadFamilles= useCallback(
        async ()=>{
            setError(null);
			setOnRefreshing(true);
			try {
				await dispatch(famillesActions.fetchFamilles());
			} catch (err) {
				setError(err.message);
			}
			setOnRefreshing(false);
		},
		[ dispatch ]
    );
	
    useEffect(
		() => {
			const willFocusEvent = props.navigation.addListener('willFocus', loadFamilles);
			return () => willFocusEvent.remove();
           
		},
		[ loadFamilles]
	);

	// This is also needed to fire loadProducts initially!
	useEffect(
		() => {
			setIsLoading(true);
			loadFamilles().then(() => setIsLoading(false));
		},
		[ dispatch, loadFamilles ]
	);


	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button title="Try again" onPress={loadFamilles} color={Colours.chocolate} />
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

	if (!isLoading && familles.length === 0) {
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
  onRefresh={loadFamilles}
  refreshing={onRefreshing}
  data={familles}
  keyExtractor={(item) => item.nomFamille}
  numColumns={2}
  renderItem={(itemData) => (
            <GridItem 
            widthImage={150}
            heightImage={150}
            widthCard={150} 
            height={150} 
            titre={itemData.item.nomFamille} 
            image={itemData.item.image}  
            onSelect={() => {
                props.navigation.navigate({
                  routeName: "PlantesScreen",
                  params: {
                    nomFamille: itemData.item.nomFamille
                  }
                });
              }}
             />
  )}
  />
    </View>
);};



const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Acceuil;
