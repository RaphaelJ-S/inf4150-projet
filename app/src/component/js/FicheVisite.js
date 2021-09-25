import React, { useState } from "react";
import IdentiteFormulaire from "./IdentiteFormulaire";
import AdresseFormulaire from "./AdresseFormulaire";
import RangementFormulaire from "./RangementFormulaire";
import ServicesFormulaire from "./ServicesFormulaire";
import SpecificationsFormulaire from "./SpecificationsFormulaire";
import BarreProgression from "./BarreProgression";
import { Button } from "react-bootstrap";
import Logo from "../../assets/images/fiche_de_visite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

/* Ce component s'occupe de l'affichage des différentes partie du formulaire

  Les vérifications des champs sont effectuées dans les parties respectives mais les informations 
  sont gardées dans le component FicheVisite.
*/
export default function FicheVisite() {
  //Tableau des pages du formulaire
  const pages = [
    <IdentiteFormulaire />,
    <AdresseFormulaire />,
    <SpecificationsFormulaire />,
    <ServicesFormulaire />,
    <RangementFormulaire />,
  ];
  //dictionnaire contenant les informations du formulaire au complet
  const [info, setInfo] = useState({});
  //le numéros dans le tableau 'pages' de la page  courante
  const [numPage, setNumPage] = useState(0);

  //Il faudrait avoir une façon de se déplacer entre les différentes parties du formulaire. Peut-être un bouton
  //'suivant' et 'précédent' ainsi qu'un "menu" indiquant la progression dans le formulaire et avec lequel l'utilisateur
  //pourrait se déplacer aux différentes pages du formulaire.
  return (
    <div className="fichevisite-main">
      {/* Le logo du formulaire */}
      <div className="text-center">
        <img className="mb-4" src={Logo} alt="logo" width="270" height="150" />{" "}
      </div>

      {/* La section comprenant la page de progression et les outils de navigation du formulaire */}
      <div className="container-progres">
        {/* Le bouton de navigation vers la partie précédente du formulaire*/}
        <button
          className="btn-precedent"
          onClick={() => setNumPage(numPage - 1)}
          disabled={numPage <= 0}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="3x"></FontAwesomeIcon>
        </button>

        {/* La barre de progression du formulaire */}
        <BarreProgression numPage={numPage} />

        {/* Le bouton de navigation vers la partie suivant du formulaire*/}
        <button
          className="btn-suivant"
          onClick={() => setNumPage(numPage + 1)}
          disabled={numPage >= pages.length - 1}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            size="3x"
          ></FontAwesomeIcon>
        </button>
      </div>

      {/* La page active du formulaire */}
      {pages[numPage]}
    </div>
  );
}
