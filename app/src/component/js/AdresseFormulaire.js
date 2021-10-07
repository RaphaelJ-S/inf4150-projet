import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function AdresseFormulaire({ info, setInfo }) {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="numeroCivic"
              name="numeroCivic"
              value={info.numeroCivic}
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="numeroCivic">Numéro Civic</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="rue"
              name="nomRue"
              value={info.nomRue}
              onChange={handleChange}
            />
            <label htmlFor="rue">Nom de rue</label>
          </div>
          {/** TODO */}
          <div className="form-floating">
            <input
              list="numeroAppartement"
              className="form-control"
              id="numeroAppartement"
              name="numeroAppartement"
              value={info.numeroAppartement}
              onChange={handleChange}
            />
            <datalist id="numeroAppartement">
              option
              <option value="Non applicable"></option>
              <option value="Numero"></option>
            </datalist>
            <label htmlFor="numeroAppartement">Numero d'appartement</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="codePostal"
              name="codePostal"
              value={info.codePostal}
              onChange={handleChange}
            />
            <label htmlFor="rue">Code postal</label>
          </div>
          <div className="proRev">
            <div className="label-texte">
              <label htmlfor="ageImmeuble" className="label noselect">
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
              />
              <label
                htmlFor="ageImmeuble"
                className="input-group-text noselect"
              >
                années
              </label>
            </div>
          </div>
          <br />

          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du bruit ambiant"
              name="bruitAmbiant"
              id="bruit"
              value={info.bruitAmbiant}
              onChange={handleChange}
            >
              <option selected>Sélectionnez le niveau de bruit ambiant</option>
              <option value="aucun">Aucun</option>
              <option value="acceptable">Acceptable</option>
              <option value="irritant">Irritant</option>
            </select>
            <label htmlFor="bruitAmbiant">Bruit ambiant</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'égout"
              name="egout"
              value={info.egout}
              id="egout"
              onChange={handleChange}
            >
              <option selected>
                Sélectionnez le type d'installation sanitaire
              </option>
              <option value="municipale">Municipale</option>
              <option value="fosse sceptique">Fosse sceptique</option>
            </select>
            <label htmlFor="egout">Égout</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'approvisionnement en eau"
              name="eau"
              id="eau"
              value={info.eau}
              onChange={handleChange}
            >
              <option selected>
                Sélectionnez le type d'approvisionnement d'eau
              </option>
              <option value="municipale">Municipalité</option>
              <option value="puit">Puit</option>
            </select>
            <label htmlFor="eau">Eau</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la circulation"
              name="circulation"
              value={info.circulation}
              id="circulation"
              onChange={handleChange}
            >
              <option selected>Sélectionnez le niveau de ciculation</option>
              <option value="voiePrincipale">Voie principale</option>
              <option value="rueTranquille">Rue tranquille</option>
              <option value="cds">Cul-de-sac</option>
            </select>
            <label htmlFor="circulation">Circulation</label>
          </div>
        </Form>
      </main>
    </section>
  );
}
