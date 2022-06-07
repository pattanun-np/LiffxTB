import React, { Fragment } from "react";
import { StoreContext } from "../Context/store";
import FadeIn from "react-fade-in";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  Box,
  Button,
  Collapse,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core/";
import { Alert, AlertTitle } from "@material-ui/lab";
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
    boxShadow: "0px 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "140px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  CardBtn: {
    padding: "2px",
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "185px",
    boxShadow: "0px 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
    marginBottom: "5px",
    "&:hover": {
      boxShadow: " 3px 5px 3px rgba(10, 200, 255, .3)",
    },
  },
  cardAction: {
    display: "block",
    textAlign: "center",
  },
  Step: {
    color: "#eaeaf0",
  },
});

export default function Gender() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { activeStep, setActiveStep, userData, setUserData } = React.useContext(
    StoreContext
  );
  function next() {
    // console.log(userData["Age"].length);
    if (userData["Gender"] === "ชาย" || userData["Gender"] === "หญิง") {
      setActiveStep(activeStep + 1);
    } else {
      setOpen(true);
      setInterval(() => {
        setOpen(false);
      }, 2500);
    }
  }
  return (
    <Fragment>
      <div className={classes.root}>
        <FadeIn>
          <Collapse in={open}>
            <Alert severity="error" style={{ fontFamily: "Kanit" }}>
              <AlertTitle style={{ fontFamily: "Kanit" }}>
                กรุณาเลือกเพศ
              </AlertTitle>
              ชาย หรือ หญิง
            </Alert>
          </Collapse>
          <Grid container justify="center">
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontFamily: "Kanit" }}
            >
              {typeof userData["Gender"] === "undefined"
                ? "ระบุเพศ"
                : "เพศของคุณ " + userData["Gender"]}
            </Typography>
          </Grid>

          <Grid container justify="center">
            <Card item xs={6} className={classes.CardBtn}>
              <CardActionArea
                id="female"
                name="female"
                value="หญิง"
                onClick={() => setUserData({ ...userData, Gender: "หญิง" })}
              >
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
                    image="https://res.cloudinary.com/image-chatbot/image/upload/v1654605568/nok/woman_xpzoar.png"
                    title="หญิง"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
            <Card item xs={6} className={classes.CardBtn}>
              <CardActionArea
                id="male"
                name="male"
                value="ชาย"
                onClick={() => setUserData({ ...userData, Gender: "ชาย" })}
              >
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
                    image="https://res.cloudinary.com/image-chatbot/image/upload/v1654605570/nok/man_wyp3v5.png"
                    title="ชาย"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              disabled={
                typeof userData["Gender"] === "undefined" ? true : false
              }
              className={classes.ButtonNext}
              onClick={next}
            >
              ถัดไป &nbsp;
              <i class="fas fa-arrow-right"></i>
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              className={classes.ButtonBack}
              onClick={(e) => setActiveStep(activeStep - 1)}
            >
              ย้อนกลับ &nbsp;
              <i class="fas fa-arrow-left"></i>
            </Button>
          </Box>
        </FadeIn>
      </div>
    </Fragment>
  );
}
