import React, { Fragment, useState, useContext } from "react";
import { StoreContext } from "../Context/store";
import FadeIn from "react-fade-in";
import axios from "axios";
import { useLocation } from "react-router-dom";
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
import useLiff from "../component/liff_hook";
import question from "./Question";
import { Alert, AlertTitle } from "@material-ui/lab";
import swal from "sweetalert";
const liffId = "1654260546-B8WOe7AD";
const dotenv = require("dotenv");
dotenv.config();
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

export default function ScreeningFrom() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {
    activeStep,
    setActiveStep,
    userData,
    setUserData,
    setFinalData,
  } = useContext(StoreContext);
  let query = useQuery();
  const { access_token } = useLiff({ liffId });
  const username = query.get("name");
  const userId = query.get("userId");
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
              labelPlacement="right"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormControlLabel
              className={classes.Text}
              control={<Radio value={`${q.score[1]}`} color="secondary" />}
              label={<p className={classes.Text}>{q.ans[1]}</p>}
              labelPlacement="right"
            />
          </FormControl>
        </Grid>
      </RadioGroup>
    </Card>
  ));
  function CalculateScore(userData) {
    var sum = 0;
    Object.keys(userData).forEach(function (key) {
      // console.log(key, userData[key]);
      if (key.startsWith("No")) {
        // console.log(key, userData[key]);
        sum += parseInt(userData[key]);
      }
    });
    return sum;
  }
  function ExactInfo(userData) {
    var Info = { Age: "", Gender: "" };
    Object.keys(userData).forEach(function (key) {
      if (key === "Age") {
        // console.log(key, userData[key]);
        Info["Age"] = userData[key];
      }
      if (key === "Gender") {
        // console.log(key, userData[key]);
        Info["Gender"] = userData[key];
      }
    });
    return Info;
  }
  const handleComplete = () => {
    swal({
      title: "ตอบคัดกรองเสร็จสิ้น",

      icon: "success",

      dangerMode: true,
    });
  };

  function CalRisk(score) {
    let is_risk;
    if (score >= 3) {
      is_risk = true;
      return is_risk;
    } else {
      is_risk = false;
      return is_risk;
    }
  }
  function recordData(userId, user_data) {
    // var api_url = "https://tb-check-report-api.herokuapp.com/";
    const api_url = "https://0.0.0.0:5000"
    const api_route = "api/v1/";

    axios
      .post(`${api_url}${api_route}record?token=${access_token}`,
        {
          user_id: userId,
          user_data: user_data,
        }
      )
      .then(
        (response) => {
          setTimeout(() => {
            // setLoading(false);
            setOpen(true);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  function create_UUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
  function submitData() {
    var api_url = "https://tb-check-report-api.herokuapp.com/";
    var api_route = "api/v1";

    if (Object.keys(userData).length === 8) {
      setActiveStep(activeStep + 1);
      const refcode = create_UUID();
      const QrLink = api_url + api_route + "tracker?refcode=?" + refcode;
      setFinalData({
        Score: CalculateScore(userData),
        UserInfo: ExactInfo(userData),
        UserAnswer: userData,
        IsRisk: CalRisk(CalculateScore(userData)),
        RefCode: refcode,
        QrLink: QrLink,
      });

      const user_data = {
        name: username,
        Score: CalculateScore(userData),
        UserInfo: ExactInfo(userData),
        IsRisk: CalRisk(CalculateScore(userData)),
        UserAnswer: userData,
        RefCode: refcode,
      };
      recordData(userId, user_data);
      handleComplete();
      setUserData("");
    } else {
      setOpen(true);
      setInterval(() => {
        setOpen(false);
      }, 2500);
    }
  }
  const handleConfrim = () => {
    swal({
      title: "คณต้องการส่งแบบคัดกรอง ?",
      text: "ผลการตอบแบบคัดกรองของคุณจะถูกบันทึกไว้ในระบบ",
      icon: "warning",
      buttons: ["ปิด", "ตกลง"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        submitData();
      } else {
      }
    });
  };

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
              onClick={handleConfrim}
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
