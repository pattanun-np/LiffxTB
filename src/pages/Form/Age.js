import React, { Fragment } from "react";
import { StoreContext } from "../Context/store";
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Collapse,
  TextField,
  InputAdornment,
} from "@material-ui/core/";
import { Alert, AlertTitle } from "@material-ui/lab";
const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    padding: "20px",
    height: "auto",
    justifyContent: "center",
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
  Input: {
    borderRadius: "25px",
    position: "relative",
    width: "200px",
  },
  Step: {
    color: "#eaeaf0",
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
  },
});

export default function Age() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { activeStep, setActiveStep, userData, setUserData } = React.useContext(
    StoreContext
  );
  function next() {
    console.log(userData["Age"].length);
    if (
      userData["Age"] > 0 &&
      userData["Age"].length > 0 &&
      userData["Age"].length <= 3 &&
      userData["Age"] <= 100
    ) {
      setActiveStep(activeStep + 1);
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
          <Alert severity="error" style={{ fontFamily: "Kanit" }}>
            <AlertTitle style={{ fontFamily: "Kanit" }}>ระบุอายุผิด</AlertTitle>
            อายุต้องไม่ท่ากับ 0 และไม่มากกว่า 100 ปี
          </Alert>
        </Collapse>
        <Grid container justify="center">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Kanit" }}
          >
            {typeof userData["Age"] === "undefined"
              ? "ระบุอายุ"
              : "คุณอายุ " + userData["Age"] + " ปี"}
            &nbsp;
          </Typography>
        </Grid>
        <br></br>
        <p style={{ display: "flex", color: "red", justifyContent: "center" }}>
          {typeof userData["Age"] === "undefined"
            ? "**โปรดเเตะที่ช่องและกรอกอายุของคุณ"
            : ""}
        </p>

        <Grid container justify="center">
          <Grid item>
            <TextField
              id="age"
              name="age"
              value={userData["Age"]}
              className={classes.Input}
              type="number"
              variant="outlined"
              label={<p style={{ fontFamily: "Kanit" }}>คุณอายุเท่าไหร่ ?</p>}
              endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
              margin="normal"
              error={typeof userData["Age"] === "undefined" ? true : false}
              onChange={(e) => {
                setUserData({ ...userData, Age: e.target.value });
              }}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Button
            type="submit"
            disabled={typeof userData["Age"] === "undefined" ? true : false}
            variant="contained"
            className={classes.ButtonNext}
            onClick={next}
          >
            ถัดไป &nbsp;
            <i class="fas fa-arrow-right"></i>
          </Button>
        </Box>
      </div>
    </Fragment>
  );
}
