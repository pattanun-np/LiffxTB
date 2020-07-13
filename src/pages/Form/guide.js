import React from "react";
import { makeStyles, Card } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    height: "800px",
  },
  CardBtn: {
    margin: "auto",
    width: "50%",
    fontFamily: "Kanit",
    padding: "10px",
  },

  text: {
    marginTop: 10,
    fontFamily: "Kanit",
    fontWeight: 300,
    fontStyle: "Bold",
  },
});

export default function StepperForm() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>guide</Card>
    </div>
  );
}
