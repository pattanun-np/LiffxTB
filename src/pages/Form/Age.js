import React, { Fragment } from "react";
import { StoreContext } from "../Context/store";
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core/";
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
  const { activeStep, setActiveStep, userData, setUserData } = React.useContext(
    StoreContext
  );
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container justify="center">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Kanit" }}
          >
            {userData["Age"] === ""
              ? "ระบุอายุ"
              : "คุณอายุ " + userData["Age"] + " ปี"}
            &nbsp;
          </Typography>
        </Grid>

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
              onChange={(e) => {
                setUserData({ ...userData, Age: e.target.value });
              }}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            className={classes.ButtonNext}
            onClick={() => setActiveStep(activeStep + 1)}
          >
            ถัดไป &nbsp;
            <i class="fas fa-arrow-right"></i>
          </Button>
        </Box>
      </div>
    </Fragment>
  );
}
