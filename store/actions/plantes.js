import Plante from "../../models/plante";


export const SET_PLANTES = "SET_PLANTES";

export const fetchPlantes = (nomFamille) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://192.168.1.109:8080/famille/'+nomFamille+'/plantes'
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong with fetching the data from the server!"
        );
      }
      const resData = await response.json();
      const loadedPlantes = [];
      for (const key in resData) {
        loadedPlantes.push(
          new Plante(
            resData[key].nomScientifique,
            resData[key].exigences,
            resData[key].feuillage,
            resData[key].fleurs,
            resData[key].fruits,
            resData[key].hateur,
            resData[key].multiplication,
            resData[key].nom_commun,
            resData[key].nombre_sujet,
            resData[key].origine,
            resData[key].port,
            resData[key].soins,
            resData[key].utilisations,
            resData[key].categorie,
            resData[key].famille,
            resData[key].ordre,
            resData[key].type,
            resData[key].images
          )
        );
      }
      dispatch({
        type: SET_PLANTES,
        plantes: loadedPlantes
      });
    } catch (err) {
      throw err;
    }
  };
};
