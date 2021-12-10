import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecExterieurPartie1Formulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regPasVide = /^.+$/;

  const validateFondation = (updtMsg) => {
    let input = document.querySelector("#fondation");
    let err = document.querySelector("#fondation-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");

      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");

      return false;
    }
  };
  const validateRevetExt = (updtMsg) => {
    let input = document.querySelector("#revetExterieur");
    let inputIn = document.querySelector("#revetAutre");
    let err = document.querySelector("#revetExterieur-error");
    if (regPasVide.test(input.value)) {
      if (input.value === "autre") {
        if (regPasVide.test(inputIn.value)) {
          if (updtMsg) err.classList.remove("show-error");
          return true;
        } else {
          if (updtMsg) err.classList.add("show-error");
          return false;
        }
      }
      if (updtMsg) err.classList.remove("show-error");
      return true;
    }
    if (updtMsg) err.classList.add("show-error");
    return false;
  };
  const validateFenVitrage = (updtMsg) => {
    let input = document.querySelector("#fenVitrage");
    let err = document.querySelector("#fenVitrage-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateFenConstruction = (updtMsg) => {
    let input = document.querySelector("#fenConstruction");
    let err = document.querySelector("#fenConstruction-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateEtatToiture = (updtMsg) => {
    let input = document.querySelector("#etatToiture");
    let err = document.querySelector("#etatToiture-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateToiture = (updtMsg) => {
    let input = document.querySelector("#toiture");
    let err = document.querySelector("#toiture-error");
    if (regNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateInput = (element) => {
    let id = element.target.id;
    switch (id) {
      case "fondation":
        validateFondation(true);
        break;
      case "revetExterieur":
        validateRevetExt(true);
        break;
      case "revetAutre":
        validateRevetExt(true);
        break;
      case "fenVitrage":
        validateFenVitrage(true);
        break;
      case "fenConstruction":
        validateFenConstruction(true);
        break;
      case "etatToiture":
        validateEtatToiture(true);
        break;
      case "toiture":
        validateToiture(true);
    }
    validateWholeForm();
  };

  const validateWholeForm = () => {
    let valid = [
      validateFondation(false),
      validateRevetExt(false),
      validateFenVitrage(false),
      validateFenConstruction(false),
      validateEtatToiture(false),
      validateToiture(false),
    ].every(Boolean);
    if (valid) {
      setInfo({ ...info, validated: true, validatedSpecEx1: true });
    } else {
      setInfo({ ...info, validated: false, validatedSpecEx1: false });
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedSpecEx1}>
          {/* début matériel des fondations */}

          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de fondation"
              name="fondation"
              value={info.fondation}
              id="fondation"
              autoFocus
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le matériel des fondations</option>
              <option value="Beton">Béton</option>
              <option value="bloc de Beton">Bloc de béton</option>
              <option value="bois traite">Bois traité</option>
            </select>
            <span id="fondation-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="fondation">Fondation</label>
          </div>
          {/* fin matériel des fondations */}
          {/* début revêtement extérieur */}

          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="revetExterieur" className="label noselect">
                Revêtement extérieur
              </label>
            </div>
            <select
              className="form-select"
              name="revetExterieur"
              value={info.revetExterieur}
              id="revetExterieur"
              aria-label="Selection du matériel du revêtement extérieur"
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">
                Sélectionnez le matériel du revêtement extérieur
              </option>
              <option value="bois">Bois</option>
              <option value="brique">Brique</option>
              <option value="vinyle">Vinyle</option>
              <option value="aluminium">Aluminium</option>
              <option value="fibrociment">Fibrociment</option>
              <option value="pierre">Pierre</option>
              <option value="autre">Autre</option>
            </select>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="revetAutre"
                name="autreRevet"
                value={info.autreRevet}
                placeholder="Entrez le matériel alternatif"
                disabled={info.revetExterieur !== "autre"}
                onChange={handleChange}
                onBlur={validateInput}
              />
            </div>
          </div>
          <span id="revetExterieur-error" className="error-field">
            Vous devez faire une sélection et entrer le matériel alternatif au
            besoin
          </span>
          <br />
          {/* fin revêtement extérieur */}

          {/* début fenêtre vitrage */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de vitrage"
              name="fenVitrage"
              value={info.fenVitrage}
              id="fenVitrage"
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de vitrage</option>
              <option value="simple">Simple</option>
              <option value="double">Double</option>
              <option value="triple">Triple</option>
              <option value="faible emissivite">Faible emissivité</option>
            </select>
            <span id="fenVitrage-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="fenVitrage">Fenêtre: Vitrage</label>
          </div>
          {/* fin fenêtre vitrage */}

          {/* début fenêtre matériel construction */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de construction de fenetre"
              name="fenConstruction"
              id="fenConstruction"
              value={info.fenConstruction}
              onChange={handleChange}
              onBlur={validateFenConstruction}
            >
              <option value="">Sélectionnez le matériel de la fenêtre</option>
              <option value="bois">Bois</option>
              <option value="vinylePvc">Vinyle / PVC</option>
              <option value="aluminium">Aluminium</option>
            </select>
            <span id="fenConstruction-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="fenConstruction">Fenêtre: Construction</label>
          </div>
          {/* fin fenêtre matériel construction */}

          {/* début état toiture */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de l'etat de la toiture"
              name="etatToiture"
              value={info.etatToiture}
              id="etatToiture"
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">
                Sélectionnez l'état général de la toiture
              </option>
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
            <span id="etatToiture-error" className="error-field">
              Vous devez faire une sélection
            </span>
            <label htmlFor="etatToiture">État de la toiture</label>
          </div>
          {/* fin état toiture */}

          {/* début âge toiture */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="toiture" className="label noselect">
                Âge de la toiture
              </label>
            </div>

            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="toiture"
                name="toiture"
                value={info.toiture}
                placeholder="Entrez l'âge de la toiture en années"
                onChange={handleChange}
                onBlur={validateInput}
              />
              <label htmlFor="toiture" className="input-group-text noselect">
                années
              </label>
            </div>
          </div>
          <span id="toiture-error" className="error-field">
            Vous devez entrer un entier positif
          </span>
          {/* fin âge toiture */}
        </Form>
      </main>
    </section>
  );
}
