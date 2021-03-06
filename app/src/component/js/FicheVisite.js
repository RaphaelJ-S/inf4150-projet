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
import EnsoleillementFormulaire from "./EnsoleillementFormulaire";
import SpecInterieurPartie1Formulaire from "./SpecInterieurPartie1Formulaire";
import SpecInterieurPartie2Formulaire from "./SpecInterieurPartie2Formulaire";
import SpecInterieurPartie3Formulaire from "./SpecInterieurPartie3Formulaire";
import OccupationEtInclusFormulaire from "./OccupationEtInclusFormulaire";
import BarreProgression from "./BarreProgression";
import Logo from "../../assets/images/fiche_de_visite.png";
import PageResultat from "./PageResultat";

/* Ce component s'occupe de l'affichage des différentes partie du formulaire

  Les vérifications des champs sont effectuées dans les parties respectives mais les informations 
  sont gardées dans le component FicheVisite.
*/
export default function FicheVisite() {
  //dictionnaire contenant les informations du formulaire au complet
  const [info, setInfo] = useState({
    // différents champs pour valider chaque formulaire
    validated: false,
    validatedId: false,
    validatedHab: false,
    validatedAdd: false,
    validatedSpecEx1: false,
    validatedSpecEx2: false,
    validatedSoleil: false,
    validatedSpecInt1: false,
    validatedSpecInt2: false,
    validatedSpecInt3: false,
    validatedService: false,
    validatedOcc: false,
    validatedRang: false,
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
    proprieteRevenu: false,
    revenuMensuel: "",
    quartier: "",

    //partie adresse du formulaire
    numeroCivic: "",
    nomRue: "",
    numeroAppartement: "",
    codePostal: "",
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

    // subliste : les aménagements extérieurs
    pelouse: false,
    boise: false,
    terrasseCouverte: false,
    terrasseNonCouverte: false,
    gazebo: false,
    cabanon: false,
    cloture: false,
    haie: false,
    //fin subliste : aménagements extérieurs
    piscine: "",
    chauffePiscine: "",
    typeStationnement: "",
    nombreStationnement: "0",
    entree: "",
    //subliste : ensoleillement
    interieurAMsoleil: "",
    interieurPMsoleil: "",
    exterieurDevantSoleilAM: false,
    exterieurDevantSoleilPM: false,
    exterieurArriereSoleilAM: false,
    exterieurArriereSoleilPM: false,
    //fin subliste : ensoleillement

    //partie intérieur
    superficieHab: "",
    isolationSousSol: "",
    isolationMurs: "",
    isolationPlafonds: "",
    typeChauffeEau: "",
    chauffeEau: "",
    sysElectrique: "",
    sysElectriqueAutre: "",
    chauffage: "",
    fournaise: "",
    recuperateur: "",
    climatisation: "",
    securiteAlarme: false,
    securiteDetecteur: false,
    securiteExtincteur: false,
    nbrPieces: "",
    nbrChambreRDC: "0",
    nbrChambreEtage: "0",
    nbrChambreSS: "0",
    bainPrincipale: "non",
    doucheBainPrincipale: false,
    baignoireBainPrincipale: false,
    nbrSalleEauToilette: "0",
    nbrSalleEauBain: "0",
    laverie: "0",
    salleManger: "",
    salon: "",
    foyer: "",
    poele: "",
    espaceBureau: "",
    sousSol: "",

    // À proximité
    proximite: [{ id: 0, valeur: "", distance: "" }],

    //Date Occupation
    dateOccupation: "",

    //meubles inclus
    inclus: [{ id: 0, valeur: "", description: "" }],

    //rangement suffisant
    rezDeChausse: "",
    Cuisine: "",
    PEtage: "",
    DEtage: "",
    sousSol: "",
  });

  //le numéros dans le tableau 'pages' de la page  courante
  const [numPage, setNumPage] = useState(0);

  //Tableau des pages du formulaire
  const pages = [
    <IdentiteFormulaire info={info} setInfo={setInfo} />,
    <HabitationFormulaire info={info} setInfo={setInfo} />,
    <AdresseFormulaire info={info} setInfo={setInfo} />,
    <SpecExterieurPartie1Formulaire info={info} setInfo={setInfo} />,
    <SpecExterieurPartie2Formulaire info={info} setInfo={setInfo} />,
    <EnsoleillementFormulaire info={info} setInfo={setInfo} />,
    <SpecInterieurPartie1Formulaire info={info} setInfo={setInfo} />,
    <SpecInterieurPartie2Formulaire info={info} setInfo={setInfo} />,
    <SpecInterieurPartie3Formulaire info={info} setInfo={setInfo} />,
    <ServicesFormulaire info={info} setInfo={setInfo} />,
    <OccupationEtInclusFormulaire info={info} setInfo={setInfo} />,
    <RangementFormulaire
      info={info}
      setInfo={setInfo}
      numPage={numPage}
      setNumPage={setNumPage}
    />,
    <PageResultat info={info} />,
  ];

  return (
    <div className="std-page-container">
      <div className="fichevisite-main">
        {/* Le logo du formulaire */}
        <div className="text-center">
          <img
            className="mb-4"
            src={Logo}
            alt="logo"
            width="270"
            height="150"
          />{" "}
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
            disabled={numPage >= pages.length - 2 || !info.validated}
          >
            <FontAwesomeIcon icon={faArrowRight} size="3x"></FontAwesomeIcon>
          </button>
        </div>

        {/* La page active du formulaire */}
        {pages[numPage]}
      </div>
    </div>
  );
}
