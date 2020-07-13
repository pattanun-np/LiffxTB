import React, { Fragment } from "react";

import { Grid, makeStyles, Typography, Button } from "@material-ui/core/";
const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    padding: "20px",
    height: "auto",
    justifyContent: "center",
  },
  CardGroup: {
    color: "white",
    backgroundColor: "white",
    alignItems: "center",
  },
  CardBtn: {
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "180px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
  },
  Step: {
    color: "#eaeaf0",
  },
});

export default function Information() {
  const classes = useStyles();
  const [userAns, setUserAns] = React.useState({ gender: "" });

  return (
    <Fragment>
      <div className={classes.root}>
        {/* <p>#Debug {JSON.stringify(userAns)}</p> */}
        <Grid container justify="center">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "Kanit" }}
          >
            เพศของคุณ คือ ?
          </Typography>
        </Grid>

        <Grid container justify="center">
          <Button
            className={classes.CardBtn}
            value="female"
            onClick={(e) => {
              setUserAns({ ...userAns, gender: e.target.value });
            }}
          >
            <Grid>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontFamily: "Kanit" }}
              >
                หญิง
              </Typography>
              <img
                alt="test"
                src="https://image.flaticon.com/icons/svg/145/145864.svg"
              />
            </Grid>
          </Button>
          <Button
            className={classes.CardBtn}
            value="male"
            onClick={(e) => {
              setUserAns({ ...userAns, gender: e.target.value });
            }}
          >
            <Grid>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontFamily: "Kanit" }}
              >
                ชาย
              </Typography>
              <img
                alt="test"
                src="https://image.flaticon.com/icons/svg/145/145867.svg"
              />
            </Grid>
          </Button>
        </Grid>
      </div>
    </Fragment>
  );
}
