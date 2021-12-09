import React, { useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecInterieurPartie1Formulaire({ info, setInfo }) {
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
          <span className="error-field">Le champ Adresse doit être rempli</span>
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
            />
            <span className="error-field">
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
            />
            <span className="error-field">
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
            />
            <span className="error-field">
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
            >
              <option value="">Sélectionnez le chauffe-eau</option>
              <option value="loue">Loué</option>
              <option value="achete">Acheté</option>
            </select>
            <span className="error-field">
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
            >
              <option value="">Sélectionnez le type du chauffe-eau</option>
              <option value="gaz">Gaz</option>
              <option value="electricite">Électricité</option>
              <option value="mazout">Mazout</option>
            </select>
            <span className="error-field">
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
              />
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
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
            >
              <option value="">Sélectionnez le type de chauffage</option>
              <option value="gaz">Gaz</option>
              <option value="electricite">Électricité</option>
              <option value="mazout">Mazout</option>
              <option value="bois">Bois</option>
              <option value="granules">Granules</option>
            </select>
            <span className="error-field">
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
            <span className="error-field">
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
