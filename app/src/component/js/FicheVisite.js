//imports externes
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//imports locaux
import IdentiteFormulaire from "./IdentiteFormulaire";
import HabitationFormulaire from "./HabitationFormulaire";
import AdresseFormulaire from "./AdresseFormulaire";
import RangementFormulaire from "./RangementFormulaire";
import ServicesFormulaire from "./ServicesFormulaire";
import SpecExterieurPartie1Formulaire from "./SpecExterieurPartie1Formulaire";
import SpecExterieurPartie2Formulaire from "./SpecExterieurPartie2Formulaire";
import SpecInterieurFormulaire from "./SpecInterieurFormulaire";
import BarreProgression from "./BarreProgression";
import Logo from "../../assets/images/fiche_de_visite.png";

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
    taxeScolaire: "",
    taxeMunicipale: "",
    construction: "",
    typeHabitation: "",
    proprieteRevenu: "false",
    revenuMensuel: "",
    quartier: "",
    //partie adresse du formulaire
    numeroCivic: "",
    nomRue: "",
    numeroAppartement: "",
    codePostale: "",
    ageImmeuble: 0,
    bruitAmbiant: "",
    egout: "",
    eau: "",
    circulation: "",
    //partie extérieur
    fondation: "",
    revetExterieur: "",
    autreRevet: "",
    fenVitrage: "",
    fenConstruction: "",
    toiture: "",
    etatToiture: "",
    tailleTerrain: "",
    descriptTaille: "",
    //les aménagements extérieurs
    pelouse: false,
    boise: false,
    terrasseCouverte: false,
    terrasseNonCouverte: false,
    gazebo: false,
    cabanon: false,
    cloture: false,
    haie: false,
    //fin aménagements extérieurs
    piscine: "",
    chauffePiscine: "",
    stationnement: "",
    entree: "",
    orientationEnsoleil: "",
  });
  //Tableau des pages du formulaire
  const pages = [
    <IdentiteFormulaire info={info} setInfo={setInfo} />,
    <HabitationFormulaire info={info} setInfo={setInfo} />,
    <AdresseFormulaire info={info} setInfo={setInfo} />,
    <SpecExterieurPartie1Formulaire info={info} setInfo={setInfo} />,
    <SpecExterieurPartie2Formulaire info={info} setInfo={setInfo} />,
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
          <FontAwesomeIcon icon={faArrowLeft} size="3x"></FontAwesomeIcon>
        </button>

        {/* La barre de progression du formulaire */}
        <BarreProgression numPage={numPage} setNumPage={setNumPage} />

        {/* Le bouton de navigation vers la partie suivant du formulaire*/}
        <button
          className="btn-suivant"
          onClick={() => setNumPage(numPage + 1)}
          disabled={numPage >= pages.length - 1}
        >
          <FontAwesomeIcon icon={faArrowRight} size="3x"></FontAwesomeIcon>
        </button>
      </div>

      {/* La page active du formulaire */}
      {pages[numPage]}
    </div>
  );
}
