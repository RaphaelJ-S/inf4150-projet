import React from "react";
import "../css/FicheVisite.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function BarreProgression({ numPage }) {
  return (
    <>
      <Stepper
        activeStep={numPage}
        alternativeLabel="true"
        orientation="horizontal"
        connector={false}
      >
        <Step key={0}>
          <StepLabel icon={" "}>{"Identification"}</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel icon={" "}>{"Adresse"}</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel icon={" "}>{"Specifications"}</StepLabel>
        </Step>
        <Step key={3}>
          <StepLabel icon={" "}>{"Services"}</StepLabel>
        </Step>
        <Step key={4}>
          <StepLabel icon={" "}>{"Rangement"}</StepLabel>
        </Step>
      </Stepper>
    </>
  );
}
