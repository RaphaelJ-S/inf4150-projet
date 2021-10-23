import React from "react";
import {Form,Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { setNumPage, numPage} from "./FicheVisite";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";


export default function RangementFormulaire({info}) {

    const propARevenu = info.proprieteRevenu === "true";
    
    console.log(info);
    return (
        <main className="form-export">
            <div className="form-title">
                Fiche de Visite
            </div>
            <div className="form-body">
                <hr></hr>
                <div className="form-subtitle">
                    Information personnel
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        <li>
                        Adresse: {info.adresse}
                        </li>
                        <li>
                        Courtier: {info.courtier}
                        </li>
                        <li>
                        Telephone: {info.telephone}
                        </li>
                        <li>
                        Cellulaire: {info.cellulaire}
                        </li>
                        <li>
                        email: {info.email}
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Information sur la maison
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        <li>
                            Prix demandé: {info.prixDemande}
                        </li>
                        <li>
                            Évaluation municipale: {info.evalMunicipale}
                        </li>
                        <li>
                           Taxe Scolaire: {info.taxeScolaire}
                        </li>
                        <li>
                            Taxe Municipale: {info.taxeMunicipale}
                        </li>
                        <li>
                            Construction: {info.construction}
                        </li>
                        <li>
                            Type d'habitation: {info.typeHabitation}
                        </li>
                        <li>
                        {propARevenu
                            ? <span>Propriété a revenu: Oui
                                <ul><li>Revenu Mensuel: {info.revenuMensuel}</li></ul>
                                </span>
                            : <span>Propriété a revenu: Non</span>
                        }
                        </li>
                        <li>
                            Quartier : {info.quartier}
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Adresse de la maison
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        <li>
                            Numéro Civic: {info.numeroCivic}
                        </li>
                        <li>
                            Nom de la rue: {info.nomRue}
                        </li>
                        <li>
                            Numéro de l'appartement (si applicable): {info.numeroAppartement}
                        </li>
                        <li>
                            Code postale: {info.codePostal}
                        </li>
                        <li>
                            Âge de l'immeuble: {info.ageImmeuble}
                        </li>
                        <li>
                            Bruit ambiant: {info.bruitAmbiant}
                        </li>
                        <li>
                            Égout: {info.egout}
                        </li>
                        <li>
                            Eau : {info.eau}
                        </li>
                        <li>
                            Circulation : {info.circulation}
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Extérieur de la maison
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        <li>
                            Fondation: {info.fondation}
                        </li>
                        <li>
                            Revêtement extérieur: {info.revetExterieur === "autre" ? <span>{info.autreRevet}</span> : <span>{info.revetExterieur}</span>}
                        </li>
                        <li>
                            Numéro de l'appartement (si applicable): {info.numeroAppartement}
                        </li>
                        <li>
                            Fenêtre, vitrage: {info.fenVitrage}
                        </li>
                        <li>
                            Fenêtre, construction: {info.fenConstruction}
                        </li>
                        <li>
                            Âge de la toiture: {info.toiture}
                        </li>
                        <li>
                            État de la toiture: {info.etatToiture}
                        </li>
                        <li>
                            Taille du terrain : {info.descriptTaille}, {info.tailleTerrain} mètres carrés
                        </li>
                        <li>
                            Aménagement extérieur : 
                                <ul>
                                    {info.pelouse && <li>Pelouse</li>}
                                    {info.boise && <li>Boisé</li>}
                                    {info.terrasseCouverte && <li>Terrasse Couverte</li>}
                                    {info.terrasseNonCouverte && <li>Terrasse non Couverte</li>}
                                    {info.gazebo && <li>Gazebo</li>}
                                    {info.cabanon && <li>Cabanon</li>}
                                    {info.cloture && <li>Cloture</li>}
                                    {info.haie && <li>Haie</li>}
                                </ul>
                        </li>
                        <li>
                            Piscine: {info.piscine}
                        </li>
                        {!(info.piscine === "" || info.piscine === "aucune") && <li>Piscine chauffé: {info.chauffePiscine}</li> }
                        <li>
                            Type de stationnement: {info.typeStationnement}
                        </li>
                        <li>
                            Nombre de place de stationnement: {info.nombreStationnement}
                        </li>
                        <li>
                            Type d'entrée: {info.entree}
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Ensoillement de la maison
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        <li>
                            Nombre de pièces ensoleillées en AM: {info.interieurAMsoleil}
                        </li>
                        <li>
                            Nombre de pièces ensoleillées en PM: {info.interieurPMsoleil}
                        </li>
                        <li>
                            Extérieur avant ensoleillées en AM: {info.exterieurDevantSoleilAM ? 'Oui' : 'Non'}
                        </li>
                        <li>
                            Extérieur avant ensoleillées en PM: {info.exterieurDevantSoleilPM ? 'Oui' : 'Non'}
                        </li>
                        <li>
                            Extérieur arrière en AM: {info.exterieurArriereSoleilAM ? 'Oui' : 'Non'}
                        </li>
                        <li>
                            Extérieur arrière ensoleillées en AM: {info.exterieurArriereSoleilPM ? 'Oui' : 'Non'}
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Intérieur de la maison
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        <li>
                            Superficie habitable: {info.superficieHab}
                        </li>
                        <li>
                            Indice d'isolation sous-sol: {info.isolationSousSol}
                        </li>
                        <li>
                            Indice d'isolation murs: {info.isolationMurs}
                        </li>
                        <li>
                            Indice d'isolation plafonds: {info.isolationPlafonds}
                        </li>
                        <li>
                            Chauffe-eau: {info.chauffeEau}
                        </li>
                        <li>
                            Système électrique: {info.sysElectrique === "autre" ? <span>{info.sysElectriqueAutre}</span> : <span>{info.sysElectrique}</span>}
                        </li>
                        <li>
                            Type de chauffage: {info.chauffage}
                        </li>
                        <li>
                            Fournaise: {info.fournaise}
                        </li>
                        <li>
                            Ventilateur-récupérateur de chaleur: {info.recuperateur}
                        </li>
                        <li>
                            Climatisation: {info.climatisation}
                        </li>
                        <li>
                            Aménagement extérieur : 
                                <ul>
                                    {info.securiteAlarme && <li>Alarmes</li>}
                                    {info.securiteDetecteur && <li>Détecteurs de fumée</li>}
                                    {info.securiteExtincteur && <li>Extincteur</li>}
                                </ul>
                        </li>
                        <li>
                            Nombre de pièce: {info.nbrPieces}
                        </li>
                        <li>
                            Nombre de chambres à coucher:
                                <ul>
                                    <li>
                                        Rez-de-chaussée: {info.nbrChambreRDC}
                                    </li>
                                    <li>
                                        Étage: {info.nbrChambreEtage}
                                    </li>
                                    <li>
                                        Sous-sol: {info.nbrChambreSS}
                                    </li>
                                </ul>
                        </li>
                        <li>
                            Chambre à coucher principale avec salle de bain: {info.doucheBainPrincipale || info.baignoireBainPrincipale ?  
                            <ul>
                                <li>
                                    Douche: {info.doucheBainPrincipale ? 'Oui' : 'Non'} 
                                </li>
                                <li>
                                    Bain: {info.baignoireBainPrincipale ? 'Oui' : 'Non'} 
                                </li>
                            </ul>
                            : 'Non'}
                        </li>
                        <li>
                            Nombre de salle de toilette: {info.nbrSalleEauToilette}
                        </li>
                        <li>
                            Nombre de salle de bain: {info.nbrSalleEauBain}
                        </li>
                        <li>
                            Nombre de laverie: {info.laverie}
                        </li>
                        <li>
                            Salle à manger: {info.salleManger}
                        </li>
                        <li>
                            Salon: {info.salon}
                        </li>
                        <li>
                            Foyer: {info.foyer}
                        </li>
                        <li>
                            Poêle: {info.poele}
                        </li>
                        <li>
                            Espace de bureau: {info.espaceBureau}
                        </li>
                        <li>
                            État du sous-sol: {info.sousSol}
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Service à proximité
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        {info.proximite.map(item =>
                            <li key={item.id}> {item.valeur}, distance: {item.distance}</li>
                            )}
                    </ul>
                </div>
                <hr></hr>
                <div className="form-subtitle">
                    Autres informations
                </div>
                <div className="form-field">
                    <ul className="form-list">
                        {info.inclus.map(item =>
                            <li key={item.id}> {item.valeur}<ul><li> Description: {item.description}</li></ul></li>
                            )}
                        <li>
                            Date d'occupation: {info.dateOccupation}
                        </li>
                        <li>
                            Rangement suffisant:
                            <ul>
                                <li>
                                    Rez-de-chaussée: {info.rezDeChausse}
                                </li>
                                <li>
                                    Cuisine: {info.Cuisine}
                                </li>
                                <li>
                                    Premier étage: {info.PEtage}
                                </li>
                                <li>
                                    Deuxième étage: {info.DEtage}
                                </li>
                                <li>
                                    Sous-sol: {info.sousSol}
                                </li>
                            </ul>        
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}