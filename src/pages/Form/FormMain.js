import React from "react";

import {
  makeStyles,
  Step,
  Stepper,
  StepLabel,
  Typography,
  Button,
  Grid,
} from "@material-ui/core/";
import Gender from "./Gender";
import Age from "./Age";
import Nextpage from "../component/ButtonNext";
import Backpage from "../component/ButtonBack";

const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    padding: "20px",
    height: "auto",
    justifyContent: "center",
  },
  CardGroup: {
    color: "white",
    backgroundColor: "white",
    alignItems: "center",
  },
  CardBtn: {
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "180px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
  },
  Step: {
    color: "#eaeaf0",
  },
});
function getSteps() {
  return ["ข้อมูลเพศ", "ข้อมูลอายุ", "แบบคัดกรอง"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Gender />;
    case 1:
      return <Age />;
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Backpage click={handleBack} disabled={activeStep}></Backpage>
                </Grid>
                <Grid item xs={6}>
                  <Nextpage
                    click={handleNext}
                    activeStep={
                      activeStep === steps.length - 1 ? "จบ" : "ถัดไป"
                    }
                  ></Nextpage>
                </Grid>
              </Grid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
