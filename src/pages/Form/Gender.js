import React, { Fragment } from "react";
import { StoreContext } from "../Context/store";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core/";
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
    padding: "10px",
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "180px",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
    marginBottom: "5px",
  },
  cardAction: {
    display: "block",
    textAlign: "center",
  },
  Step: {
    color: "#eaeaf0",
  },
});

export default function Gender({ formProps: { errors }, data }) {
  const classes = useStyles();
  const { dispatch } = React.useContext(StoreContext);

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
            {/* {gender === "ระบุเพศ" ? "ระบุเพศ" : "เพศของคุณ " + gender} */}
          </Typography>
        </Grid>

        <Grid container justify="center">
          <Card item xs={6} className={classes.CardBtn}>
            <CardActionArea id="female" name="female" dispatch={dispatch}>
              <div
                style={{
                  alignItem: "center",
                  alignContent: "center",
                  borderRadius: "20px",
                  padding: "5px",
                  width: "75px",
                  display: "table",
                  background:
                    "linear-gradient( 268deg,  rgba(255,105,180,1) 4.1%, rgba(255,174,215,1) 74.3% )",
                }}
              >
                <span style={{ alignText: "center" }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      fontSize: "20px",
                      fontFamily: "Kanit",
                      color: "white",
                    }}
                  >
                    <i
                      className="fas fa-venus"
                      style={{ color: "white", margin: "2px" }}
                    ></i>
                    หญิง
                  </Typography>
                </span>
              </div>

              <CardContent>
                <CardMedia
                  component="img"
                  width="100px"
                  image="https://image.flaticon.com/icons/svg/145/145864.svg"
                  title="หญิง"
                />
              </CardContent>
            </CardActionArea>
          </Card>
          <Card item xs={6} className={classes.CardBtn}>
            <CardActionArea id="male" name="male" dispatch={dispatch}>
              <div
                style={{
                  alignItem: "center",
                  alignContent: "center",
                  borderRadius: "20px",
                  padding: "5px",
                  display: "table",
                  width: "75px",
                  background:
                    "linear-gradient( 177.5deg,  rgba(149,222,250,1) 8.4%, rgba(0,109,208,1) 105.1% )",
                }}
              >
                <span>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      width: "auto",
                      fontSize: "20px",
                      fontFamily: "Kanit",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <i
                      className="fas fa-mars"
                      style={{ color: "white", margin: "2px" }}
                    ></i>
                    ชาย
                  </Typography>
                </span>
              </div>

              <CardContent>
                <CardMedia
                  component="img"
                  width="100px"
                  image="https://image.flaticon.com/icons/svg/145/145867.svg"
                  title="Contemplative Reptile"
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {errors.gender && (
          <p className={classes.errorMessage}>{errors.gender.message}</p>
        )}
      </div>
    </Fragment>
  );
}
