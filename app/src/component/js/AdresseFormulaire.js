import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function AdresseFormulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regTexteNorm = /^\D+$/;
  const regPasVide = /^.+$/;
  const regCodePostal = /^[\d\w ]{6,7}$/;

  useEffect(() => {
    validateWholeForm();
  }, []);

  const validateWholeForm = () => {
    if (
      regPasVide.test(info.numeroCivic) &&
      regPasVide.test(info.nomRue) &&
      regNbrPositif.test(info.numeroAppartement) &&
      regCodePostal.test(info.codePostal) &&
      regNbrPositif.test(info.ageImmeuble) &&
      regPasVide.test(info.bruitAmbiant) &&
      regPasVide.test(info.egout) &&
      regPasVide.test(info.eau) &&
      regPasVide.test(info.circulation)
    ) {
      setInfo({ ...info, validated: true, validatedAdd: true });
    } else {
      setInfo({ ...info, validated: false, validatedAdd: false });
    }
  };

  const validateForm = (element) => {
    const error_text = element.target.nextSibling;
    const elem_id = element.target.id;
    switch (elem_id) {
      case "numeroCivic":
        if (!regPasVide.test(info.numeroCivic)) {
          error_text.classList.add("show-error");
        }
        break;
      case "rue":
        if (!regPasVide.test(info.nomRue)) {
          error_text.classList.add("show-error");
        }
        break;
      case "numeroAppartement":
        if (!regNbrPositif.test(info.numeroAppartement)) {
          error_text.classList.add("show-error");
        }
        break;
      case "codePostal":
        if (!regCodePostal.test(info.codePostal)) {
          error_text.classList.add("show-error");
        }
        break;
      case "ageImmeuble":
        if (!regNbrPositif.test(info.ageImmeuble)) {
          document
            .querySelector("#ageImmeuble-error")
            .classList.add("show-error");
        } else {
          document
            .querySelector("#ageImmeuble-error")
            .classList.remove("show-error");
        }
        break;
      case "bruit":
        if (!regPasVide.test(info.bruitAmbiant)) {
          error_text.classList.add("show-error");
        }
        break;
      case "egout":
        if (!regPasVide.test(info.egout)) {
          error_text.classList.add("show-error");
        }
        break;
      case "eau":
        if (!regPasVide.test(info.eau)) {
          error_text.classList.add("show-error");
        }
        break;
      case "circulation":
        if (!regPasVide.test(info.circulation)) {
          error_text.classList.add("show-error");
        }
        break;
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

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedAdd}>
          {/* début numéro civic */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="numeroCivic"
              name="numeroCivic"
              value={info.numeroCivic}
              autoFocus
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            />
            <span className="error-field">Ce champ doit être rempli</span>
            <label htmlFor="numeroCivic">Numéro Civic</label>
          </div>
          {/* fin numéro civic */}

          {/* début nom de rue */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="rue"
              name="nomRue"
              value={info.nomRue}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            />
            <span className="error-field">Ce champ doit être rempli</span>
            <label htmlFor="rue">Nom de rue</label>
          </div>
          {/* fin nom de rue */}

          {/* début numéro appartement */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="numeroAppartement"
              name="numeroAppartement"
              value={info.numeroAppartement}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            />
            <span className="error-field">
              Ce champ doit contenir un nombre positif
            </span>
            <label htmlFor="numeroAppartement">Numero d'appartement</label>
          </div>
          {/* fin numéro appartement */}

          {/* début code postal */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="codePostal"
              name="codePostal"
              value={info.codePostal}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            />
            <span className="error-field">
              Ce champ doit contenir un code postal valide ex: H2i2f8
            </span>
            <label htmlFor="rue">Code postal</label>
          </div>
          {/* fin code postal */}

          {/* début âge immeuble */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="ageImmeuble" className="label noselect">
                Âge de l'immeuble
              </label>
            </div>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="ageImmeuble"
                name="ageImmeuble"
                value={info.ageImmeuble}
                placeholder="Entrez l'âge de l'immeuble en années"
                onChange={handleChange}
                onFocus={validateForm}
                onBlur={validateForm}
              />
              <label
                htmlFor="ageImmeuble"
                className="input-group-text noselect"
              >
                années
              </label>
            </div>
          </div>
          <span id="ageImmeuble-error" className="error-field">
            Ce champ doit contenir un nombre positif
          </span>
          {/* fin âge immeuble */}
          <br />
          {/* début bruit ambiant */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du bruit ambiant"
              name="bruitAmbiant"
              id="bruit"
              value={info.bruitAmbiant}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">Sélectionnez le niveau de bruit ambiant</option>
              <option value="aucun">Aucun</option>
              <option value="acceptable">Acceptable</option>
              <option value="irritant">Irritant</option>
            </select>
            <span className="error-field">Vous devez faire une sélection</span>
            <label htmlFor="bruitAmbiant">Bruit ambiant</label>
          </div>
          {/* fin bruit ambiant */}

          {/* début égout */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'égout"
              name="egout"
              value={info.egout}
              id="egout"
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">
                Sélectionnez le type d'installation sanitaire
              </option>
              <option value="municipale">Municipale</option>
              <option value="fosse sceptique">Fosse sceptique</option>
            </select>
            <span className="error-field">Vous devez faire une sélection</span>
            <label htmlFor="egout">Égout</label>
          </div>
          {/* fin égout */}

          {/* début installations eau */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'approvisionnement en eau"
              name="eau"
              id="eau"
              value={info.eau}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">
                Sélectionnez le type d'approvisionnement d'eau
              </option>
              <option value="municipale">Municipalité</option>
              <option value="puit">Puit</option>
            </select>
            <span className="error-field">Vous devez faire une sélection</span>
            <label htmlFor="eau">Eau</label>
          </div>
          {/* fin installations eau */}

          {/* début circulation */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la circulation"
              name="circulation"
              value={info.circulation}
              id="circulation"
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">Sélectionnez le niveau de ciculation</option>
              <option value="voiePrincipale">Voie principale</option>
              <option value="rueTranquille">Rue tranquille</option>
              <option value="cds">Cul-de-sac</option>
            </select>
            <span className="error-field">Vous devez faire une sélection</span>
            <label htmlFor="circulation">Circulation</label>
          </div>
          {/* fin circulation */}
        </Form>
      </main>
    </section>
  );
}
