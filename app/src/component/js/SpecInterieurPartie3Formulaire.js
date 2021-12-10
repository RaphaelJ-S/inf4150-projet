import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecInterieurPartie1Formulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regPasVide = /^.+$/;
  const regVide = /^.*$/;

  useEffect(() => {
    validateWholeForm();
  }, []);

  const validateWholeForm = () => {
    let valid = [
      validateNbrSalleEauToilette(false),
      validateNbrSalleEauBain(false),
      validateLaverie(false),
      validateSalleManger(false),
      validateSalon(false),
      validateFoyer(false),
      validatePoele(false),
      validateEspaceBureau(false),
      validateSousSol(false),
    ].every(Boolean);
    if (valid) {
      setInfo({ ...info, validated: true, validatedSpecInt3: true });
    } else {
      setInfo({ ...info, validated: false, validatedSpecInt3: false });
    }
  };

  const validateInput = (element) => {
    const elem_id = element.target.id;
    switch (elem_id) {
      case "nbrSalleEauToilette":
        validateNbrSalleEauToilette(true);
        break;
      case "nbrSalleEauBain":
        validateNbrSalleEauBain(true);
        break;
      case "laverie":
        validateLaverie(true);
        break;
      case "salleManger":
        validateSalleManger(true);
        break;
      case "salon":
        validateSalon(true);
        break;
      case "foyer":
        validateFoyer(true);
        break;
      case "poele":
        validatePoele(true);
        break;
      case "espaceBureau":
        validateEspaceBureau(true);
        break;
      case "sousSol":
        validateSousSol(true);
        break;
    }
    validateWholeForm();
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

  const validateNbrSalleEauToilette = (updtMsg) => {
    let input = document.querySelector("#nbrSalleEauToilette");
    let err = document.querySelector("#nbrSalleEauToilette-error");
    if (regNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateNbrSalleEauBain = (updtMsg) => {
    let input = document.querySelector("#nbrSalleEauBain");
    let err = document.querySelector("#nbrSalleEauBain-error");
    if (regNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateLaverie = (updtMsg) => {
    let input = document.querySelector("#laverie");
    let err = document.querySelector("#laverie-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateSalleManger = (updtMsg) => {
    let input = document.querySelector("#salleManger");
    let err = document.querySelector("#salleManger-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateSalon = (updtMsg) => {
    let input = document.querySelector("#salon");
    let err = document.querySelector("#salon-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateFoyer = (updtMsg) => {
    let input = document.querySelector("#foyer");
    let err = document.querySelector("#foyer-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validatePoele = (updtMsg) => {
    let input = document.querySelector("#poele");
    let err = document.querySelector("#poele-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateEspaceBureau = (updtMsg) => {
    let input = document.querySelector("#espaceBureau");
    let err = document.querySelector("#espaceBureau-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateSousSol = (updtMsg) => {
    let input = document.querySelector("#sousSol");
    let err = document.querySelector("#sousSol-error");
    if (regVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedSpecInt3}>
          {/* début nombre de salles d'eau : toilette */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrSalleEauToilette"
              name="nbrSalleEauToilette"
              value={info.nbrSalleEauToilette}
              onChange={handleChange}
              onBlur={validateInput}
            />
            <span id="nbrSalleEauToilette-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrSalleEauToilette">
              Salle de toilette(toilette + lavabo)
            </label>
          </div>
          {/* fin nombre de salles d'eau : toilette */}

          {/* début nombre de salles d'eau : bains */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrSalleEauBain"
              name="nbrSalleEauBain"
              value={info.nbrSalleEauBain}
              onChange={handleChange}
              onBlur={validateInput}
            />
            <span id="nbrSalleEauBain-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrSalleEauBain">
              Salle de bains(toilette + baignoire ou douche)
            </label>
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
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de laverie</option>
              <option value="aucune">Aucune</option>
              <option value="independante">Indépendante</option>
              <option value="jumelee">Jumelée à la salle de toilette</option>
            </select>
            <span id="laverie-error" className="error-field">
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
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de salle à manger</option>
              <option value="aucune">Aucune</option>
              <option value="separer">Séparée</option>
              <option value="jumeleeCuisine">Jumelée à la cuisine</option>
              <option value="jumeleeSalon">Jumelée au salon</option>
            </select>
            <span id="salleManger-error" className="error-field">
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
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de salon</option>
              <option value="aucun">Aucun</option>
              <option value="separer">Séparé</option>
              <option value="jumeleeCuisine">Jumelé à la cuisine</option>
              <option value="jumeleeSalon">Jumelé à la salle à manger</option>
            </select>
            <span id="salon-error" className="error-field">
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
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de foyer</option>
              <option value="aucun">Aucun</option>
              <option value="bois">Bois</option>
              <option value="gaz">Gaz</option>
            </select>
            <span id="foyer-error" className="error-field">
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
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de poêle</option>
              <option value="aucune">Aucun</option>
              <option value="bois">Bois</option>
              <option value="granules">Granules</option>
            </select>
            <span id="poele-error" className="error-field">
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
              onBlur={validateInput}
            >
              <option value="">
                Sélectionnez l'existance d'un espace de bureau
              </option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
            <span id="espaceBureau-error" className="error-field">
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
              onBlur={validateInput}
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
            <span id="sousSol-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="sousSol">État du sous-sol</label>
          </div>
        </Form>
      </main>
    </section>
  );
}
