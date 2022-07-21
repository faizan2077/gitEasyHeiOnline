import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { complaintData } from "../../actions/complaint";
import moment from "moment";
import { Link } from "react-router-dom";


function createData(sno, complaint, date, status) {
  return { sno, complaint, date, status };
}


const StudentComplaintTable = ({data}) => {
    let index = 1;

const [rows, setRows] = useState([]);

useEffect(async () => {
  const data = await complaintData();
  console.log("this is complaint data bro", data)
  let id_you_want = "6247fbaef64eeb32e8371b8f";
  if (data) {
    const newData = data.filter((e) => {
      return e._id == id_you_want;
    });
      console.log(newData);

      newData.map((item)=>{
        setRows([
          ...rows,

          createData(
            index++,
            item.query,
            moment(item.createdAt).format("LL"),
            item.status,
          ),
        ]);
      })

  }
}, []);



  return (
    <div>
      <h4 className="center2" style={{  marginBottom: "8px" }}>
        Complaint data 
      </h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              {/* <TableCell align="right">Name</TableCell> */}
              <TableCell align="right">Complaint</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Date of Issued</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Response</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row,i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell>{row.calories}</TableCell> */}
                {/* <TableCell component="th" scope="row">
                  {row.complaint}
                </TableCell> */}

                <TableCell>{i+1}</TableCell>
                {/* <TableCell align="right" className="">{row.student.username}</TableCell> */}
                <TableCell align="right">{row.query.substring(0, 15)}</TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                <TableCell align="right">{row.updatedAt.substring(0, 10)}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right"> <Link
                          to={`/complaint/${row._id}`}
                          >View</Link></TableCell>
                {/* <TableCell align="right"><img src={row.image} alt="" /></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentComplaintTable;
