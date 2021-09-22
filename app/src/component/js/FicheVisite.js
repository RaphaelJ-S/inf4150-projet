import React, { useState } from "react";
import IdentiteFormulaire from "./IdentiteFormulaire";
import AdresseFormulaire from "./AdresseFormulaire";
import {Button} from "react-bootstrap";
import Logo from "../../assets/images/fiche_de_visite.png";


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
      <div className="text-center">
      <img
          className="mb-4"
          src={Logo}
          alt="logo"
          width="270"
          height="150"
      />{" "}
      </div>
      {pages[page]}
      <div className="text-center">

        {/* bouton pour passer à la page précédente */}
        <Button variant="outline-danger"
                className="btn btn-precedent"
                onClick={() => changerPage(page - 1)}
        >
          Précedent
        </Button>
        {/* bouton pour passer à la page suivante */}
        <Button variant="outline-success"
                className="btn btn-suivant"
                onClick={() => changerPage(page + 1)}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}
