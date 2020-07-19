import React, { Fragment } from "react";

import {
  Grid,
  makeStyles,
  Typography,
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
  Input: {
    borderRadius: "25px",
    position: "relative",
    width: "200px",
  },
  Step: {
    color: "#eaeaf0",
  },
});

export default function Information() {
  const classes = useStyles();
  const [userAge, setUserAge] = React.useState({ age: "" });

  const handleChange = (event) => {
    setUserAge({ ...userAge, age: event.target.value });
  };
  return (
    <Fragment>
      <div className={classes.root}>
        {/* <p>#Debug {JSON.stringify(userAge)}</p> */}
        <Grid container justify="center">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Kanit" }}
          >
            {userAge.age === ""
              ? "ระบุอายุ"
              : "อายุของคุณ" + userAge.age + "ปี"}
            &nbsp;
          </Typography>
        </Grid>

        <Grid container justify="center">
          <Grid item>
            <TextField
              className={classes.Input}
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              label="อายุเท่าไหร่?"
              value={userAge.age}
              endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
