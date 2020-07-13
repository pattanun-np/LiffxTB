import React from "react";
import {
  makeStyles,
  createMuiTheme,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Box,
  Typography,
  Button,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import useLiff from "../component/liff_hook";

const liffId = "1654260546-VwqZxy4o";

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
const defaultProps = {
  bgcolor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  m: 1,
  border: 5,
  style: { width: "120px", height: "120px" },
};

export default function StepperForm() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>guide</Card>
    </div>
  );
}
