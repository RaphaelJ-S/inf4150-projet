import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function HabitationFormulaire({ info, setInfo }) {
  const btnStyle = {
    backgroundColor: "white",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    if (info.proprieteRevenu === "false") {
      setInfo({ ...info, revenuMensuel: "" });
    }
  }, [info.proprieteRevenu]);
  return (
    <section className="text-center">
      <main className="form-signin">
        <Form>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="prixDem"
              name="prixDemande"
              value={info.prixDemande}
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="prixDem">Prix Demandé</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="eval"
              name="evalMunicipale"
              value={info.evalMunicipale}
              onChange={handleChange}
            />
            <label htmlFor="eval">Évaluation municipale</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="taxeSchol"
              name="taxeScholaire"
              value={info.taxeSchol}
              onChange={handleChange}
            />
            <label htmlFor="taxeSchol">Montant de la taxe scolaire</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="taxeMuni"
              name="taxeMunicipale"
              value={info.taxeMunicipale}
              onChange={handleChange}
            />
            <label htmlFor="taxeMuni">Montant de la taxe municipale</label>
          </div>

          <br />
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la construction"
              name="construction"
              id="construct"
              value={info.construction}
              onChange={handleChange}
            >
              <option selected>Sélectionez l'état de la construction</option>
              <option value="existante">Existante</option>
              <option value="neuve">Neuve</option>
            </select>
            <label htmlFor="construct">Construction</label>
          </div>

          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type d'habitation"
              name="typeHabitation"
              id="typeHabitation"
              value={info.typeHabitation}
              onChange={handleChange}
            >
              <option selected>Choisissez un type d'habitation</option>
              <option value="maisonIndividuelle">Maison individuelle</option>
              <option value="duplex">Duplex</option>
              <option value="tourHabitation">Tour d'habitation</option>
              <option value="maisonJumelee">Maison jumelée</option>
              <option value="triplex">Triplex</option>
              <option value="bungalow">Plain-pied(bungalow)</option>
              <option value="maisonRangee">Maison en rangée</option>
              <option value="immeuble">Petit immeuble</option>
              <option value="copropriete">Copropriété</option>
            </select>
            <label htmlFor="typeHabitation">Type d'habitation</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du quartier"
              name="quartier"
              id="quartier"
              value={info.quartier}
              onChange={handleChange}
            >
              <option selected>Sélectionnez le zonage du quartier</option>
              <option value="residentiel">Résidentiel</option>
              <option value="commerce-industriel">
                Commercial ou industriel
              </option>
              <option value="rural">Rural</option>
            </select>
            <label htmlFor="quartier">Quartier</label>
          </div>
          <br />
          <div className="proRev">
            <div className="label-texte">
              <label htmlfor="revenu" className="label noselect">
                Propriété à revenu?
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
              />
              <label htmlFor="revenu" className="input-group-text noselect">
                $/m
              </label>
            </div>
          </div>
        </Form>
      </main>
    </section>
  );
}
