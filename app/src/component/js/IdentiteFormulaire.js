import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form, InputGroup } from "react-bootstrap";
import "../css/FicheVisite.css";
import ReactTooltip from 'react-tooltip';

export default function IdentiteFormulaire({ info, setInfo }) {
  const regTelephone = /^\d{10}$/;
  const regTexteNorm = /^\D+$/;
  const regCourriel = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regPasVide = /^.+$/;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const validateWholeForm = () => {
    if (
      regPasVide.test(info.adresse) &&
      regTexteNorm.test(info.courtier) &&
      regTelephone.test(info.telephone) &&
      regTelephone.test(info.cellulaire) &&
      regCourriel.test(info.email)
    ) {
      setInfo({ ...info, validated: true, validatedId: true });
    } else {
      setInfo({ ...info, validatedId: false, validated: false });
    }
  };

  const validateForm = (element) => {
    let input = element.target.nextSibling;
    if (element.target.id === "floatingAdresse") {
      if (!regPasVide.test(info.adresse)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "floatingCourtier") {
      if (!regTexteNorm.test(info.courtier)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "floatingPhone") {
      if (!regTelephone.test(info.telephone)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "floatingCell") {
      if (!regTelephone.test(info.cellulaire)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id === "floatingEmail") {
      if (!regCourriel.test(info.email)) {
        input.classList.add("show-error");
      }
    }

    validateWholeForm();
  };
  const resetError = (element) => {
    element.target.nextSibling.classList.remove("show-error");
  };
  return (
    <>
      <section className="text-center">
        <main className="form-signin">
          <Form noValidate validated={info.validatedId}>
            {/* d??but adresse */}
            <div className="form-floating" data-tip data-for='adresse'>
              <input
                type="text"
                className="form-control"
                id="floatingAdresse"
                name="adresse"
                value={info.adresse}
                onChange={handleChange}
                onFocus={resetError}
                onBlur={validateForm}
                autoFocus
              />
              <span id="error-adresse" className="error-field">
                Le champ Adresse doit ??tre rempli
              </span>
              <label htmlFor="floatingAdresse">Adresse</label>
              <ReactTooltip id='adresse' type='error'>
              <span>L'adresse de la r??sidence</span>
              </ReactTooltip>
            </div>
            {/* fin adresse */}

            {/* d??but courtier */}
            <div className="form-floating" data-tip data-for='courtier'>
              <input
                type="text"
                className="form-control"
                id="floatingCourtier"
                name="courtier"
                value={info.courtier}
                onChange={handleChange}
                onFocus={resetError}
                onBlur={validateForm}
              />
              <span className="error-field">
                Le champ Courtier doit ??tre rempli
              </span>

              <label htmlFor="floatingCourtier">Courtier/Vendeur</label>
              <ReactTooltip id='courtier' type='error'>
              <span>Le nom du courtier</span>
              </ReactTooltip>
            </div>
            {/* fin courtier */}

            {/* d??but t??l??phone */}
            <div className="form-floating" data-tip data-for='telephone'>
              <input
                type="text"
                className="form-control"
                id="floatingPhone"
                name="telephone"
                value={info.telephone}
                onChange={handleChange}
                onFocus={resetError}
                onBlur={validateForm}
              />
              <span className="error-field">
                Doit ??tre 10 chiffres positifs de suite
              </span>
              <label htmlFor="floatingPhone">T??l??phone</label>
              <ReactTooltip id='telephone' type='error'>
              <span>Votre num??ro de t??l??phone</span>
              </ReactTooltip>
            </div>
            {/* fin t??l??phone */}

            {/* d??but cellulaire */}
            <div className="form-floating" data-tip data-for='cellulaire'>
              <input
                type="text"
                className="form-control"
                id="floatingCell"
                name="cellulaire"
                value={info.cellulaire}
                onChange={handleChange}
                onFocus={resetError}
                onBlur={validateForm}
              />
              <span className="error-field">
                Doit ??tre 10 chiffres positifs de suite
              </span>
              <label htmlFor="floatingCell">Cellulaire</label>
              <ReactTooltip id='cellulaire' type='error'>
              <span>Votre num??ro de cellulaire</span>
              </ReactTooltip>
            </div>
            {/* fin cellulaire */}

            {/* d??but email */}
            <div className="form-floating" data-tip data-for='email'>
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                name="email"
                value={info.email}
                onChange={handleChange}
                onFocus={resetError}
                onBlur={validateForm}
              />
              <span className="error-field">
                Doit ??tre un format d'adresse valide ex:test@courrier.com
              </span>
              <label htmlFor="floatingEmail">Courriel</label>
              <ReactTooltip id='email' type='error'>
              <span>Votre adresse courriel</span>
              </ReactTooltip>
            </div>
            {/* fin email */}
          </Form>
        </main>
      </section>
    </>
  );
}
