import React, { useState, useContext } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core/";

import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import useLiff from "../component/liff_hook";
import { UserProfileContext } from "../Context/userDataProvider";
// const dotenv = require("dotenv");
// const env = dotenv.config().parsed;
const liffId = "1654260546-VwqZxy4o";
const useStyles = makeStyles({
  root: {
    margin: "10px",
    justsifyContent: "center",
    minWidth: "320px",
    minHeight: "680px",
    fontFamily: "Kanit",
    borderRadius: "20px",
  },
  CardBtn: {
    justsify: "center",
    alignContent: "center",
    width: "50%",
    fontFamily: "Kanit",
    padding: "10px",
  },
  Button: {
    justsify: "center",
    marginTop: "24px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 50,
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "64px",
    width: "256px",
  },

  Button3: {
    justsify: "center",
    marginTop: "24px",
    background:
      "linear-gradient( 109.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",
    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "64px",
    width: "256px",
  },
  Buttoninfo: {
    background:
      "linear-gradient( 200.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",

    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    padding: 5,
    width: "150px",
  },
  Buttondashboard: {
    marginTop: "24px",
    background:
      "radial-gradient( circle 465px at -15.1% -25%,  rgba(17,130,193,1) 0%, rgba(67,166,238,1) 49%, rgba(126,203,244,1) 90.2% )",

    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(17,130,193,0.4)",
    color: "white",
    height: "64px",
    width: "256px",
  },
  text: {
    marginTop: 10,
    fontFamily: "Kanit",
    fontWeight: 300,
    fontStyle: "Bold",
    fontSize: "25px",
  },
  textName: {
    color: "white",
    marginTop: 10,
    fontFamily: "Kanit",
    fontWeight: 300,
    fontStyle: "Bold",
    fontSize: "20px",
    padding: "0.7rem",
    borderRadius: 50,
    background:
      "radial-gradient( circle 465px at -15.1% -25%,  rgba(130,130,193,1) 0%, rgba(67,166,238,1) 49%, rgba(126,203,244,1) 90.2% )",
  },
});
const defaultProps = {
  bgcolor: "linear-gradient(75deg, #FE6B8B 30%, #FF8E53 90%)",
  m: 1,
  border: 5,
  style: { width: "120px", height: "120px" },
};

export default function FormHome() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const { profileInfo, setUserProfile } = useContext(UserProfileContext);
  const { profile } = useLiff({ liffId });
  const [link, setLink] = useState("");
  setTimeout(async () => {
    setLoading(false);
    await setUserProfile(profile);
    await setLink(
      profileInfo !== null
        ? "/form?userId=" +
            profileInfo.userId +
            "&name=" +
            profileInfo.displayName
        : ""
    );
    // console.log(profile);
  }, 1000);

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          {loading === true ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <div>
              <FadeIn>
                <Box display="flex" justifyContent="center">
                  <div>
                    {profileInfo && (
                      <Avatar
                        alt={
                          profileInfo.displayName !== "undefined"
                            ? profileInfo.displayName
                            : "img"
                        }
                        src={
                          profileInfo.pictureUrl !== "undefined"
                            ? profileInfo.pictureUrl
                            : "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg"
                        }
                        {...defaultProps}
                      />
                    )}
                    <Typography className={classes.text}>สวัสดีครับ</Typography>
                  </div>
                </Box>

                <Box display="flex" justifyContent="center">
                  {profileInfo && (
                    <Typography className={classes.textName}>
                      คุณ {profileInfo.displayName}
                    </Typography>
                  )}
                </Box>
              </FadeIn>
            </div>
          )}
        </CardContent>
        <FadeIn>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Button}>
              <Link to={link} style={{ color: "white" }}>
                <i className="fas fa-notes-medical"></i>&nbsp;
                ตอบแบบคัดกรองวัณโรคปอด
              </Link>
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Button3}>
              <Link to="/guide" style={{ color: "white" }}>
                <i className="fas fa-question-circle"></i>&nbsp;
                เกี่ยวกับแบบคัดกรองนี้
              </Link>
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Buttondashboard}>
              <Link to="/dashboard" style={{ color: "white" }}>
                <i class="fas fa-tachometer-alt"></i>&nbsp; เฉพาะเจ้าหน้าที่
              </Link>
            </Button>
          </Box>
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
      </Card>
    </div>
  );
}
