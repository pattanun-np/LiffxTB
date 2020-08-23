import React, { Fragment } from "react";
import { StoreContext } from "../Context/store";
import FadeIn from "react-fade-in";

import {
  Grid,
  makeStyles,
  Typography,
  RadioGroup,
  Radio,
  Card,
  Box,
  Button,
  Collapse,
  FormControlLabel,
  FormControl,
} from "@material-ui/core/";
import question from "./Question";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    padding: "20px",
    height: "auto",
    justifyContent: "center",
  },
  Input: {
    borderRadius: "25px",
    position: "relative",
    width: "200px",
  },
  ButtonBack: {
    background:
      "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(0, 100, 255, .3)",
    color: "white",
    width: "140px",
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
  quiz: {
    background:
      "linear-gradient( 268deg,  rgba(255,105,180,1) 4.1%, rgba(255,174,215,1) 74.3% )",
    fontFamily: "Kanit",
    color: "white",
    width: "90px",
    borderRadius: 50,
    padding: 5,
    margin: "2px",
  },
  Card: {
    fontFamily: "Kanit",
    margin: "5px",
    padding: "10px",
    maxWidth: "870px",
    width: "870px",
    height: "auto",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 10,
  },
  Text: {
    fontFamily: "Kanit",
  },
});

export default function Information() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {
    activeStep,
    setActiveStep,
    userData,
    setUserData,
    setFinalData,
  } = React.useContext(StoreContext);

  const quiz = question.map((q) => (
    <Card className={classes.Card} key={q.id}>
      <h1 className={classes.quiz}>คำถามที่ : {q.id}</h1>
      <p style={{ fontSize: "15px", color: "red" }}>{q.note}</p>
      <Typography className={classes.Text}>{q.question} </Typography>
      <RadioGroup
        row
        aria-label="position"
        name={"No" + q.id}
        defaultValue="top"
        onChange={(e) => {
          setUserData({
            ...userData,
            [e.target.name]: e.target.value,
          });
        }}
      >
        <Grid item xs={6}>
          <FormControl component="fieldset" className={classes.Text}>
            <FormControlLabel
              className={classes.Text}
              control={<Radio value={`${q.score[0]}`} color="secondary" />}
              label={<p className={classes.Text}>{q.ans[0]}</p>}
              labelPlacement="bottom"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormControlLabel
              className={classes.Text}
              control={<Radio value={`${q.score[1]}`} color="secondary" />}
              label={<p className={classes.Text}>{q.ans[1]}</p>}
              labelPlacement="bottom"
            />
          </FormControl>
        </Grid>
      </RadioGroup>
    </Card>
  ));

  function submitData() {
    if (Object.keys(userData).length === 8) {
      setActiveStep(activeStep + 1);
      setFinalData(userData);
      setUserData("");
    } else {
      setOpen(true);
      setInterval(() => {
        setOpen(false);
      }, 2500);
    }
  }
  return (
    <Fragment>
      <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            severity="error"
            style={{ position: "relative", fontFamily: "Kanit" }}
          >
            <AlertTitle style={{ fontFamily: "Kanit" }}>
              ตอบคำถามไม่ครบ
            </AlertTitle>
            กรุณาตอบคำถามให้ครบ
          </Alert>
        </Collapse>
        <FadeIn>
          <Grid container justify="center">
            {quiz}
          </Grid>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              className={classes.ButtonNext}
              onClick={submitData}
            >
              ส่ง &nbsp;
              <i class="fas fa-paper-plane"></i>
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              className={classes.ButtonBack}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              ย้อนกลับ &nbsp;
              <i class="fas fa-arrow-left"></i>
            </Button>
          </Box>
        </FadeIn>
      </div>
    </Fragment>
  );
}
