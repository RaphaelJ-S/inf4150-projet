import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecExterieurFormulaire({ info, setInfo }) {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleChangeAmenagements = (event) => {
    const name = event.target.name;
    const value = !info[name];
    setInfo({ ...info, [name]: value });
    console.log(info);
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form>
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
              <option defaultValue="">
                Sélectionnez le matériel des fondations
              </option>
              <option value="Beton">Béton</option>
              <option value="bloc de Beton">Bloc de béton</option>
              <option value="bois traite">Bois traité</option>
            </select>
            <label htmlFor="fondation">Fondation</label>
          </div>

          <div className="proRev">
            <div className="label-texte">
              <label htmlfor="revetExterieur" className="label noselect">
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
              <option selected value="">
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
          <br />
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de vitrage"
              name="fenVitrage"
              value={info.fenVitrage}
              id="fenVitrage"
              onChange={handleChange}
            >
              <option selected value="">
                Sélectionnez le type de vitrage
              </option>
              <option value="simple">Simple</option>
              <option value="double">Double</option>
              <option value="triple">Triple</option>
              <option value="faible emissivite">Faible emissivité</option>
            </select>
            <label htmlFor="fenVitrage">Fenêtre: Vitrage</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de construction de fenetre"
              name="fenConstruction"
              id="fenConstruction"
              value={info.fenConstruction}
              onChange={handleChange}
            >
              <option selected value="">
                Sélectionnez le matériel de la fenêtre
              </option>
              <option value="bois">Bois</option>
              <option value="vinylePvc">Vinyle / PVC</option>
              <option value="aluminium">Aluminium</option>
            </select>
            <label htmlFor="fenConstruction">Fenêtre: Construction</label>
          </div>
          <br />
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de l'etat de la toiture"
              name="etatToiture"
              value={info.etatToiture}
              id="etatToiture"
              onChange={handleChange}
            >
              <option selected value="">
                Sélectionnez l'état général de la toiture
              </option>
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
            <label htmlFor="etatToiture">État de la toiture</label>
          </div>
          <div className="proRev">
            <div className="label-texte">
              <label htmlfor="toiture" className="label noselect">
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

          <br />

          <div className="proRev">
            <div className="label-texte taille-terrain">
              <label htmlfor="tailleTerrain" className="label noselect">
                Taille du terrain
              </label>
            </div>
            <select
              className="form-select sm"
              size="sm"
              name="descriptTaille"
              id="desTaille"
              aria-label="Selection de la description de la taille du terrain"
              onChange={handleChange}
            >
              <option selected value="">
                Sélectionnez la taille relative du terrain
              </option>
              <option value="petit">Petit</option>
              <option value="moyen">Moyen</option>
              <option value="grand">Grand</option>
            </select>

            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="tailleTerrain"
                name="tailleTerrain"
                value={info.tailleTerrain}
                placeholder="Entrez la taille du terrain en mètre carré"
                disabled={info.descriptTaille === ""}
                onChange={handleChange}
              />
              <label
                htmlFor="tailleTerrain"
                className="input-group-text noselect"
              >
                &#13217;
              </label>
            </div>
          </div>

          <div className="proRev">
            <div className="label-texte">
              <label htmlfor="amenagementTerrain" className="label noselect">
                Aménagement(s) extérieurs
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="pelouse"
                id="pelouse"
                onChange={handleChangeAmenagements}
                checked={info.pelouse}
              />
              <label htmlFor="pelouse" className="form-check-label">
                Pelouse
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="boise"
                id="boise"
                onChange={handleChangeAmenagements}
                checked={info.aboise}
              />
              <label htmlFor="boise" className="form-check-label">
                Boisé
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="terrasseCouverte"
                id="terrasseCouverte"
                onChange={handleChangeAmenagements}
                checked={info.terrasseCouverte}
              />
              <label htmlFor="terrasseCouverte" className="form-check-label">
                Terrasse(patio) couverte
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="terrasseNonCouverte"
                id="terrasseNonCouverte"
                onChange={handleChangeAmenagements}
                checked={info.terrasseNonCouverte}
              />
              <label htmlFor="terrasseNonCouverte" className="form-check-label">
                Terrasse(patio) non couverte
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="gazebo"
                id="gazebo"
                onChange={handleChangeAmenagements}
                checked={info.gazebo}
              />
              <label htmlFor="gazebo" className="form-check-label">
                Gloriette(Gazebo)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="cabanon"
                id="cabanon"
                onChange={handleChangeAmenagements}
                checked={info.cabanon}
              />
              <label htmlFor="cabanon" className="form-check-label">
                Cabanon
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="cloture"
                id="cloture"
                onChange={handleChangeAmenagements}
                checked={info.cloture}
              />
              <label htmlFor="cloture" className="form-check-label">
                Clôture
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="haie"
                id="haie"
                onChange={handleChangeAmenagements}
                checked={info.haie}
              />
              <label htmlFor="haie" className="form-check-label">
                Haie
              </label>
            </div>
          </div>

          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la piscine"
              name="piscine"
              id="piscine"
              onChange={handleChange}
            >
              <option value="" selected>
                Sélectionnez le type de piscine
              </option>
              <option value="aucune">Aucune</option>
              <option value="creuse">Creusée</option>
              <option value="semi-creuse">Semi-creusée</option>
              <option value="de surface">De surface</option>
            </select>
            <label htmlFor="amenagementTerrain">Piscine: </label>
          </div>
        </Form>
      </main>
    </section>
  );
}
