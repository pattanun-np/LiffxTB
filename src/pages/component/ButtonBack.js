import React from "react";
import { makeStyles, Button } from "@material-ui/core/";
const useStyles = makeStyles({
  ButtonNext: {
    background:
      "linear-gradient( 200.6deg,  rgba(0,0,180,1) 11.2%, rgba(0,0,255,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 135, .3)",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
});
export default function Backpage() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.ButtonNext}>
        <i class="fas fa-arrow-left"></i>&nbsp; ย้อนกลับ
      </Button>
    </div>
  );
}
