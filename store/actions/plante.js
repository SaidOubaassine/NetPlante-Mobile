import Plante from "../../models/plante";


export const SET_PLANTE = "SET_PLANTE";

export const fetchPlante = (nomScientifique) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://netplantearboretum.herokuapp.com/plante/'+nomScientifique
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong with fetching the data from the server!"
        );
      }
      const resData = await response.json();
      const loadedPlante = [];

      for (const key in resData) {
        loadedPlante.push(
            resData[key]
          )
      }
      
      dispatch({
        type: SET_PLANTE,
        plante: loadedPlante
      });
    } catch (err) {
      throw err;
    }
  };
};
