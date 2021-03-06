import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";
import ReactTooltip from 'react-tooltip';

export default function HabitationFormulaire({ info, setInfo }) {
  const btnStyle = {
    backgroundColor: "white",
  };

  const regNbrPositif = /^\d+$/;
  const regTexteNorm = /^\D+$/;
  const regPasVide = /^.+$/;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    const erreur = document.querySelector("#error-revenu");
    if (info.proprieteRevenu === "false") {
      setInfo({ ...info, revenuMensuel: "" });

      erreur.classList.remove("show-error");
    } else {
      if (!regNbrPositif.test(info.revenuMensuel)) {
        erreur.classList.add("show-error");
      }
    }
  }, [info.proprieteRevenu]);

  useEffect(() => {
    validateWholeForm();
  }, []);

  const validateWholeForm = () => {
    if (
      regNbrPositif.test(info.prixDemande) &&
      regNbrPositif.test(info.evalMunicipale) &&
      regNbrPositif.test(info.taxeScolaire) &&
      regNbrPositif.test(info.taxeMunicipale) &&
      regTexteNorm.test(info.construction) &&
      regTexteNorm.test(info.typeHabitation) &&
      regTexteNorm.test(info.quartier) &&
      (info.proprieteRevenu ? regNbrPositif.test(info.revenuMensuel) : true)
    ) {
      setInfo({ ...info, validatedHab: true, validated: true });
    } else {
      setInfo({ ...info, validatedHab: false, validated: false });
    }
  };
  const validateForm = (element) => {
    let input = element.target.nextSibling;
    if (element.target.id === "prixDem") {
      if (!regNbrPositif.test(info.prixDemande)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "eval") {
      if (!regNbrPositif.test(info.evalMunicipale)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "taxeScol") {
      if (!regNbrPositif.test(info.taxeScolaire)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "taxeMuni") {
      if (!regNbrPositif.test(info.taxeMunicipale)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "construct") {
      if (!regTexteNorm.test(info.construction)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "typeHabitation") {
      if (!regTexteNorm.test(info.typeHabitation)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "quartier") {
      if (!regTexteNorm.test(info.quartier)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "revenu") {
      const error_revenu = document.querySelector("#error-revenu");
      if (info.proprieteRevenu === "true") {
        if (!regNbrPositif.test(info.revenuMensuel)) {
          error_revenu.classList.add("show-error");
        } else {
          error_revenu.classList.remove("show-error");
        }
      } else {
        error_revenu.classList.remove("show-error");
      }
    }

    validateWholeForm();
  };
  const resetError = (element) => {
    element.target.nextSibling.classList.remove("show-error");
  };
  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedHab}>
          {/* d??but prix demand?? */}
          <div className="form-floating" data-tip data-for='prixDemander'>
            <input
              type="text"
              className="form-control"
              id="prixDem"
              name="prixDemande"
              value={info.prixDemande}
              autoFocus
              onFocus={resetError}
              onBlur={validateForm}
              onChange={handleChange}
            />
            <span id="error-adresse" className="error-field">
              Seul un nombre positif est accept?? pour le prix demand??
            </span>
            <label htmlFor="prixDem">Prix Demand??($)</label>
            <ReactTooltip id='prixDemander' type='error'>
              <span>Le prix demand?? pour la r??sidence</span>
              </ReactTooltip>
          </div>
          {/* fin prix demand?? */}

          {/* d??but ??valuation municipale */}
          <div className="form-floating" data-tip data-for='evalMuni'>
            <input
              type="text"
              className="form-control"
              id="eval"
              name="evalMunicipale"
              value={info.evalMunicipale}
              onFocus={resetError}
              onBlur={validateForm}
              onChange={handleChange}
            />
            <span id="error-adresse" className="error-field" >
              Seul un nombre positif est accept?? pour l'??valuation municipale
            </span>
            <label htmlFor="eval">??valuation municipale($)</label>
            <ReactTooltip id='evalMuni' type='error'>
              <span>La valeur de l'??valuation municipale</span>
              </ReactTooltip>
          </div>
          {/* fin ??valuation municipale */}

          {/* d??but taxe scolaire */}
          <div className="form-floating" data-tip data-for='taxeScolaire'>
            <input
              type="text"
              className="form-control"
              id="taxeScol"
              name="taxeScolaire"
              value={info.taxeSchol}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            />
            <span id="error-adresse" className="error-field">
              Seul un nombre positif est accept?? pour la taxe scolaire
            </span>
            <label htmlFor="taxeScol">Montant de la taxe scolaire($)</label>
            <ReactTooltip id='taxeScolaire' type='error'>
              <span>Le montant de la taxe scolaire</span>
              </ReactTooltip>
          </div>
          {/* fin taxe scolaire */}

          {/* d??but taxe municipale */}
          <div className="form-floating" data-tip data-for='taxeMuni'>
            <input
              type="text"
              className="form-control"
              id="taxeMuni"
              name="taxeMunicipale"
              value={info.taxeMunicipale}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            />
            <span id="error-adresse" className="error-field">
              Seul un nombre positif est accept?? pour la taxe municipale
            </span>
            <label htmlFor="taxeMuni">Montant de la taxe municipale($)</label>
            <ReactTooltip id='taxeMuni' type='error'>
              <span>Le montant de la taxe municipale</span>
              </ReactTooltip>
          </div>
          {/* fin taxe municipale */}

          <br />
          {/* d??but ??tat construction */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la construction"
              name="construction"
              id="construct"
              value={info.construction}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">S??lectionnez l'??tat de la construction</option>
              <option value="existante">Existante</option>
              <option value="neuve">Neuve</option>
            </select>
            <span id="error-adresse" className="error-field">
              Vous devez faire une s??lection
            </span>
            <label htmlFor="construct">Construction</label>
          </div>
          {/* fin ??tat construction */}

          {/* d??but type habitation */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'habitation"
              name="typeHabitation"
              id="typeHabitation"
              value={info.typeHabitation}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">S??lectionnez un type d'habitation</option>
              <option value="maisonIndividuelle">Maison individuelle</option>
              <option value="duplex">Duplex</option>
              <option value="tourHabitation">Tour d'habitation</option>
              <option value="maisonJumelee">Maison jumel??e</option>
              <option value="triplex">Triplex</option>
              <option value="bungalow">Plain-pied(bungalow)</option>
              <option value="maisonRangee">Maison en rang??e</option>
              <option value="immeuble">Petit immeuble</option>
              <option value="copropriete">Copropri??t??</option>
            </select>
            <span id="error-adresse" className="error-field">
              Vous devez faire une s??lection
            </span>
            <label htmlFor="typeHabitation">Type d'habitation</label>
          </div>
          {/* fin type habitation */}

          {/* d??but zonage quartier */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du quartier"
              name="quartier"
              id="quartier"
              value={info.quartier}
              onChange={handleChange}
              onFocus={resetError}
              onBlur={validateForm}
            >
              <option value="">S??lectionnez le zonage du quartier</option>
              <option value="residentiel">R??sidentiel</option>
              <option value="commerce-industriel">
                Commercial ou industriel
              </option>
              <option value="rural">Rural</option>
            </select>
            <span className="error-field">Vous devez faire une s??lection</span>
            <label htmlFor="quartier">Quartier</label>
          </div>
          {/* fin zonage quartier */}

          <br />
          {/* d??but propri??t?? revenu */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="revenu" className="label noselect">
                Propri??t?? ?? revenu?
              </label>
            </div>
            <div className="input-group">
              <button
                className="btn btn-outline-success"
                style={btnStyle}
                name="proprieteRevenu"
                value="true"
                type="button"
                onClick={handleChange}
              >
                Oui
              </button>
              <button
                className="btn btn-outline-primary"
                style={btnStyle}
                type="button"
                name="proprieteRevenu"
                value="false"
                onClick={handleChange}
              >
                Non
              </button>
              <input
                type="text"
                className="form-control"
                id="revenu"
                name="revenuMensuel"
                value={info.revenuMensuel}
                placeholder="Revenu mensuel"
                disabled={info.proprieteRevenu === "false"}
                onChange={handleChange}
                onBlur={validateForm}
              />

              <label htmlFor="revenu" className="input-group-text noselect">
                $/m
              </label>
            </div>
          </div>
          <span id="error-revenu" className="error-field">
            Le revenu par mois doit ??tre des chiffres positifs
          </span>
          {/* fin propri??t?? revenu */}
        </Form>
      </main>
    </section>
  );
}
