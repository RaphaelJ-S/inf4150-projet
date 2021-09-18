import React, { useState } from "react";
import IdentiteFormulaire from "./IdentiteFormulaire";
import AdresseFormulaire from "./AdresseFormulaire";

/* Ce component s'occupe de l'affichage des différentes partie du formulaire

  Les vérifications des champs sont effectuées dans les parties respectives mais les informations 
  sont gardées dans le component FicheVisite.
*/
export default function FicheVisite() {
  //Contient les différentes pages du formulaire
  //dictionnaire contenant les informations du formulaire au complet
  const [info, setInfo] = useState({});
  //la page courante
  const [page, setPage] = useState(0);

  //Il faudrait avoir une façon de se déplacer entre les différentes parties du formulaire. Peut-être un bouton
  //'suivant' et 'précédent' ainsi qu'un "menu" indiquant la progression dans le formulaire et avec lequel l'utilisateur
  //pourrait se déplacer aux différentes pages du formulaire.
  return (
    <div className="fichevisite-main">
      <h3>Fiche de Visite</h3>
      {page === 0 && <IdentiteFormulaire />}
      {page === 1 && <AdresseFormulaire />}
      <button class="btn btn-suivant" onClick={() => setPage(1)}>
        Suivant
      </button>
    </div>
  );
}
