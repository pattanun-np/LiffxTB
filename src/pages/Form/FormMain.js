import React, { useContext } from "react";
import {
  makeStyles,
  withStyles,
  Step,
  Stepper,
  StepLabel,
  Typography,
  Avatar,
  Button,
  Grid,
  CardHeader,
  Box,
  Card,
  StepConnector,
  CardContent,
} from "@material-ui/core/";
import Lottie from "react-lottie";
import recoment from "./Recomment";
import * as loadingData from "../component/Loading/loading.json";
import * as healthy from "../component/Loading/healthy.json";
import PropTypes from "prop-types";
import clsx from "clsx";
import swal from "sweetalert";
import Gender from "./Gender";
import Age from "./Age";
import FadeIn from "react-fade-in";
import Screening from "./ScreeningForm";
import HomeIcon from "@material-ui/icons/Home";
import WcIcon from "@material-ui/icons/Wc";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { StoreContext } from "../Context/store";
import useLiff from "../component/liff_hook";
import QRCode from "react-qr-code";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: healthy.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
    fontFamily: "Kanit",
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",
    },
  },
  line: {
    height: 6,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Kanit",
  },
  active: {
    backgroundImage:
      "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",
  },
});

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
  Card: {
    margin: "5px",
    maxWidth: "650px",
    width: "400px",
    height: "auto",
    padding: "1rem",
    boxShadow: "0 3px 5px 2px rgba(10, 10,10, 0.1)",
    borderRadius: 25,
  },
  instructions: {
    fontFamily: "Kanit",
  },
  ButtonHome: {
    background:
      "linear-gradient( 200.6deg,  rgba(25,207,10,1) 11.2%, rgba(25,158,100,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(50,233,22,0.6))",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  ButtonBack: {
    background:
      "linear-gradient( 100.6deg,  rgba(0,200,180,1) 11.2%, rgba(0,140,255,1) 91.1% )",
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(0, 100, 255, .3)",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  ButtonNext: {
    background:
      "linear-gradient( 200.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "140px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },
  Button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: "50px",
    fontSize: "14px",
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "30px",
    float: "right",
    width: "auto",
  },
  Step: {
    color: "#eaeaf0",
  },
  CardBtnNomal: {
    color: "#FFFFFF",
    padding: "2px",
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "185px",
    // boxShadow: "0px 3px 5px 2px rgba(50, 250,75, 0.5)",
    borderRadius: 25,
    marginBottom: "5px",
    backgroundImage:
      "radial-gradient( circle 961px at 1.9% 5%,  rgba(242,241,36,1) 0%, rgba(11,236,218,1) 90% )",
  },
  CardBtnRisk: {
    color: "#FFFFFF",
    padding: "2px",
    margin: "5px",
    maxWidth: "480px",
    width: "150px",
    height: "185px",
    borderRadius: 25,
    marginBottom: "5px",
    backgroundImage:
      "radial-gradient( circle farthest-corner at 3.1% 6.8%,  rgba(199,0,59,1) 0%, rgba(255,88,53,1) 97.7% )",
  },
});
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <WcIcon />,
    3: <AssignmentOutlinedIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,

  completed: PropTypes.bool,

  icon: PropTypes.node,
};
export default function FormMain() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const liffId = "1654260546-VwqZxy4o";
  const { userprofile, closeLiff } = useLiff({ liffId });
  const { activeStep, finalData } = useContext(StoreContext);

  const handleConfrim = () => {
    swal({
      title: "คุณกำลังจะกลับไปหน้าหลัก ?",
      text: "ผลการตอบแบบคัดกรองของคุณจะไม่ถูกบันทึกไว้หากยังไม่ส่งข้อมูล",
      icon: "warning",
      buttons: ["ปิด", "ตกลง"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        window.location = "/";
      } else {
      }
    });
  };
  function getStep() {
    return ["ข้อมูลอายุ", "ข้อมูลเพศ", "แบบคัดกรอง"];
  }

  const step = getStep();
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Age />;
      case 1:
        return <Gender />;
      case 2:
        return <Screening />;
      default:
        return "Unknown step";
    }
  }

  // console.log(`DebugFinal ${JSON.stringify(finalData)}`);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <div className={classes.root}>
      <Button onClick={() => closeLiff()} className={classes.Button}>
        <i
          class="fas fa-times-circle"
          style={{
            marginRight: "5px",
          }}
        ></i>
        ปิด
      </Button>

      <Grid container justify="center">
        <Button
          disable={activeStep === step.length ? false : true}
          startIcon={activeStep === step.length ? "" : <HomeIcon />}
          className={activeStep === step.length ? "" : classes.ButtonHome}
          onClick={activeStep === step.length ? "" : handleConfrim}
        >
          {activeStep === step.length ? "" : "กลับ"}
        </Button>
      </Grid>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {step.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon}>
                <p style={{ fontFamily: "Kanit" }}>{label}</p>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === step.length ? (
        <div>
          <Box display="flex" justifyContent="center">
            <FadeIn>
              <Card className={classes.Card}>
                <Box display="flex" justifyContent="center">
                  {loading ? (
                    <Lottie options={defaultOptions} height={140} width={140} />
                  ) : (
                    <Box display="flex" justifyContent="center">
                      {loading ? (
                        <Lottie
                          options={defaultOptions}
                          height={140}
                          width={140}
                        />
                      ) : (
                        <div>
                          <Box display="flex" justifyContent="center">
                            <Typography
                              className={classes.text}
                              style={{ fontFamily: "Kanit", fontSize: "20px" }}
                            >
                              ผลการคัดกรอง<br></br>
                            </Typography>
                          </Box>
                          {userprofile && (
                            <Box display="flex" justifyContent="center">
                              <div>
                                <Avatar
                                  style={{ width: "100px", height: "100px" }}
                                  alt={userprofile.displayName}
                                  src={userprofile.pictureUrl}
                                />
                              </div>
                            </Box>
                          )}
                          {userprofile && (
                            <Box display="flex" justifyContent="center">
                              <Typography
                                className={classes.text}
                                style={{
                                  fontFamily: "Kanit",
                                  fontSize: "15px",
                                }}
                              >
                                {userprofile.displayName}
                              </Typography>
                            </Box>
                          )}

                          <Box display="flex" justifyContent="center">
                            <Card
                              className={
                                finalData.Score >= 3
                                  ? classes.CardBtnRisk
                                  : classes.CardBtnNomal
                              }
                            >
                              <CardHeader>ผลรวมคะแนน</CardHeader>
                              <CardContent>
                                <Box display="flex" justifyContent="center">
                                  <header
                                    style={{
                                      fontFamily: "Kanit",
                                      fontSize: "35px",
                                    }}
                                  >
                                    {finalData.Score}
                                  </header>
                                </Box>

                                <Box display="flex" justifyContent="center">
                                  <header
                                    style={{
                                      fontFamily: "Kanit",
                                      fontSize: "25px",
                                    }}
                                  >
                                    คะแนน
                                  </header>
                                </Box>
                              </CardContent>
                            </Card>
                          </Box>
                          <Box display="flex" justifyContent="center">
                            <header
                              style={{
                                fontFamily: "Kanit",
                                fontSize: "15px",
                                marginTop: "15px",
                                marginBottom: "15px",
                                color:
                                  finalData.Score >= 3 ? "#ff1a1a" : "#00e64d",
                              }}
                            >
                              {finalData.Score >= 3 ? (
                                <div>
                                  คุณเสี่ยงที่จะเป็นวัณโรคปอดครับ<br></br>
                                  โปรดทำตามคำแนะนำด้านล่าง
                                </div>
                              ) : (
                                <div> "ยินดีด้วยครับ! คุณสุขภาพปกติครับ"</div>
                              )}
                            </header>
                          </Box>
                        </div>
                      )}
                    </Box>
                  )}
                </Box>
                <Box display="flex" justifyContent="center">
                  {/* <QRCode value={finalData.QrLink} /> */}
                  {/* {finalData.QrLink} */}
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ marginTop: "20px" }}
                >
                  <Typography style={{ fontFamily: "Kanit", color: "red" }}>
                    {" "}
                    ** กรณีเป็นกลุ่มต้องสงสัย หรือ มีผลรวมคะแนนมากกว่า หรือ
                    เท่ากับ 3 คะแนน ให้นำ QR Code นี้ ไปแสดงต่อเจ้าหน้าที่ ณ
                    คลินิกวัณโรคใกล้บ้าน เพื่อขอรับบริการช่องทางพิเศษสำหรับผู้สงสัยโรคติดต่อทางเดินหายใจ **
                  </Typography>
                </Box>
              </Card>
              <Box display="flex" justifyContent="center">
                <Card className={classes.Card}>
                  {finalData.Score >= 3 ? (
                    <Box display="flex" justifyContent="center">
                      <Grid container>
                        {recoment.map((n) => (
                          <Grid item xs={12} key={n.id}>
                            <Card
                              style={{
                                fontFamily: "Kanit",
                                padding: "10px",
                                marginTop: "5px",
                                width: "350px",
                                height: "auto",
                                borderRadius: 10,
                              }}
                            >
                              <Avatar
                                alt="img"
                                src={n.img}
                                style={{
                                  padding: "10px",
                                  width: "65px",
                                  height: "65px",
                                }}
                              />

                              <h1
                                style={{
                                  fontFamily: "Kanit",
                                  fontSize: "15px",
                                }}
                              >
                                {n.recomment}
                              </h1>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  ) : (
                    <Box display="flex" justifyContent="center">
                      <Lottie
                        options={defaultOptions2}
                        height={240}
                        width={240}
                      />
                    </Box>
                  )}
                </Card>
              </Box>
            </FadeIn>
          </Box>
        </div>
      ) : (
        <div>
          <FadeIn>
            <div> {getStepContent(activeStep)}</div>
            <Box display="flex" justifyContent="center">
              <Typography>
                <a
                  href="https://github.com/pattanunNP"
                  style={{ fontSize: "10px" }}
                >
                  Copyright © 2020 All Right Revesed By pattanunNP
                </a>
              </Typography>
            </Box>
          </FadeIn>
        </div>
      )}
    </div>
  );
}
