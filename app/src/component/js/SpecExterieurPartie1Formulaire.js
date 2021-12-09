import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecExterieurPartie1Formulaire({ info, setInfo }) {
  const regNbrPositif = /^\d+$/;
  const regTexteNorm = /^\D+$/;
  const regPasVide = /^.+$/;

  useEffect(() => {
    validateWholeForm();
  }, []);

  const validateWholeForm = () => {};

  const validateForm = (element) => {
    const elem_id = element.target.id;
    const error_text = element.target.nextSibling;
    switch (elem_id) {
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
            >
              <option value="">Sélectionnez le matériel des fondations</option>
              <option value="Beton">Béton</option>
              <option value="bloc de Beton">Bloc de béton</option>
              <option value="bois traite">Bois traité</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
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
                name="autreRevet"
                value={info.autreRevet}
                placeholder="Entrez le matériel alternatif"
                disabled={info.revetExterieur !== "autre"}
                onChange={handleChange}
              />
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
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
            >
              <option value="">Sélectionnez le type de vitrage</option>
              <option value="simple">Simple</option>
              <option value="double">Double</option>
              <option value="triple">Triple</option>
              <option value="faible emissivite">Faible emissivité</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
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
            >
              <option value="">Sélectionnez le matériel de la fenêtre</option>
              <option value="bois">Bois</option>
              <option value="vinylePvc">Vinyle / PVC</option>
              <option value="aluminium">Aluminium</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="fenConstruction">Fenêtre: Construction</label>
          </div>
          <br />
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
            >
              <option value="">
                Sélectionnez l'état général de la toiture
              </option>
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
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
              />
              <label htmlFor="toiture" className="input-group-text noselect">
                années
              </label>
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
          {/* fin âge toiture */}
        </Form>
      </main>
    </section>
  );
}
