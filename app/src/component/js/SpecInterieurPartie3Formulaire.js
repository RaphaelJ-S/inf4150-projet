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
          {/* début nombre de salles d'eau : toilette */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrSalleEauToilette"
              name="nbrSalleEauToilette"
              value={info.nbrSalleEauToilette}
              onChange={handleChange}
            />
            <label htmlFor="nbrSalleEauToilette">
              Salle de toilette(toilette + lavabo)
            </label>
          </div>
          {/* fin nombre de salles d'eau : toilette */}

          {/* début nombre de salles d'eau : bains */}
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="nbrSalleEauBain"
              name="nbrSalleEauBain"
              value={info.nbrSalleEauBain}
              onChange={handleChange}
            />
            <label htmlFor="nbrSalleEauBain">
              Salle de bains(toilette + baignoire ou douche)
            </label>
          </div>
          {/* fin nombre de salles d'eau : bains */}

          {/* début laverie */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de laverie"
              name="laverie"
              id="laverie"
              value={info.laverie}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de laverie</option>
              <option value="aucune">Aucune</option>
              <option value="independante">Indépendante</option>
              <option value="jumelee">Jumelée à la salle de toilette</option>
            </select>
            <label htmlFor="climatisation">Type de laverie </label>
          </div>
          {/* fin laverie */}
          <p className="mt-3"></p>
          {/* début salle à manger */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de salle à manger"
              name="salleManger"
              id="salleManger"
              value={info.salleManger}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de salle à manger</option>
              <option value="aucune">Aucune</option>
              <option value="separer">Séparée</option>
              <option value="jumeleeCuisine">Jumelée à la cuisine</option>
              <option value="jumeleeSalon">Jumelée au salon</option>
            </select>
            <label htmlFor="salleManger">Salle à manger</label>
          </div>
          {/* fin salle à manger */}
          {/* début salon */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de salon"
              name="salon"
              id="salon"
              value={info.salon}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de salon</option>
              <option value="aucun">Aucun</option>
              <option value="separer">Séparé</option>
              <option value="jumeleeCuisine">Jumelé à la cuisine</option>
              <option value="jumeleeSalon">Jumelé à la salle à manger</option>
            </select>
            <label htmlFor="salon">Salon</label>
          </div>
          {/* fin salon */}
          <p className="mt-3"></p>
          {/* début foyer */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de foyer"
              name="foyer"
              id="foyer"
              value={info.foyer}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de foyer</option>
              <option value="aucun">Aucun</option>
              <option value="bois">Bois</option>
              <option value="gaz">Gaz</option>
            </select>
            <label htmlFor="foyer">Foyer</label>
          </div>
          {/* fin foyer */}

          {/* début poele */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="sélection du type de poele"
              name="poele"
              id="poele"
              value={info.poele}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le type de poêle</option>
              <option value="aucune">Aucun</option>
              <option value="bois">Bois</option>
              <option value="granules">Granules</option>
            </select>
            <label htmlFor="poele">Poêle</label>
          </div>
          {/* fin poele */}

          {/* début espace bureau */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Existance d'un espace de bureau"
              name="espaceBureau"
              id="espaceBureau"
              value={info.espaceBureau}
              onChange={handleChange}
            >
              <option value="">
                Sélectionnez l'existance d'un espace de bureau
              </option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
            <label htmlFor="espaceBureau">Espace de bureau</label>
          </div>
          {/* fin espace bureau */}
        </Form>
      </main>
    </section>
  );
}
