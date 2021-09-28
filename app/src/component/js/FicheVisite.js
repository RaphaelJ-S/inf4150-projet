import React, { useState } from "react";
import IdentiteFormulaire from "./IdentiteFormulaire";
import HabitationFormulaire from "./HabitationFormulaire";

import AdresseFormulaire from "./AdresseFormulaire";
import RangementFormulaire from "./RangementFormulaire";
import ServicesFormulaire from "./ServicesFormulaire";
import SpecExterieurFormulaire from "./SpecExterieurFormulaire";
import SpecInterieurFormulaire from "./SpecInterieurFormulaire";
import BarreProgression from "./BarreProgression";
import { Button } from "react-bootstrap";
import Logo from "../../assets/images/fiche_de_visite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

/* Ce component s'occupe de l'affichage des différentes partie du formulaire

  Les vérifications des champs sont effectuées dans les parties respectives mais les informations 
  sont gardées dans le component FicheVisite.
*/
export default function FicheVisite() {
  //dictionnaire contenant les informations du formulaire au complet
  const [info, setInfo] = useState({
    // partie identité du formulaire
    adresse: "",
    courtier: "",
    telephone: "",
    cellulaire: "",
    email: "",
    //partie habitation du formulaire
    prixDemande: "",
    evalMunicipale: "",
    taxeScholaire: "",
    taxeMunicipale: "",
    construction: "",
    typeHabitation: "",
    proprieteRevenu: "false",
    revenuMensuel: "",
    //partie adresse du formulaire
    bruitAmbiant: "",
    egout: "",
    eau: "",
    circulation: "",
    quartier: "",
  });
  //Tableau des pages du formulaire
  const pages = [
    <IdentiteFormulaire info={info} setInfo={setInfo} />,
    <HabitationFormulaire info={info} setInfo={setInfo} />,
    <AdresseFormulaire info={info} setInfo={setInfo} />,
    <SpecExterieurFormulaire info={info} setInfo={setInfo} />,
    <SpecInterieurFormulaire info={info} setInfo={setInfo} />,
    <ServicesFormulaire info={info} setInfo={setInfo} />,
    <RangementFormulaire info={info} setInfo={setInfo} />,
  ];

  //le numéros dans le tableau 'pages' de la page  courante
  const [numPage, setNumPage] = useState(0);

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
