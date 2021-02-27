import React, { useState } from "react";
import {
  makeStyles,
  Card,
  Box,
  Typography,
  Button,
  TextField,
  Collapse,
  InputAdornment,
  //   CircularProgress,
} from "@material-ui/core/";
import * as loadingData from "../component/Loading/loading.json";
import { Alert, AlertTitle } from "@material-ui/lab";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import axios from "axios";
import HomeIcon from "@material-ui/icons/Home";
import swal from "sweetalert";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
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
  const [open, setOpen] = React.useState(false);

  const [Loading, setLoading] = React.useState(false);
  const [userLogin, setUserLogin] = useState({"username":"","password":""});
  const [msg, setMsg] = useState({"status":"", "message":""});



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


  const login = async ()=>{
    var api_url = "https://tb-check-report-api.herokuapp.com/"
    var api_route ="api/v1/"
    var url = api_url+api_route
    setLoading(true)
    if  (userLogin['username'].length> 0  && userLogin['password'].length > 0){
      await axios.post(
        url+"login",
            {
              username: userLogin['username'],
              password: userLogin['password'],
            }
          )
          .then(
            (response) => {
             
    
                if (response.status === 200){
                 
                  localStorage.setItem("token", response.data.token);
                  setMsg({...msg, status:"success"})
                  setMsg({...msg,  message:"Login Success"})
                  setOpen(true)
                  setTimeout(() => {
                  setOpen(false)
                  window.location = "/dashboard";
                },500)
                }
               
            },
            (error) => {
              console.log(error.message)
              setLoading(false)
              setMsg({...msg, status:"warning"})
              setMsg({...msg, message:"Invilid username or password"})
              setOpen(true)
              setTimeout(() => {

                setOpen(false)
              },500)
            }
          );
        }
  }

  return (
    <div>
           <Card className={classes.root}>
      {!Loading?( <FadeIn>
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
        <Collapse in={open}>
          <Alert severity={msg.status} style={{ fontFamily: "Kanit"}}>
            <AlertTitle style={{ fontFamily: "Kanit" }}>{msg.message}</AlertTitle>
          </Alert>
        </Collapse>
          <Box display="flex" justifyContent="center">
            <TextField
              id="username"
              name="username"
              value={userLogin.username}
              className={classes.Input}
              type="text"
              variant="outlined"
              label={<p style={{ fontFamily: "Kanit" }}>Username</p>}
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              margin="normal"
              onChange={(e) => {
                setUserLogin({ ...userLogin, username: e.target.value });
              }}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <TextField
              id="password"
              name="password"
              value={userLogin.password}
              className={classes.Input}
              type="password"
              variant="outlined"
              label={<p style={{ fontFamily: "Kanit" }}>Password</p>}
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              margin="normal"
              onChange={(e) => {
                setUserLogin({ ...userLogin, password: e.target.value });
              }}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button size="large" className={classes.Buttondashboard} style={{ color: "white" }} onClick={login}>
            <i class="fas fa-user"></i>&nbsp; Login
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
        </FadeIn>):(<Lottie
    options={defaultOptions}
    height={140}
    width={140}
  />)}
 
       
    
      </Card>
    </div>
  );
}
