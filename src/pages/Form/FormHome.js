import React from "react";
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
  const [loading, setLoading] = React.useState(true);
  const { profile } = useLiff({
    liffId,
  });
  setInterval(() => {
    setLoading(false);
  }, 2000);
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
                {profile && (
                  <Box display="flex" justifyContent="center">
                    <div
                      style={{
                        padding: "5px",
                        borderRadius: "100%",
                 boxShadow: "0 3px 5px 2px rgba(17,130,193,0.4)",
                      }}
                    >
                      <Avatar
                        alt={profile.displayName}
                        src={profile.pictureUrl}
                        {...defaultProps}
                      />
                    </div>
                  </Box>
                )}
                {profile && (
                  <Box display="flex" justifyContent="center">
                    <Typography className={classes.text}>
                      สวัสดีครับคุณ<br></br>
                      {profile.displayName}
                    </Typography>
                  </Box>
                )}
              </FadeIn>
            </div>
          )}
        </CardContent>
        <FadeIn>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Button}>
              <Link to="/form" style={{ color: "white" }}>
                <i className="fas fa-notes-medical"></i>&nbsp;
                ตอบแบบคัดกรองวัณโรคปอด
              </Link>
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Button3}>
              <Link to="/guide" style={{ color: "white" }}>
                <i className="fas fa-question-circle"></i>&nbsp; คำแนะนำ
              </Link>
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Buttondashboard}>
              <Link to="/dashboard" style={{ color: "white" }}>
                <i class="fas fa-tachometer-alt"></i>&nbsp; dashboard
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
