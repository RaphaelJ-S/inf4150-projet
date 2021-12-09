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
  const handleChangeBool = (event) => {
    const name = event.target.name;
    const value = !info[name];
    setInfo({ ...info, [name]: value });
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={info.validatedSpecInt2}>
          {/* début ventilateur-récupérateur */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Existance du ventilateur-récupérateur"
              name="recuperateur"
              id="recuperateur"
              value={info.recuperateur}
              onChange={handleChange}
            >
              <option value="">
                Sélectionnez s'il y a un ventilateur-récupérateur ou non
              </option>
              <option value="non">Non</option>
              <option value="oui">Oui</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="recuperateur">
              Ventilateur-récupérateur de chaleur{" "}
            </label>
          </div>
          {/* fin ventilateur-récupérateur */}

          {/* début type climatisation */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de climatisation"
              name="climatisation"
              id="climatisation"
              value={info.climatisation}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de climatisation</option>
              <option value="aucune">Aucune</option>

              <option value="systemeCentral">Système central</option>
              <option value="fenetre">Fenêtre</option>
            </select>
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="climatisation">Type de climatisation </label>
          </div>
          {/* fin type climatisation */}
          {/* début type sécurite feu*/}

          <div className="proRev">
            <div className="label-texte">
              <label
                htmlFor="exterieurDevantSoleilAM"
                className="label noselect"
              >
                Type(s) de sécurité contre le feu
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="securiteAlarme"
                id="securiteAlarme"
                onChange={handleChangeBool}
                checked={info.securiteAlarme}
              />
              <label htmlFor="securiteAlarme" className="form-check-label">
                Alarmes
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="securiteDetecteur"
                id="securiteDetecteur"
                onChange={handleChangeBool}
                checked={info.securiteDetecteur}
              />
              <label htmlFor="securiteDetecteur" className="form-check-label">
                Détecteurs de fumée
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="securiteExtincteur"
                id="securiteExtincteur"
                onChange={handleChangeBool}
                checked={info.securiteExtincteur}
              />
              <label htmlFor="securiteExtincteur" className="form-check-label">
                Extincteurs
              </label>
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
          {/* fin type sécurite feu*/}

          {/* début nombre de pièces */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrPieces"
              name="nbrPieces"
              value={info.nbrPieces}
              onChange={handleChange}
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrPieces">Nombre de pièces</label>
          </div>
          {/* fin nombre de pièces */}

          {/* début nombre chambres à coucher rez-de-chaussée */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrChambreRDC"
              name="nbrChambreRDC"
              value={info.nbrChambreRDC}
              onChange={handleChange}
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrChambreRDC">
              Nombre de chambres à coucher : Rez-de-chaussée
            </label>
          </div>
          {/* fin nombre chambres à coucher rez-de-chaussée */}

          {/* début nombre chambres à coucher Etage */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrChambreEtage"
              name="nbrChambreEtage"
              value={info.nbrChambreEtage}
              onChange={handleChange}
            />
            <span className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="nbrChambreEtage">
              Nombre de chambres à coucher : Étage
            </label>
          </div>
          {/* fin nombre chambres à coucher Etage */}

          {/* début nombre chambres à coucher sous-sol */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrChambreSS"
              name="nbrChambreSS"
              value={info.nbrChambreSS}
              onChange={handleChange}
            />
            <label htmlFor="nbrChambreSS">
              Nombre de chambre à coucher : Sous-sol
            </label>
          </div>
          {/* fin nombre chambres à coucher sous-sol */}
          <p className="mt-3"></p>
          {/* début salle de bain dans salle coucher principale */}
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="bainPrincipale" className="label noselect">
                Chambre à coucher principale avec salle de bain
              </label>
            </div>
            <select
              className="form-select sm"
              size="sm"
              name="bainPrincipale"
              id="bainPrincipale"
              value={info.bainPrincipale}
              aria-label="Selection du système électrique"
              onChange={handleChange}
            >
              <option value="">
                Sélectionnez l'existance d'une salle de bain et ses
                spécifications
              </option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="doucheBainPrincipale"
                id="doucheBainPrincipale"
                disabled={info.bainPrincipale !== "oui"}
                onChange={handleChangeBool}
                checked={info.doucheBainPrincipale}
              />
              <label
                htmlFor="doucheBainPrincipale"
                className="form-check-label"
              >
                Douche
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="baignoireBainPrincipale"
                id="baignoireBainPrincipale"
                disabled={info.bainPrincipale !== "oui"}
                onChange={handleChangeBool}
                checked={info.baignoireBainPrincipale}
              />
              <label htmlFor="securiteDetecteur" className="form-check-label">
                Baignoire
              </label>
            </div>
          </div>
          <span className="error-field">Le champ Adresse doit être rempli</span>
          {/* fin salle de bain dans salle coucher principale */}
        </Form>
      </main>
    </section>
  );
}
