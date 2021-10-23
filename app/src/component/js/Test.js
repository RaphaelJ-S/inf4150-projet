import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default function Test({ info, setInfo }) {
  const handleChange = (e) => {
    let uptItems = [...info.tab];
    uptItems[e.target.id].valeur = e.target.value;
    setInfo({ ...info, tab: uptItems });
  };

    const handleChangeDesc = (e) => {
    let uptItems = [...info.tab];
    uptItems[e.target.id].description = e.target.value;
    setInfo({ ...info, tab: uptItems });
  };

  const addItem = (e) => {
    e.preventDefault();
    let item = {
      id: info.tab.length,
      valeur: "",
      description: "",
    };
    setInfo({ ...info, tab: [...info.tab, item] });
  };


  return (
    <section className="text-center">
      <main className="form-signin">
        <Form>
      {info.tab.map((elem) => {
        return (
          <div key={elem.id}>
                <div className="form-floating" >
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
                            <option value="Entretien extérieur">Entretien extérieur</option>
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
      <button className="btn btn-outline-primary" onClick={addItem}>
        Ajouter un item
      </button>
    </Form>
    </main>
    </section>

  );
}
