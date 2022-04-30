import Famille from "../../models/famile";

export const SET_FAMILLES = "SET_FAMILLES";

export const fetchFamilles = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://192.168.1.109:8080/famille"
      )

      
      const resData = await response.json();
      const loadedFamilles = [];

      for (const key in resData) {
        loadedFamilles.push(
          new Famille(
            resData[key].nomFamille,
            resData[key].image,
            resData[key].plantes,
          )
        );
      }
      dispatch({
        type: SET_FAMILLES,
        familles: loadedFamilles,
      });
    } catch (err) {
      throw err;
    }
  };
};
