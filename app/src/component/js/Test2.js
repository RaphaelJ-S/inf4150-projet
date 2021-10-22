import React from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function OccupationEtInclusFormulaire({ info, setInfo }) {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({...info, tab: [name, value]});
    };

    const handleAddClick = () =>{
        console.log("bouton cliquer")
        let item = {
            id: info.tab.length,
            valeur: "",
        };
        setInfo({ ...info, tab: [...info.tab, item]});
        console.log(info);
    };
    const handleRemoveClick = (event) =>{};

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
                            onChange={handleChange}
                        />
                        <label htmlFor="dateOccupation">
                            Date d'occupation
                        </label>
                    </div>
                    <br />

                    <div className="form-floating">
                        <select
                            className="form-select"
                            aria-label="Selection inclus"
                            name="inclus"
                            id="inclus"
                            value={this.}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez  </option>
                            <option value="stores">Stores</option>
                            <option value="luminaires">Luminaires</option>
                            <option value="equipements">Équipements</option>
                            <option value="entretienExterieur">Entretien extérieur</option>
                            <option value="autres">Autres</option>
                        </select>
                        <label htmlFor="proximite">Inclus dans la vente </label>
                    </div>

                    {/* début km à proximité */}
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="descriptionInclus"
                            name="descriptionInclus"
                            value={info.descriptionInclus}
                            placeholder="Description"
                            disabled={info.inclus === ""}
                            onChange={handleChange}
                        />
                        <label htmlFor="km">Description des inclus</label>
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
                </Form>
            </main>
        </section>
    );
}