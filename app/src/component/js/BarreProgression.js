import React from "react";
import "../css/FicheVisite.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function BarreProgression({ numPage }) {
  const steps = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Stepper activeStep={numPage} orientation="horizontal" connector={false}>
        {steps.map((id) => {
          console.log({ id });
          return (
            <Step key={id}>
              <StepLabel icon={id}>{""}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
}
