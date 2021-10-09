import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function IdentiteFormulaire({ info, setInfo }) {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };
  return (
    <>
      <section className="text-center">
        <main className="form-signin">
          <Form>
            {/* début adresse */}
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingAdresse"
                name="adresse"
                value={info.adresse}
                onChange={handleChange}
                autoFocus
              />
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
              />
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
              />
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
              />
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
              />
              <label htmlFor="floatingEmail">Courriel</label>
            </div>
            {/* fin email */}
          </Form>
        </main>
      </section>
    </>
  );
}
