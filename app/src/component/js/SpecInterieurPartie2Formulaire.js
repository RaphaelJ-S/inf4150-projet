import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecInterieurPartie1Formulaire({ info, setInfo }) {
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
        <Form>
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
          {/* fin type sécurite feu*/}
        </Form>
      </main>
    </section>
  );
}
