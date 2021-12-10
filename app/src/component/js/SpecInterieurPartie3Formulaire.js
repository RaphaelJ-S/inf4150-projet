import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";
import ReactTooltip from 'react-tooltip';

export default function SpecInterieurPartie1Formulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regTexteNorm = /^\D+$/;
  const regPasVide = /^.+$/;

  useEffect(() => {
    validateWholeForm();
  }, []);

  const validateWholeForm = () => {};

  const validateForm = (element) => {
    const elem_id = element.target.id;
    const error_text = element.target.nextSibling;
    switch (elem_id) {
    }
    validateWholeForm();
  };

  const resetError = (element) => {
    element.target.nextSibling.classList.remove("show-error");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleChangeBool = (event) => {
    const name = event.target.name;
    const value = !info[name];
    setInfo({ ...info, [name]: value });
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedSpecInt3}>
          {/* début nombre de salles d'eau : toilette */}
          <div className="form-floating" data-tip data-for='nbToilette'>
            <input
              type="number"
              className="form-control"
              id="nbrSalleEauToilette"
              name="nbrSalleEauToilette"
              value={info.nbrSalleEauToilette}
              onChange={handleChange}
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrSalleEauToilette">
              Salle de toilette(toilette + lavabo)
            </label>
            <ReactTooltip id='nbToilette' type='error'>
              <span>Le nombre salle de bain avec toilette dans la résidence</span>
            </ReactTooltip>
          </div>
          {/* fin nombre de salles d'eau : toilette */}

          {/* début nombre de salles d'eau : bains */}
          <div className="form-floating" data-tip data-for='nbBain'>
            <input
              type="number"
              className="form-control"
              id="nbrSalleEauBain"
              name="nbrSalleEauBain"
              value={info.nbrSalleEauBain}
              onChange={handleChange}
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrSalleEauBain">
              Salle de bains(toilette + baignoire ou douche)
            </label>
            <ReactTooltip id='nbBain' type='error'>
              <span>Le nombre salle de bain avec bain dans la résidence</span>
            </ReactTooltip>
          </div>
          {/* fin nombre de salles d'eau : bains */}

          {/* début laverie */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de laverie"
              name="laverie"
              id="laverie"
              value={info.laverie}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de laverie</option>
              <option value="aucune">Aucune</option>
              <option value="independante">Indépendante</option>
              <option value="jumelee">Jumelée à la salle de toilette</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="climatisation">Type de laverie </label>
          </div>
          {/* fin laverie */}
          <p className="mt-3"></p>
          {/* début salle à manger */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de salle à manger"
              name="salleManger"
              id="salleManger"
              value={info.salleManger}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de salle à manger</option>
              <option value="aucune">Aucune</option>
              <option value="separer">Séparée</option>
              <option value="jumeleeCuisine">Jumelée à la cuisine</option>
              <option value="jumeleeSalon">Jumelée au salon</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="salleManger">Salle à manger</label>
          </div>
          {/* fin salle à manger */}
          {/* début salon */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de salon"
              name="salon"
              id="salon"
              value={info.salon}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de salon</option>
              <option value="aucun">Aucun</option>
              <option value="separer">Séparé</option>
              <option value="jumeleeCuisine">Jumelé à la cuisine</option>
              <option value="jumeleeSalon">Jumelé à la salle à manger</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="salon">Salon</label>
          </div>
          {/* fin salon */}
          <p className="mt-3"></p>
          {/* début foyer */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de foyer"
              name="foyer"
              id="foyer"
              value={info.foyer}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de foyer</option>
              <option value="aucun">Aucun</option>
              <option value="bois">Bois</option>
              <option value="gaz">Gaz</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="foyer">Foyer</label>
          </div>
          {/* fin foyer */}

          {/* début poele */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de poele"
              name="poele"
              id="poele"
              value={info.poele}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de poêle</option>
              <option value="aucune">Aucun</option>
              <option value="bois">Bois</option>
              <option value="granules">Granules</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="poele">Poêle</label>
          </div>
          {/* fin poele */}

          {/* début espace bureau */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Existance d'un espace de bureau"
              name="espaceBureau"
              id="espaceBureau"
              value={info.espaceBureau}
              onChange={handleChange}
            >
              <option value="">
                Sélectionnez l'existance d'un espace de bureau
              </option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="espaceBureau">Espace de bureau</label>
          </div>
          {/* fin espace bureau */}

          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Etat du sous-sol"
              name="sousSol"
              id="sousSol"
              value={info.sousSol}
              onChange={handleChange}
            >
              <option value="">Sélectionnez l'état du sous-sol</option>
              <option value="Fini">Fini</option>
              <option value="Non fini">Non fini</option>
              <option value="Salle de jeu (enfants)">
                Salle de jeu (enfants)
              </option>
              <option value="Salle familiale">Salle familiale</option>
              <option value="Rangement">Rangement</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="sousSol">État du sous-sol</label>
          </div>
        </Form>
      </main>
    </section>
  );
}
