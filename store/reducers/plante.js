import { SET_PLANTE } from '../actions/plante';

const initialState = {
	dataPlante:[]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PLANTE:
			return {
				...state,
				dataPlante: action.plante,
			};	
	}
	return state;
};
