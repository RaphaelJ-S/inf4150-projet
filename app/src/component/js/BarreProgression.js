import React from "react";
import "../css/FicheVisite.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function BarreProgression({ page }) {
  return (
    <>
      <Stepper activeStep={page} alternativeLabel>
        <Step key={0}>
          <StepLabel>{"Identification"}</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel>{"Adresse"}</StepLabel>
        </Step>
      </Stepper>
    </>
  );
}
