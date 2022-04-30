import { SET_PLANTES } from '../actions/plantes';

const initialState = {
	availablePlantes: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PLANTES:
			return {
				...state,
				availablePlantes: action.plantes,
			};	
	}
	return state;
};
