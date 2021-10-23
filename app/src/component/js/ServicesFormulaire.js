import React from "react";
import {Form,Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


export default function ServicesFormulaire({ info, setInfo }) {

  const handleChange = (e) => {
    console.log(info.proximite);
    let uptItems = [...info.proximite];
    uptItems[e.target.id].valeur = e.target.value;
    setInfo({ ...info, proximite: uptItems });
  };

  const handleChangeDist = (e) => {
    let uptItems = [...info.proximite];
    uptItems[e.target.id].distance = e.target.value;
    setInfo({ ...info, proximite: uptItems });
};

  const addItem = (e) => {
    e.preventDefault();
    let item = {
      id: info.proximite.length,
      valeur: "",
      distance: "",
    };
    setInfo({ ...info, proximite: [...info.proximite, item] });
  };

  const removeItem = (e) => {
    e.preventDefault();
    info.proximite.pop();
    setInfo({ ...info, proximite: [...info.proximite] });
    console.log(info.proximite);
}

  return(
      <section className="text-center">
        <main className="form-signin">
          <Form>
            {/* début Autres infos - Proximité */}
            {/* début chauffe-eau */}
            {info.proximite.map((elem) => {
        return (
          <div key={elem.id}>
            <div className="form-floating">
              <select
                  className="form-select"
                  aria-label="Selection à proximité"
                  name="proximite"
                  id={elem.id}
                  value={elem.valeur}
                  onChange={handleChange}
              >
                <option value="">Sélectionnez  </option>
                <option value="Travail">Travail</option>
                <option value="Travail du conjoint">Travail du conjoint</option>
                <option value="École">École</option>
                <option value="Transport en commun">Transport en commun</option>
                <option value="Épiceries">Épiceries</option>
                <option value="Centres Commerciaux">Centres Commerciaux</option>
                <option value="Centres Récréatifs">Centres Récréatifs</option>
                <option value="Lieu de culte">Lieu de culte</option>
                <option value="Médecin">Médecin</option>
                <option value="Hôpital">Hôpital</option>
                <option value="Service de police">Service de police</option>
                <option value="Service d'incendie">Service d'incendie</option>
                <option value="Dentiste">Dentiste</option>
                <option value="Veterinaire">Vétérinaire</option>
              </select>
              <label htmlFor="proximite">En proximité de: </label>
            </div>
            <div className="form-floating">
            <input
                type="text"
                className="form-control"
                id={elem.id}
                name="km"
                value={elem.distance}
                placeholder="Distance en km"
                disabled={elem.valeur === ""}
                onChange={handleChangeDist}
            />
            <label htmlFor="km">Distance (en km)</label>
            </div>
            {/* fin km à proximité */}
            {/* fin Autres infos - Proximité*/}
          </div>
            );
          })}
          <div className="form-floating">
            <Button variant="primary" onClick={addItem}>
            <FontAwesomeIcon icon={faPlus}/>
            </Button>
            <Button variant="danger" onClick={removeItem}>
            <FontAwesomeIcon icon={faMinus}/>
            </Button>
          </div>
          </Form>
        </main>
      </section>
  );
}
