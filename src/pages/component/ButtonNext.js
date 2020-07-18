import React from "react";
import { makeStyles, Button } from "@material-ui/core/";
const useStyles = makeStyles({
  ButtonNext: {
    background:
      "linear-gradient( 200.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
});
export default function Nextpage(props) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.ButtonNext} onClick={props.click}>
        {props.activeStep}&nbsp;
        <i class="fas fa-arrow-right"></i>
      </Button>
    </div>
  );
}
