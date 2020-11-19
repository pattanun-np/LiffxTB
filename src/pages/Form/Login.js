import React from "react";
import {
  makeStyles,
  Card,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  //   CircularProgress,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

import HomeIcon from "@material-ui/icons/Home";
import swal from "sweetalert";
const useStyles = makeStyles({
  root: {
    margin: "10px",
    justsifyContent: "center",
    minWidth: "320px",
    minHeight: "680px",
    fontFamily: "Kanit",
    borderRadius: "20px",
    padding: "2rem",
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

  ButtonHome: {
    justsify: "center",
    marginTop: "24px",
    background:
      "linear-gradient( 109.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",
    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "24px",
    width: "56px",
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
    height: "35px",
    width: "256px",
  },
  text: {
    marginTop: 10,
    fontFamily: "Kanit",
    fontWeight: 300,
    fontStyle: "Bold",
  },
});

export default function Login() {
  const classes = useStyles();
  const handleConfrim = () => {
    swal({
      title: "คุณกำลังจะกลับไปหน้าหลัก ?",
      text: "",
      icon: "info",
      buttons: ["ยกเลิก", "ตกลง"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        window.location = "/";
      } else {
      }
    });
  };
  return (
    <div>
      <Card className={classes.root}>
        <FadeIn>
          <Button
            startIcon={<HomeIcon />}
            className={classes.ButtonHome}
            onClick={handleConfrim}
          >
            กลับ
          </Button>
          <Box display="flex" justifyContent="center">
            <Typography className={classes.text}>
              โปรดเข้าสู่ระบบเพื่อดูข้อมูล
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <TextField
              id="age"
              name="age"
              className={classes.Input}
              type="Email"
              variant="outlined"
              label={<p style={{ fontFamily: "Kanit" }}>Email: </p>}
              endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
              margin="normal"
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <TextField
              id="age"
              name="age"
              className={classes.Input}
              type="password"
              variant="outlined"
              label={<p style={{ fontFamily: "Kanit" }}>Password: </p>}
              endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
              margin="normal"
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Buttondashboard}>
              <Link to="/dashboard" style={{ color: "white" }}>
                <i class="fas fa-user"></i>&nbsp; Login
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
