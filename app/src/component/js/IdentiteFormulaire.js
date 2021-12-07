import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form, InputGroup } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function IdentiteFormulaire({ info, setInfo }) {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const validateForm = (element) => {
    const regTelephone = /^\d{10}$/;
    const regTexteNorm = /^\D+$/;
    const regCourriel = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let input = element.target.nextSibling;
    console.log(input);
    if (element.target.id == "floatingAdresse") {
      if (!regTexteNorm.test(info.adresse)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id == "floatingCourtier") {
      if (!regTexteNorm.test(info.courtier)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id == "floatingPhone") {
      if (!regTelephone.test(info.telephone)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id == "floatingCell") {
      if (!regTelephone.test(info.cellulaire)) {
        input.classList.add("show-error");
      }
    } else if (element.target.id == "floatingEmail") {
      if (!regCourriel.test(info.email)) {
        input.classList.add("show-error");
      }
    }

    if (
      regTexteNorm.test(info.adresse) &&
      regTexteNorm.test(info.courtier) &&
      regTelephone.test(info.telephone) &&
      regTelephone.test(info.cellulaire) &&
      regCourriel.test(info.email)
    ) {
      setInfo({ ...info, validated: true });
    } else {
      setInfo({ ...info, validated: false });
    }
  };
  const resetError = (element) => {
    element.target.nextSibling.classList.remove("show-error");
  };
  return (
    <>
      <section className="text-center">
        <main className="form-signin">
          <Form noValidate validated={info.validated}>
            {/* début adresse */}
            <div className="form-floating">
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
                Le champ Adresse doit être rempli
              </span>
              <label htmlFor="floatingAdresse">Adresse</label>
            </div>
            {/* fin adresse */}

            {/* début courtier */}
            <div className="form-floating">
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
                Le champ Courtier doit être rempli
              </span>

              <label htmlFor="floatingCourtier">Courtier/Vendeur</label>
            </div>
            {/* fin courtier */}

            {/* début téléphone */}
            <div className="form-floating">
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
                Doit être 10 chiffres positifs de suite
              </span>
              <label htmlFor="floatingPhone">Téléphone</label>
            </div>
            {/* fin téléphone */}

            {/* début cellulaire */}
            <div className="form-floating">
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
                Doit être 10 chiffres positifs de suite
              </span>
              <label htmlFor="floatingCell">Cellulaire</label>
            </div>
            {/* fin cellulaire */}

            {/* début email */}
            <div className="form-floating">
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
                Doit être un format d'adresse valide ex:test@courrier.com
              </span>
              <label htmlFor="floatingEmail">Courriel</label>
            </div>
            {/* fin email */}
          </Form>
        </main>
      </section>
    </>
  );
}
