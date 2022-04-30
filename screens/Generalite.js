import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, View, Button, Platform, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colours from '../constants/Colours';

import * as planteActions from '../store/actions/plante'



const Acceuil = (props) => {
    const nomScientifique = props.navigation.getParam('nomScientifique');
	const plante = useSelector((state) => state.plante.dataPlante);
	const dispatch = useDispatch();
   
    useEffect(
		() => {
            dispatch(planteActions.fetchPlante(nomScientifique));
		},
		[  ]
	);


	return (
       <View>
           <Button title='Button' onPress={()=>{
               console.log(plante)}} />
       </View>
	);
};



const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Acceuil;
