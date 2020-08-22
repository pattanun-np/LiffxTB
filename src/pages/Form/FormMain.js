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
  Box,
  Card,
} from "@material-ui/core/";

import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Gender from "./Gender";
import Age from "./Age";
import Screening from "./ScreeningForm";
import HomeIcon from "@material-ui/icons/Home";
import useLiff from "../component/liff_hook";
import { StoreContext } from "../Context/store";
const liffId = "1654260546-VwqZxy4o";
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
  ButtonBack: {
    background:
      "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(0, 100, 255, .3)",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  ButtonNext: {
    background:
      "linear-gradient( 200.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "140px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  Button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: "50px",
    fontSize: "14px",
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "30px",
    float: "right",
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
  gender: yup.string().required("กรุณาระบุเพศ"),
});
const ageSchema = yup.object().shape({
  age: yup.number().required("กรุณากรอกอายุ").positive().integer(),
});

export default function FormMain() {
  const classes = useStyles();
  const { gender, age } = React.useContext(StoreContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { closeLiff } = useLiff({
    liffId,
  });
  const genderForm = useForm({
    validationSchema: genderSchema,
  });

  const ageForm = useForm({
    validationSchema: ageSchema,
  });
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

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(data);
    if (activeStep === 0) {
      gender[1](data);
    } else if (activeStep === 1) {
      age[1](data);
    }
    handleNext();
  };
  function sendValidation() {
    if (activeStep === 0) {
      genderForm.handleSubmit(onSubmit);
    } else if (activeStep === 1) {
      ageForm.handleSubmit(onSubmit);
    }
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Gender formProps={genderForm} data={gender} />;
      case 1:
        return <Age formProps={ageForm} data={age} />;
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
      <form onSubmit={sendValidation}>
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
              <Box display="flex" justifyContent="center">
                <Typography className={classes.instructions} justify="center">
                  ตอบแบบคัดกรองเสร็จสิ้น
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Card className={classes.Card}>
                  <Box justifyContent="flexEnd">
                    <Button
                      className={classes.Button}
                      onClick={() => {
                        closeLiff();
                      }}
                    >
                      ปิด
                    </Button>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Typography className={classes.instructions}>
                      ผลการคัดกรอง
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  className={classes.ButtonNext}
                  type="button"
                >
                  {activeStep === steps.length - 1 ? "ส่งแบบคัดกรอง" : "ถัดไป"}
                  &nbsp;
                  <i class="fas fa-arrow-right"></i>
                </Button>
              </Box>
              <div>
                <Box display="flex" justifyContent="center">
                  <Button
                    className={classes.ButtonBack}
                    onClick={handleBack}
                    disabled={activeStep === 0 ? true : false}
                  >
                    <i class="fas fa-arrow-left"></i>&nbsp; ย้อนกลับ
                  </Button>
                </Box>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
