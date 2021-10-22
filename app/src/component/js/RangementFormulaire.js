import React from "react";
import {Form,Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function RangementFormulaire({info, setInfo}) {
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
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="rangementRezDeChausse" className="label noselect">
                Rangement suffisant au rez-de-chaussé
              </label>
            </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="rezDeChausse"
              name="rezDeChausse"
              value="Oui"
              onChange={handleChange}
            />
            <label htmlFor="rangementRezDeChausseOui" className="form-check-label">
              Oui
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="rezDeChausse"
              name="rezDeChausse"
              value="Non"
              onChange={handleChange}
            />
            <label htmlFor="rangementRezDeChausseNon" className="form-check-label">
              Non
            </label>
            </div>
          </div>
         
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="rangementCuisine" className="label noselect">
                Rangement suffisant dans la cuisine
              </label>
            </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Cuisine"
              name="Cuisine"
              value="Oui"
              onChange={handleChange}
            />
            <label htmlFor="rangementCuisineOui" className="form-check-label">
              Oui
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Cuisine"
              name="Cuisine"
              value="Non"
              onChange={handleChange}
            />
            <label htmlFor="rangementCuisineNon" className="form-check-label">
              Non
            </label>
            </div>
          </div>
          
          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="rangementPremierEtage" className="label noselect">
                Rangement suffisant au premier étage
              </label>
            </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="PEtage"
              name="PEtage"
              value="Oui"
              onChange={handleChange}
            />
            <label htmlFor="rangementPremierEtageOui" className="form-check-label">
              Oui
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="PEtage"
              name="PEtage"
              value="Non"
              onChange={handleChange}
            />
            <label htmlFor="rangementPremierEtageNon" className="form-check-label">
              Non
            </label>
            </div>
          </div>

          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="rangementDeuxiemeEtage" className="label noselect">
                Rangement suffisant au deuxième étage
              </label>
            </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="DEtage"
              name="DEtage"
              value="Oui"
              onChange={handleChange}
            />
            <label htmlFor="rangementDeuxiemeEtageOui" className="form-check-label">
              Oui
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="DEtage"
              name="DEtage"
              value="Non"
              onChange={handleChange}
            />
            <label htmlFor="rangementDeuxiemeEtageNon" className="form-check-label">
              Non
            </label>
            </div>
          </div>

          <div className="proRev">
            <div className="label-texte">
              <label htmlFor="rangementSousSol" className="label noselect">
                Rangement suffisant au sous-sol
              </label>
            </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="sousSol"
              name="sousSol"
              value="Oui"
              onChange={handleChange}
            />
            <label htmlFor="rangementSousSolOui" className="form-check-label">
              Oui
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="sousSol"
              name="sousSol"
              value="Non"
              onChange={handleChange}
            />
            <label htmlFor="rangementSousSolNon" className="form-check-label">
              Non
            </label>
            </div>
          </div>

          {/* fin espace bureau */}
        </Form>
      </main>
    </section>
  );
}
