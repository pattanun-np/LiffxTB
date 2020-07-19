import React, { Fragment } from "react";

import {
  Grid,
  makeStyles,
  Typography,
  RadioGroup,
  Radio,
  Card,
  FormControlLabel,
  FormControl,
} from "@material-ui/core/";
import question from "./Question";

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
  Card: {
    fontFamily: "Kanit",
    margin: "5px",
    padding: "10px",
    maxWidth: "600px",
    width: "850px",
    height: "150px",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 10,
  },
  Text: {
    fontFamily: "Kanit",
  },
});

export default function Information() {
  const classes = useStyles();
  const quiz = question.map((q) => (
    <Card className={classes.Card} key={q.id}>
      <Typography className={classes.Text}>
        คำถามที่:{q.id} {q.question}{" "}
      </Typography>

      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <Grid item xs={6}>
          <FormControl component="fieldset" className={classes.Text}>
            <FormControlLabel
              className={classes.Text}
              value={q.ans[0]}
              control={<Radio color="primary" />}
              label={q.ans[0]}
              labelPlacement="bottom"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormControlLabel
              className={classes.Text}
              value={q.ans[1]}
              control={<Radio color="primary" />}
              label={q.ans[1]}
              labelPlacement="bottom"
            />
          </FormControl>
        </Grid>
      </RadioGroup>
    </Card>
  ));
  return (
    <Fragment>
      <div className={classes.root}>
        {/* <p>#Debug {JSON.stringify(userAge)}</p> */}

        <Grid container justify="center">
          {quiz}
        </Grid>
      </div>
    </Fragment>
  );
}
