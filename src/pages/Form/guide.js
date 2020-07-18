import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: "320px",
    fontFamily: "Kanit",
    height: "800px",
  },
  ButtonHome: {
    background:
      "linear-gradient( 200.6deg,  rgba(255,207,84,1) 11.2%, rgba(255,158,27,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 5,
    margin: "15px",
  },

  text: {
    marginTop: 10,
    fontFamily: "Kanit",
    fontWeight: 300,
    fontStyle: "Bold",
  },
});

export default function StepperForm() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <img
            alt="bk"
            src="https://res.cloudinary.com/image-chatbot/image/upload/v1588150390/nok/1_aounpy.png"
          />
        </CardContent>
        <CardContent>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;แบบคัดกรองวัณโรคปอดในเว็บแอปพลิเคชันบอทน้อยดิจิตอลด๊อกเตอร์
          พัฒนาโดยสำนักงานป้องกันควบคุมโรคที่ 9
          จังหวัดนครราชสีมาได้รับการสนับสนุนจาก{" "}
          <a href="http://botnoigroup.com/">บริษัท บอทน้อยคอนซัลติ้ง จำกัด</a>
          &nbsp;&nbsp;แบบคัดกรองวัณโรคนี้เป็นเครื่องมือที่ใช้ในการคัดกรองเพื่อค้นหาวัณโรคปอดจากอาการสงสัย
          อ้างอิงมาจากคู่มือการคัดกรองเพื่อค้นหาวัณโรคและวัณโรคดื้อยาของกองวัณโรค
          กรมควบคุมโรค หากท่านทำแบบคัดกรองนี้แล้ว
          ผลระบุว่าเสี่ยงต่อการเป็นวัณโรคปอด
          โปรดป้องกันการแพร่กระจายเชื้อตามคำแนะนำและรีบไปพบแพทย์ทันทีเพื่อรับการตรวจอย่างละเอียดต่อไป
        </CardContent>
        <Grid container justify="center">
          <Button startIcon={<HomeIcon />} className={classes.ButtonHome}>
            <Link to="/" style={{ color: "white" }}></Link>
            กลับหน้าหลัก
          </Button>
        </Grid>
      </Card>
    </div>
  );
}
