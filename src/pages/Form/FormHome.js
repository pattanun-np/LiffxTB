import React from "react";
import {
  makeStyles,
  createMuiTheme,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Box,
  Modal,
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
  Button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 50,
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "64",
    width: "512px",
    padding: "30px",
  },
  Button2: {
    background:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(102,116,236,1) 0%, rgba(50,231,219,1) 90% )",
    border: 0,
    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "64",
    width: "512px",
    padding: "30px",
  },
  Button3: {
    background:
      "linear-gradient( 109.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",
    border: 0,
    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "64",
    width: "512px",
    padding: "30px",
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
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { loading, profile } = useLiff({
    liffId,
  });

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Button size="large" className={classes.Buttoninfo}>
            <i className="fas fa-question-circle"></i>&nbsp; นี่คืออะไร ?
          </Button>
          {profile && (
            <Box display="flex" justifyContent="center">
              <Avatar
                alt={profile.displayName}
                src={profile.pictureUrl}
                {...defaultProps}
              />
            </Box>
          )}
          {profile && (
            <Box display="flex" justifyContent="center">
              <Typography className={classes.text}>
                สวัสดีครับคุณ&nbsp;
                {profile.displayName}
              </Typography>
            </Box>
          )}
        </CardContent>
        <CardActions className={classes.CardBtn}>
          <Button size="large" className={classes.Button}>
            <Link to="/form" style={{ color: "white" }}>
              <i className="fas fa-notes-medical"></i>&nbsp;
              ตอบแบบคัดกรองวัณโรคปอด
            </Link>
          </Button>
        </CardActions>
        <CardActions className={classes.CardBtn}>
          <Button size="large" className={classes.Button2}>
            <Link to="/history" style={{ color: "white" }}>
              <i className="fas fa-history"></i>&nbsp;ประวัติการคัดกรอง
            </Link>
          </Button>
        </CardActions>
        <CardActions className={classes.CardBtn}>
          <Button size="large" className={classes.Button3}>
            <Link to="/guide" style={{ color: "white" }}>
              <i className="fas fa-question-circle"></i>&nbsp; คำแนะนำ
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
