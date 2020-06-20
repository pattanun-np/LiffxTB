import React from "react";
import {
  makeStyles,
  createMuiTheme,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Box,
  TablePagination,
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Grid,
  TableRow,
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
];

function createData(Date, UniqCode, Gender, Score) {
  return { Date, UniqCode, Gender, Score };
}

const rows = [
  createData("01/05/2020", "214wq", "หญิง", 2),
  createData("01/08/2020", "463wr", "หญิง", 0),
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { loading, profile } = useLiff({
    liffId,
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
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
    </Paper>
  );
}
