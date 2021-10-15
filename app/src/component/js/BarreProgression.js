import React from "react";
import "../css/FicheVisite.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function BarreProgression({ numPage, setNumPage }) {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <Stepper activeStep={numPage} orientation="horizontal" connector="">
        {steps.map((id) => {
          return (
            <Step key={id}>
              <StepLabel icon={id} onClick={() => setNumPage(id - 1)}>
                {""}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
}
