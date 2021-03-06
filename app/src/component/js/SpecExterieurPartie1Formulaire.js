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
          {/* d??but mat??riel des fondations */}

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
              <option value="">S??lectionnez le mat??riel des fondations</option>
              <option value="Beton">B??ton</option>
              <option value="bloc de Beton">Bloc de b??ton</option>
              <option value="bois traite">Bois trait??</option>
            </select>
            <span id="fondation-error" className="error-field">
              Vous devez faire une s??lection
            </span>
            <label htmlFor="fondation">Fondation</label>
          </div>
          {/* fin mat??riel des fondations */}
          {/* d??but rev??tement ext??rieur */}

          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="revetExterieur" className="label noselect">
                Rev??tement ext??rieur
              </label>
            </div>
            <select
              className="form-select"
              name="revetExterieur"
              value={info.revetExterieur}
              id="revetExterieur"
              aria-label="Selection du mat??riel du rev??tement ext??rieur"
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">
                S??lectionnez le mat??riel du rev??tement ext??rieur
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
                placeholder="Entrez le mat??riel alternatif"
                disabled={info.revetExterieur !== "autre"}
                onChange={handleChange}
                onBlur={validateInput}
              />
            </div>
          </div>
          <span id="revetExterieur-error" className="error-field">
            Vous devez faire une s??lection et entrer le mat??riel alternatif au
            besoin
          </span>
          <br />
          {/* fin rev??tement ext??rieur */}

          {/* d??but fen??tre vitrage */}
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
              <option value="">S??lectionnez le type de vitrage</option>
              <option value="simple">Simple</option>
              <option value="double">Double</option>
              <option value="triple">Triple</option>
              <option value="faible emissivite">Faible emissivit??</option>
            </select>
            <span id="fenVitrage-error" className="error-field">
              Vous devez faire une s??lection
            </span>
            <label htmlFor="fenVitrage">Fen??tre: Vitrage</label>
          </div>
          {/* fin fen??tre vitrage */}

          {/* d??but fen??tre mat??riel construction */}
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
              <option value="">S??lectionnez le mat??riel de la fen??tre</option>
              <option value="bois">Bois</option>
              <option value="vinylePvc">Vinyle / PVC</option>
              <option value="aluminium">Aluminium</option>
            </select>
            <span id="fenConstruction-error" className="error-field">
              Vous devez faire une s??lection
            </span>
            <label htmlFor="fenConstruction">Fen??tre: Construction</label>
          </div>
          {/* fin fen??tre mat??riel construction */}

          {/* d??but ??tat toiture */}
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
                S??lectionnez l'??tat g??n??ral de la toiture
              </option>
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
            <span id="etatToiture-error" className="error-field">
              Vous devez faire une s??lection
            </span>
            <label htmlFor="etatToiture">??tat de la toiture</label>
          </div>
          {/* fin ??tat toiture */}

          {/* d??but ??ge toiture */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="toiture" className="label noselect">
                ??ge de la toiture
              </label>
            </div>

            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="toiture"
                name="toiture"
                value={info.toiture}
                placeholder="Entrez l'??ge de la toiture en ann??es"
                onChange={handleChange}
                onBlur={validateInput}
              />
              <label htmlFor="toiture" className="input-group-text noselect">
                ann??es
              </label>
            </div>
          </div>
          <span id="toiture-error" className="error-field">
            Vous devez entrer un entier positif
          </span>
          {/* fin ??ge toiture */}
        </Form>
      </main>
    </section>
  );
}
