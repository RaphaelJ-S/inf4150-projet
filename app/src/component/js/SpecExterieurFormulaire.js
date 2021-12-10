import React from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function SpecExterieurFormulaire({ info, setInfo }) {
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
            <select
              className="form-select"
              aria-label="Selection du type de fondation"
              name="fondation"
              id="fondation"
              onChange={handleChange}
            >
              <option value="Beton">Béton</option>
              <option value="bloc de Beton">Bloc de béton</option>
              <option value="bois traite">Bois traité</option>
            </select>
            <label htmlFor="fondation">Fondation</label>
          </div>
          {/** TODO trouver une maniere elegante d'incorporer
           * un champ de text dans des form de selections */}
          <div className="form-floating">
            <input
              list="numeroAppartement"
              className="form-control"
              id="revetExterieur"
              name="revetExterieur"
              autoFocus
              onChange={handleChange}
            />
            <datalist id="revetExterieur"></datalist>
            <label htmlFor="revetExterieur">Revêtement extérieur</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de vitrage"
              name="fenVitrage"
              id="fenVitrage"
              onChange={handleChange}
            >
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
              onChange={handleChange}
            >
              <option value="Bois">Bois</option>
              <option value="Vinyle / PVC">Vinyle / PVC</option>
              <option value="Aluminium">Aluminium</option>
            </select>
            <label htmlFor="fenConstruction">Fenêtre: Construction</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="toiture"
              name="toiture"
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="toiture">Âge de la toiture: </label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de l'etat de la toiture"
              name="etatToiture"
              id="etatToiture"
              onChange={handleChange}
            >
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
            <label htmlFor="etatToiture">État de la toiture</label>
          </div>
          {/** TODO trouver une maniere elegante d'incorporer
           * un  de text dans des form de selections */}
          <div className="form-floating">
            <input
              list="numeroAppartement"
              className="form-control"
              id="tailleTerrain"
              name="tailleTerrain"
              autoFocus
              onChange={handleChange}
            />
            <datalist id="tailleTerrain"></datalist>
            <label htmlFor="tailleTerrain">Taille du terrain</label>
          </div>
          {/** plus qu'un choix possible dois faire des case et non un dropdown */}
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection des amenagements exterieurs"
              name="amenagementTerrain"
              id="amenagementTerrain"
              onChange={handleChange}
            >
              <option value="pelouse">Pelouse</option>
              <option value="terrasse non couverte">
                Terrasse (patio) non couverte
              </option>
              <option value="cloture">Clôture</option>
              <option value="boise">Boisé</option>
              <option value="gazebo">Gloriette (Gazebo)</option>
              <option value="haie">Haie</option>
              <option value="terrasse couverte">
                Terrasse (patio) couverte
              </option>
              <option value="cabanon">Cabanon</option>
            </select>
            <label htmlFor="amenagementTerrain">Aménagements extérieurs:</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de la piscine"
              name="piscine"
              id="piscine"
              onChange={handleChange}
            >
              <option value="non">Non</option>
              <option value="creuse">Creusée</option>
              <option value="semi-creuse">Semi-creusée</option>
              <option value="de surface">De surface</option>
            </select>
            <label htmlFor="amenagementTerrain">Piscine: </label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection de l'etat de la toiture"
              name="amenagementTerrain"
              id="amenagementTerrain"
              onChange={handleChange}
            >
              <option value="pelouse">Pelouse</option>
              <option value="terrasse non couverte">
                Terrasse (patio) non couverte
              </option>
              <option value="cloture">Clôture</option>
              <option value="boise">Boisé</option>
              <option value="gazebo">Gloriette (Gazebo)</option>
              <option value="haie">Haie</option>
              <option value="terrasse couverte">
                Terrasse (patio) couverte
              </option>
              <option value="cabanon">Cabanon</option>
            </select>
            <label htmlFor="amenagementTerrain">État de la toiture</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du type de couverture du stationnement"
              name="stationnementCouverture"
              id="stationnementCouverture"
              onChange={handleChange}
            >
              <option value="Couvert">Couvert</option>
              <option value="Non couvert">Non couvert</option>
              <option value="Garage">Garage</option>
            </select>
            <label htmlFor="stationnementCouverture">
              Couverture du stationnement:{" "}
            </label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du nombre de place de stationnement"
              name="placeStationnement"
              id="placeStationnement"
              onChange={handleChange}
            >
              <option value="1voiture">1 voiture</option>
              <option value="2voiture">2 voitures</option>
              <option value="aucun">Aucun</option>
            </select>
            <label htmlFor="placeStationnement">
              Couverture du stationnement:{" "}
            </label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du matériel de l'entree"
              name="entree"
              id="entree"
              onChange={handleChange}
            >
              <option value="asphalte">Asphalte</option>
              <option value="paveebeton">Pavé de béton</option>
              <option value="gravier">Gravier</option>
              <option value="terre">Terre</option>
            </select>
            <label htmlFor="entree">Type d'entrée: </label>
          </div>

          {/* Trouvé une bonne manière de représenté l'ensoleillement <div className="form-floating">
            <select
              className="form-select"
              aria-label="Selection du nombre de place de stationnement"
              name="placeStationnement"
              id="placeStationnement"
              onChange={handleChange}
            >
              <option value="1voiture">1 voiture</option>
              <option value="2voiture">2 voitures</option>
              <option value="aucun">Aucun</option>
            </select>
            <label htmlFor="placeStationnement">Couverture du stationnement: </label>
          </div> */}
        </Form>
      </main>
    </section>
  );
}
