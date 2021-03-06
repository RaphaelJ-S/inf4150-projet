import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function OccupationEtInclusFormulaire({ info, setInfo }) {
  const handleChange = (e) => {
    let uptItems = [...info.inclus];
    uptItems[e.target.id].valeur = e.target.value;
    setInfo({ ...info, inclus: uptItems });
  };

  const handleChangeDate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleChangeDesc = (e) => {
    let uptItems = [...info.inclus];
    uptItems[e.target.id].description = e.target.value;
    setInfo({ ...info, inclus: uptItems });
  };

  const addItem = (e) => {
    e.preventDefault();
    let item = {
      id: info.inclus.length,
      valeur: "",
      description: "",
    };
    setInfo({ ...info, inclus: [...info.inclus, item] });
  };

  const removeItem = (e) => {
    e.preventDefault();
    info.inclus.pop();
    setInfo({ ...info, inclus: [...info.inclus] });
    console.log(info.inclus);
  };

  return (
    <section className="text-center">
      <main className="form-signin">
        <Form noValidate validated={true}>
          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="dateOccupation"
              name="dateOccupation"
              value={info.dateOccupation}
              onChange={handleChangeDate}
            />
            <span id="dateOccupation-error" className="error-field">
              Le champ Adresse doit être rempli
            </span>
            <label htmlFor="dateOccupation">Date d'occupation</label>
          </div>
          <br />
          {info.inclus.map((elem) => {
            return (
              <div key={elem.id}>
                <div className="form-floating">
                  <select
                    className="form-select"
                    aria-label="Selection inclus"
                    name="inclus"
                    id={elem.id}
                    value={elem.valeur}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Stores">Stores</option>
                    <option value="Luminaires">Luminaires</option>
                    <option value="Équipements">Équipements</option>
                    <option value="Entretien extérieur">
                      Entretien extérieur
                    </option>
                    <option value="Autres">Autres</option>
                  </select>
                  <label htmlFor="proximite">Inclus dans la vente </label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id={elem.id}
                    name="descriptionInclus"
                    value={elem.description}
                    placeholder="Description"
                    onChange={handleChangeDesc}
                  />
                  <label htmlFor="km">Description des inclus</label>
                </div>
              </div>
            );
          })}
          <Button variant="primary" onClick={addItem}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button variant="danger" onClick={removeItem}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </Form>
      </main>
    </section>
  );
}
