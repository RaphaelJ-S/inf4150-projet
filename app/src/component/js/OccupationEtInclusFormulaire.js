import React from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import { DynamicField } from "./DynamicField";

export default function OccupationEtInclusFormulaire({ info, setInfo }) {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({...info, [name]: value});
    };

    const handleAddClick = (event) =>{

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
                <DynamicField/>
                </Form>
            </main>
        </section>
    );
}