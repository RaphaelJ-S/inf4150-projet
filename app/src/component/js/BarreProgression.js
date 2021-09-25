import React from "react";
import "../css/FicheVisite.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";

export default function BarreProgression({ numPage }) {
  return (
    <>
      <Stepper
        activeStep={numPage}
        alternativeLabel="true"
        orientation="horizontal"
        variant="dots"
        connector={false}
      >
        <Step key={0}>
          <StepLabel>{"Identification"}</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel>{"Adresse"}</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel>{"Specifications"}</StepLabel>
        </Step>
        <Step key={3}>
          <StepLabel>{"Services"}</StepLabel>
        </Step>
        <Step key={4}>
          <StepLabel>{"Rangement"}</StepLabel>
        </Step>
      </Stepper>
    </>
  );
}
