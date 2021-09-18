import React, { useState } from "react";
import IdentiteFormulaire from "./IdentiteFormulaire";
import AdresseFormulaire from "./AdresseFormulaire";

/* Ce component s'occupe de l'affichage des différentes partie du formulaire

  Les vérifications des champs sont effectuées dans les parties respectives mais les informations 
  sont gardées dans le component FicheVisite.
*/
export default function FicheVisite() {
  //Tableau des pages du formulaire
  const pages = [<IdentiteFormulaire />, <AdresseFormulaire />];
  //dictionnaire contenant les informations du formulaire au complet
  const [info, setInfo] = useState({});
  //le numéros dans le tableau 'pages' de la page courante
  const [page, setPage] = useState(0);

  function changerPage(numPage) {
    console.log(numPage);
    setPage(numPage);
  }
  //Il faudrait avoir une façon de se déplacer entre les différentes parties du formulaire. Peut-être un bouton
  //'suivant' et 'précédent' ainsi qu'un "menu" indiquant la progression dans le formulaire et avec lequel l'utilisateur
  //pourrait se déplacer aux différentes pages du formulaire.
  return (
    <div className="fichevisite-main">
      <h3>Fiche de Visite</h3>
      {pages[page]}
      <div className="boutons-footer">
        {/* bouton pour passer à la page précédente */}
        <button
          className="btn btn-precedent"
          onClick={() => changerPage(page - 1)}
        >
          Précedent
        </button>
        {/* bouton pour passer à la page suivante */}

        <button
          className="btn btn-suivant"
          onClick={() => changerPage(page + 1)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
