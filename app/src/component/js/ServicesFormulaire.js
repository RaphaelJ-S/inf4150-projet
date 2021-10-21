import React from "react";
import {Form,Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


export default function ServicesFormulaire({ info, setInfo }) {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleAddClick = (event) =>{

  };
  const handleRemoveClick = (event) =>{};

  return(
      <section className="text-center">
        <main className="form-signin">
          <Form>
            {/* début Autres infos - Proximité */}
            {/* début chauffe-eau */}
            <div className="form-floating">
              <select
                  className="form-select"
                  aria-label="Selection à proximité"
                  name="proximite"
                  id="proximite"
                  value={info.proximite}
                  onChange={handleChange}
              >
                <option value="">Sélectionnez  </option>
                <option value="travail">Travail</option>
                <option value="TravailConjoint">Travail du conjoint</option>
                <option value="ecole">École</option>
                <option value="transport">Transport en commun</option>
                <option value="epiceries">Épiceries</option>
                <option value="centresCommerciaux">Centres Commerciaux</option>
                <option value="centresRecreatifs">Centres Récréatifs</option>
                <option value="lieuxCulte">Lieu de culte</option>
                <option value="medecin">Médecin</option>
                <option value="hopital">Hôpital</option>
                <option value="servicePolice">Service de police</option>
                <option value="serviceIncendies">Service d'incendie</option>
                <option value="dentiste">Dentiste</option>
                <option value="Veterinaire">Vétérinaire</option>
              </select>
              <label htmlFor="proximite">En proximité de: </label>
            </div>

            {/* début km à proximité */}
            <div className="form-floating">
            <input
                type="text"
                className="form-control"
                id="km"
                name="km"
                value={info.km}
                placeholder="Distance en km"
                disabled={info.proximite === ""}
                onChange={handleChange}
            />
            <label htmlFor="km">Distance (en km)</label>
            </div>
            <div className="form-floating">
            <Button variant="primary"
                    onClick={handleAddClick}
            >
              <FontAwesomeIcon icon={faPlus}/>
            </Button>
            <Button variant="danger"
                    onClick={handleRemoveClick}
            >
              <FontAwesomeIcon icon={faMinus}/>
            </Button>
            </div>
            {/* fin km à proximité */}
            {/* fin Autres infos - Proximité*/}
          </Form>
        </main>
      </section>
  );
}
