import React from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export class DynamicField extends React.Component {

    constructor(props) {
        super(props);

        const inclus = [{inclus: ""}];

        this.state = {inclus};
    }
    render() {
        return (
        <div>
            {this.state.inclus.map((inclu, index) => (
            <div key={index}>
                <div className="form-floating" >
                    <select
                        
                        className="form-select"
                        aria-label="Selection inclus"
                        name="inclus"
                        id="inclus"
                        value={this.state.value}
                        onChange={this.handleChange}
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
            <div className="form-floating">
                <input
                    
                    type="text"
                    className="form-control"
                    id="descriptionInclus"
                    name="descriptionInclus"
                    value={this.state.value}
                    placeholder="Description"
                    onChange={this.handleChange}
                />
                <label htmlFor="km">Description des inclus</label>
            </div>
        </div>  
        ))}
        {/* début km à proximité*/}
       
    </div>
        );
    }
}
    /*state = {
        numInput: 1
    }
    render() {

        var input = [
            {inclus: ""}
        ];

        for (var i = 0; i < this.state.numInput; i +=1) {
            input.push(<DistanceComponent key={i} number={i} />);
            console.log(input);
        };
    {/* https://stackoverflow.com/questions/35905988/react-js-how-to-append-a-component-on-click lien pour la page stack
    avec la solution

        return (
        <div>
        <MasterComponent addInput={this.onAddInput} content={this.input}>
            {this.input.map(field => (
                <div key={field}>
                    {field}
                </div>
            ))}
        </MasterComponent>
        </div>
    );
    }
    onAddInput = () => {
        this.setState({
            numInput: this.state.numInput + 1
        });
    }

}
const MasterComponent = (content) => (
    <div>
        {content.input}
        <div className="form-floating">
            <Button variant="primary" onClick={content.addInput}>
                <FontAwesomeIcon icon={faPlus}/>
            </Button>
            <Button variant="danger" onClick={content.removeInput}>
                <FontAwesomeIcon icon={faMinus}/>
            </Button>
        </div>
    </div>
);

const DistanceComponent = content => {
    <div className="form-floating">
        <select
            className="form-select"
            aria-label="Selection inclus"
            name="inclus"
            id="inclus"
            value={this.state.value}
            onChange={this.handleChange}
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

    {/* début km à proximité 
    <div className="form-floating">
        <input
            type="text"
            className="form-control"
            id="descriptionInclus"
            name="descriptionInclus"
            value={this.state.value}
            placeholder="Description"
            onChange={this.handleChange}
        />
        <label htmlFor="km">Description des inclus</label>
    </div>
}
*/