import React from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import { DynamicField } from "./DynamicField";

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
        info.tab.pop();
        setInfo({ ...info, tab: [...info.tab] });
        console.log(info.tab);
    }

    return (
        <section className="text-center">
            <main className="form-signin">
                <Form>
                    <div className="form-floating">
                        <input
                            type="date"
                            className="form-control"
                            id="dateOccupation"
                            name="dateOccupation"
                            value={info.dateOccupation}
                            onChange={handleChangeDate}
                        />
                        <label htmlFor="dateOccupation">
                            Date d'occupation
                        </label>
                    </div>
                    <br/>
        {info.inclus.map((elem) => {
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
                            <option value="stores">Stores</option>
                            <option value="luminaires">Luminaires</option>
                            <option value="equipements">Équipements</option>
                            <option value="entretienExterieur">Entretien extérieur</option>
                            <option value="autres">Autres</option>
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
      <button className="btn btn-outline-primary" onClick={removeItem}>
        Enlever un item
      </button>
    </Form>
    </main>
    </section>
    );
}