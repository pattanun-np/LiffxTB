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
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
  },
});

export default function Age({ formProps: { register, errors }, data }) {
  const classes = useStyles();
  const { age } = data[0];

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
            {age === "" ? "ระบุอายุ" : "คุณอายุ" + age + "ปี"}
            &nbsp;
          </Typography>
        </Grid>

        <Grid container justify="center">
          <Grid item>
            <TextField
              id="age"
              name="age"
              className={classes.Input}
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              label="อายุเท่าไหร่?"
              endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
              margin="normal"
              inputRef={register}
              error={!!errors.age}
              defaultValue={age}
            />
          </Grid>
        </Grid>
        {errors.age && (
          <p className={classes.errorMessage}>{errors.age.message}</p>
        )}
      </div>
    </Fragment>
  );
}
