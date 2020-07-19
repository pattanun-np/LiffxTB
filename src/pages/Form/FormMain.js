import React from "react";
import * as yup from "yup";
import {
  makeStyles,
  Step,
  Stepper,
  StepLabel,
  Typography,
  Button,
  Grid,
  Card,
} from "@material-ui/core/";

import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Gender from "./Gender";
import Age from "./Age";
import Screening from "./ScreeningForm";
import Nextpage from "../component/ButtonNext";
import Backpage from "../component/ButtonBack";
import HomeIcon from "@material-ui/icons/Home";

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
  Card: {
    margin: "5px",
    maxWidth: "480px",
    width: "450px",
    height: "280px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
  },
  instructions: {
    fontFamily: "Kanit",
  },
  ButtonHome: {
    background:
      "linear-gradient( 200.6deg,  rgba(25,207,10,1) 11.2%, rgba(25,158,100,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(50,233,22,0.6))",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  Button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 50,
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "24px",
    width: "auto",
  },
  Step: {
    color: "#eaeaf0",
  },
});
function getSteps() {
  return ["ข้อมูลเพศ", "ข้อมูลอายุ", "แบบคัดกรอง"];
}
const genderSchema = yup.object().shape({
  gender: yup.string().required("กรุณาระบุบเพศ"),
});

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const genderForm = useForm({
    validationSchema: genderSchema,
  });
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const onSubmit = (data) => {
    console.log(data);
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

  const handleConfrim = () => {
    swal({
      title: "คุณกำลังจะกลับไปหน้าหลัก ?",
      text: "ผลการตอบแบบคัดกรองของคุณจะไม่ถูกบันทึกไว้หากยังไม่ส่งข้อมูล",
      icon: "warning",
      buttons: ["ปิด", "ตกลง"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        window.location = "/";
      } else {
      }
    });
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Gender formProps={genderForm} />;
      case 1:
        return <Age />;
      case 2:
        return <Screening />;
      default:
        return "Unknown step";
    }
  }
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Button
          disable={activeStep === steps.length ? false : true}
          startIcon={activeStep === steps.length ? "" : <HomeIcon />}
          className={activeStep === steps.length ? "" : classes.ButtonHome}
          onClick={activeStep === steps.length ? "" : handleConfrim}
        >
          {activeStep === steps.length ? "" : "ยกเลิก"}
        </Button>
      </Grid>
      <form onSubmit={genderForm.handleSubmit(onSubmit)}>
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
      </form>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Grid container justify="center">
              <Typography className={classes.instructions} justify="center">
                ตอบแบบคัดกรองเสร็จสิ้น
              </Typography>
              <Card className={classes.Card}>
                <Typography className={classes.instructions}>
                  ผลการคัดกรอง <Button className={classes.Button}>ปิด</Button>
                </Typography>
              </Card>
            </Grid>
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
                      activeStep === steps.length - 1
                        ? "ส่งแบบคัดกรอง"
                        : "ถัดไป"
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
