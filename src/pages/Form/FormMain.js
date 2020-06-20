import React, { Fragment } from "react";

import {
  Grid,
  makeStyles,
  TextField,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  Step,
  Stepper,
  StepLabel,
  Card,
  Typography,
  Icon,
  CardContent,
  CardActionArea,
  NativeSelect,
  Button,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    padding: "20px",
    height: "auto",
    justifyContent: "center",
  },
  CardGroup: {
    alignItems: "center",
  },
  CardBtn: {
    minWidth: "190px",
    maxWidth: "480px",
    padding: "10px",
    borderRadius: 25,
  },
  Step: {
    color: "#eaeaf0",
  },
});

function getSteps() {
  return ["ข้อมูลส่วนตัว", "คัดกรอง", "ผลการคัดกรอง"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function Information() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Fragment>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Grid justify="center">
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography
                        gutterBottom
                        variant="h8"
                        component="h2"
                        style={{ fontFamily: "Kanit" }}
                      >
                        {label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid container justify="center">
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontFamily: "Kanit" }}
              >
                เพศของคุณ คือ ?
              </Typography>
            </Grid>

            <Grid container justify="center">
              <Button>
                <Card className={classes.CardBtn}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontFamily: "Kanit" }}
                    >
                      หญิง
                    </Typography>
                    <img src="https://image.flaticon.com/icons/svg/145/145864.svg" />
                  </CardContent>
                </Card>
              </Button>
            </Grid>
            <Grid container justify="center">
              <Button>
                <Card className={classes.CardBtn}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontFamily: "Kanit" }}
                    >
                      ชาย
                    </Typography>
                    <img src="https://image.flaticon.com/icons/svg/145/145867.svg" />
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Fragment>
  );
}
