import { Component } from "react";
import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "../css/FicheVisite.css";

export default class test2 extends Component {
    constructor(props) {
        super(props);
        this.state = { inputs: ['input-0'] };
    }

    render() {
        return(
            <div>
            </div>
        );
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
}