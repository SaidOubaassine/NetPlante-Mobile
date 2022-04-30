import { SET_FAMILLES } from '../actions/familles';

const initialState = {
	availableFamilles: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_FAMILLES:
			return {
				...state,
				availableFamilles: action.familles,
			};	
	}
	return state;
};
