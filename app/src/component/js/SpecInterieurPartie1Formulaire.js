import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecInterieurPartie1Formulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regPasVide = /^.+$/;
  const regVideNbrPositif = /^\d*$/;
  const regVide = /^.*$/;

  const validateWholeForm = () => {
    let valid = [
      validateSuperficieHab(false),
      validateIsolationSousSol(false),
      validateIsolationMurs(false),
      validateIsolationPlafonds(false),
      validateChauffeEau(false),
      validateTypeChauffeEau(false),
      validateSysElectrique(false),
      validateChauffage(false),
      validateFournaise(false),
    ].every(Boolean);
    if (valid) {
      setInfo({ ...info, validated: true, validatedSpecInt1: true });
    } else {
      setInfo({ ...info, validated: false, validatedSpecInt1: false });
    }
  };

  const validateInput = (element) => {
    const elem_id = element.target.id;
    switch (elem_id) {
      case "superficieHab":
        validateSuperficieHab(true);
        break;
      case "isolationSousSol":
        validateIsolationSousSol(true);
        break;
      case "isolationMurs":
        validateIsolationMurs(true);
        break;
      case "isolationPlafonds":
        validateIsolationPlafonds(true);
        break;
      case "chauffeEau":
        validateChauffeEau(true);
        break;
      case "typeChauffeEau":
        validateTypeChauffeEau(true);
        break;
      case "sysElectriqueAutre":
        validateSysElectrique(true);
        break;
      case "sysElectrique":
        validateSysElectrique(true);
        break;
      case "chauffage":
        validateChauffage(true);
        break;
      case "fournaise":
        validateFournaise(true);
        break;
    }
    validateWholeForm();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const validateSuperficieHab = (updtMsg) => {
    let input = document.querySelector("#superficieHab");
    let err = document.querySelector("#superficieHab-error");
    if (regNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateIsolationSousSol = (updtMsg) => {
    let input = document.querySelector("#isolationSousSol");
    let err = document.querySelector("#isolationSousSol-error");
    if (regVideNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateIsolationMurs = (updtMsg) => {
    let input = document.querySelector("#isolationMurs");
    let err = document.querySelector("#isolationMurs-error");
    if (regVideNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateIsolationPlafonds = (updtMsg) => {
    let input = document.querySelector("#isolationPlafonds");
    let err = document.querySelector("#isolationPlafonds-error");
    if (regVideNbrPositif.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateChauffeEau = (updtMsg) => {
    let input = document.querySelector("#chauffeEau");
    let err = document.querySelector("#chauffeEau-error");
    if (regVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };

  const validateTypeChauffeEau = (updtMsg) => {
    let input = document.querySelector("#typeChauffeEau");
    let err = document.querySelector("#typeChauffeEau-error");
    if (regPasVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateSysElectrique = (updtMsg) => {
    let input = document.querySelector("#sysElectrique");
    let err = document.querySelector("#sysElectrique-error");
    let inputIn = document.querySelector("#sysElectriqueAutre");
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
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateChauffage = (updtMsg) => {
    let input = document.querySelector("#chauffage");
    let err = document.querySelector("#chauffage-error");
    if (regVide.test(input.value)) {
      if (updtMsg) err.classList.remove("show-error");
      return true;
    } else {
      if (updtMsg) err.classList.add("show-error");
      return false;
    }
  };
  const validateFournaise = (updtMsg) => {
    let input = document.querySelector("#fournaise");
    let err = document.querySelector("#fournaise-error");
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
        <Form noValidate validated={info.validatedSpecInt1}>
          {/* début superficie habitable */}
          <div className="proRev">
            <div className="label-texte taille-terrain">
              <label htmlFor="superficieHab" className="label noselect">
                Superficie habitable
              </label>
            </div>

            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="superficieHab"
                name="superficieHab"
                value={info.superficieHab}
                placeholder="Entrez la superficie habitable en mètre carré"
                onChange={handleChange}
                onBlur={validateInput}
                autofocus
              />
              <label
                htmlFor="superficieHab"
                className="input-group-text noselect"
              >
                &#13217;
              </label>
            </div>
          </div>
          <span id="superficieHab-error" className="error-field">
            Le champ Adresse doit être rempli
          </span>
          {/* fin taille terrain */}

          {/** début indice isolation sous-sol */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="isolationSousSol"
              name="isolationSousSol"
              value={info.isolationSousSol}
              onChange={handleChange}
              onBlur={validateInput}
            />
            <span id="isolationSousSol-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="isolationSousSol">
              Indice d'isolation : sous-sol
            </label>
          </div>
          {/** fin indice isolation murs */}

          {/** début indice isolation murs */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="isolationMurs"
              name="isolationMurs"
              value={info.isolationMurs}
              onChange={handleChange}
              onBlur={validateInput}
            />
            <span id="isolationMurs-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="isolationMurs">Indice d'isolation : murs</label>
          </div>
          {/** fin indice isolation murs */}

          {/** début indice isolation plafonds */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="isolationPlafonds"
              name="isolationPlafonds"
              value={info.isolationPlafonds}
              onChange={handleChange}
              onBlur={validateInput}
            />
            <span id="isolationPlafonds-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="isolationPlafonds">
              Indice d'isolation : Plafonds
            </label>
          </div>
          {/** fin indice isolation plafonds */}
          <p className="mt-3"></p>

          {/* début chauffe-eau */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du chauffe-eau"
              name="chauffeEau"
              id="chauffeEau"
              value={info.chauffeEau}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le chauffe-eau</option>
              <option value="loue">Loué</option>
              <option value="achete">Acheté</option>
            </select>
            <span id="chauffeEau-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="chauffeEau">Chauffe-eau </label>
          </div>
          {/* fin chauffe-eau */}

          {/* début type chauffe-eau */}
          <div className="form-floating ">
            <select
              className="form-select"
              aria-label="Selection du type de chauffe-eau"
              name="typeChauffeEau"
              id="typeChauffeEau"
              value={info.typeChauffeEau}
              disabled={info.chauffeEau === ""}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type du chauffe-eau</option>
              <option value="gaz">Gaz</option>
              <option value="electricite">Électricité</option>
              <option value="mazout">Mazout</option>
            </select>
            <span id="typeChauffeEau-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="typeChauffeEau">Type du chauffe-eau</label>
          </div>
          {/* fin type chauffe-eau */}
          <p className="mt-3"></p>
          {/* début système électrique */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="sysElectrique" className="label noselect">
                Système électrique
              </label>
            </div>
            <select
              className="form-select sm"
              size="sm"
              name="sysElectrique"
              id="sysElectrique"
              value={info.sysElectrique}
              aria-label="Selection du système électrique"
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">
                Sélectionnez le type de système électrique
              </option>
              <option value="ampere100">100 ampères</option>
              <option value="ampere200">200 ampères</option>
              <option value="disjoncteurs">Disjoncteurs</option>
              <option value="fusibles">Fusibles</option>
              <option value="autre">Autre</option>
            </select>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="sysElectriqueAutre"
                name="sysElectriqueAutre"
                value={info.sysElectriqueAutre}
                placeholder="Entrez le type de système électrique autre"
                disabled={info.sysElectrique !== "autre"}
                onChange={handleChange}
                onBlur={validateInput}
              />
            </div>
          </div>
          <span id="sysElectrique-error" className="error-field">
            Le champ Adresse doit être rempli
          </span>
          {/* fin système électrique */}

          {/* début chauffage */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de chauffage"
              name="chauffage"
              id="chauffage"
              value={info.chauffage}
              onChange={handleChange}
              onBlur={validateInput}
            >
              <option value="">Sélectionnez le type de chauffage</option>
              <option value="gaz">Gaz</option>
              <option value="electricite">Électricité</option>
              <option value="mazout">Mazout</option>
              <option value="bois">Bois</option>
              <option value="granules">Granules</option>
            </select>
            <span id="chauffage-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="chauffage">Type de chauffage </label>
          </div>
          {/* fin chauffage */}
          <p className="mt-3"></p>
          {/* début fournaise */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de fournaise"
              name="fournaise"
              id="fournaise"
              value={info.fournaise}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de fournaise</option>
              <option value="louee">Louée</option>
              <option value="achetee">Achetée</option>
            </select>
            <span id="fournaise-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="fournaise">Fournaise </label>
          </div>
          {/* fin fournaise */}
        </Form>
      </main>
    </section>
  );
}
