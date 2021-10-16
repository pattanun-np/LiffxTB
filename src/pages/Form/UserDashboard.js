import React, { useState, useEffect, useContext } from "react";
import {
  makeStyles,
  TablePagination,
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Grid,
  TableRow,
  Button,
  Typography,
} from "@material-ui/core/";
import axios from "axios";
import HomeIcon from "@material-ui/icons/Home";
import * as loadingData from "../component/Loading/loading.json";
import Lottie from "react-lottie";
import swal from "sweetalert";
import useLiff from "../component/liff_hook";
import { UserDasboardContext } from "../Context/userDashboardProvider";
const liffId = "1654260546-31oNME8P";

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
    minWidth: "320px",
    fontFamily: "Kanit",
    height: "800px",
    padding: "15px",
  },

  container: {
    maxHeight: 440,
  },
  CardBtn: {
    margin: "auto",
    width: "50%",
    fontFamily: "Kanit",
    padding: "10px",
  },

  text: {
    marginTop: 10,
    fontFamily: "Kanit",
    fontWeight: 300,
    fontStyle: "Bold",
  },
  ButtonLogout: {
    justsify: "center",
    background:
      "linear-gradient( 109.6deg,  rgba(255,27,0,1) 11.2%, rgba(255,58,0,1) 91.1% )",
    fontFamily: "Kanit",
    borderRadius: 50,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: 8,
  },
  ButtonHome: {
    background:
      "linear-gradient( 200.6deg,  rgba(25,207,10,1) 11.2%, rgba(25,158,100,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(50,233,22,0.6))",
    color: "white",

    borderRadius: 50,
    padding: 6,
    margin: "15px",
  },
  ButtonLoad: {
    background:
      "linear-gradient( 200.6deg,  rgba(25,207,10,1) 11.2%, rgba(25,158,100,1) 91.1% )",
    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(50,233,22,0.6))",
    color: "white",
    width: "128px",
    borderRadius: 50,
    padding: 6,

  },
});

function createData(Date, UniqCode, Name, Age, Gender, Score, Result) {
  return { Date, UniqCode, Name, Age, Gender, Score, Result };
}

const rows = [];
const columns = [
  { id: "Date", label: "วันที่คัดกรอง", minWidth: 170 },
  { id: "UniqCode", label: "รหัสอ้างอิง", minWidth: 170 },
  { id: "Name", label: "ชื่อ", minWidth: 200 },
  { id: "Age", label: "อายุ", minWidth: 200 },
  {
    id: "Gender",
    label: "เพศ",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Score",
    label: "คะแนนรวม",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Result",
    label: "ผลการคัดกรอง",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function StepperForm() {
  const classes = useStyles()
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true)
  const { userDashboard, setUserDashboard } = useContext(UserDasboardContext);
  const { profile } = useLiff({ liffId });
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  setTimeout(async () => {
    setLoading(false);
    await setUserDashboard(profile);
    await setUid(
      userDashboard !== null
        ? userDashboard.userId
        : ""
    );
    await setName(
      userDashboard !== null
        ? userDashboard.displayName
        : ""
    );
    // console.log(profile);
  }, 1000);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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

  useEffect(() => {
    getData(uid)

  }, [uid, page, rowsPerPage]);
  const getData = async (uid) => {
    var api_url = "https://tb-check-report-api.herokuapp.com/"
    var api_route = "api/v1/"
    var url = api_url + api_route;
    await axios.post(
      url + "screenlog/" + uid + "?&n=" + 0 + "&skip=" + 0)
      .then(
        (response) => {
          setTimeout(() => {

            const data = response.data.result
            data.map((id, idx) => {
              // console.log(id)
              const time = new Date(id.screened_time).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })
              const refcode = id.data.RefCode
              const name = id.data.name.toString();
              const gender = id.data.UserInfo.Gender
              const age = id.data.UserInfo.Age
              const score = id.data.Score
              const isrisk = id.data.IsRisk.toString();
              rows.push(createData(time, refcode, name, age, gender, score, isrisk))
              setLoading(false)
              return rows
            })

          }, 2000);
        },
        (error) => {
          console.log(error);
        }
      );

  }



  return (
    <Paper className={classes.root}>
      <Button
        startIcon={<HomeIcon />}
        className={classes.ButtonHome}
        onClick={handleConfrim}
      >
        กลับ
      </Button>

      <Grid container justify="center">
        <Typography style={{ fontFamily: "Kanit" }}>
          ประวัติการคัดกรองของ {"คุณ" + name}
        </Typography>
      </Grid>
      {loading ? (<Lottie
        options={defaultOptions}
        height={140}
        width={140}
      />
      ) : (<div>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ fontFamily: "Kanit" }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontFamily: "Kanit",
                      fontWeight: "300",
                      fontStyle: "Bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              fontFamily: "Kanit",
                              fontWeight: "300",
                              fontStyle: "Bold",
                            }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /></div>)}

    </Paper>
  );
}
