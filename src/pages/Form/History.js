import React from "react";
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
import HomeIcon from "@material-ui/icons/Home";
import TableChartIcon from '@material-ui/icons/TableChart';
import swal from "sweetalert";
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
  ButtonHome: {
    background:
      "linear-gradient( 200.6deg,  rgba(25,207,10,1) 11.2%, rgba(25,158,100,1) 91.1% )",

    fontFamily: "Kanit",
    boxShadow: "0 3px 5px 2px rgba(50,233,22,0.6))",
    color: "white",
    
    borderRadius: 50,
    padding: 5,
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
    padding: 5,
    
  },
});
const columns = [
  { id: "Date", label: "วันที่คัดกรอง", minWidth: 170 },
  { id: "UniqCode", label: "รหัสอ้างอิง", minWidth: 100 },
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

function createData(Date, UniqCode, Gender, Score, Result) {
  return { Date, UniqCode, Gender, Score, Result };
}

const rows = [
  createData("01/05/2020", "214wq", "หญิง", 3, "เสี่ยง"),
  createData("01/08/2020", "463wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
  createData("01/08/2020", "443wr", "ชาย", 0, "ไม่เสียง"),
];

export default function StepperForm() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
          ประวัติการคัดกรอง
        </Typography>
      </Grid>

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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
<Button
        startIcon={<TableChartIcon/>}
        className={classes.ButtonHome}
       
      >
       Exort to CSV file
      </Button>
    </Paper>
  );
}
