import React, { useEffect, useState } from "react";
import "./Student.scss";
import { ImBin } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import { height } from "@mui/system";
import { getstudents,searchstudents, removestudent, toggleStudent } from "../../../../actions/admin";
function Student() {
  const [students, setstudents] = useState([]);
  const [data, setdata] = useState("");
const [update, setupdate] = useState("");
const handletoggle=(id)=>{
 
  // console.log(initvals)
  toggleStudent(id).then((data,err)=>{
// console.log(values)
// alert(data.message)
setupdate("123swas")
  })  
}

const deletestudent=(id)=>{
 
  // console.log(initvals)
  removestudent(id).then((data,err)=>{
// console.log(values)
// alert(data.message)
})  
setupdate("123swasdcsssss")
}
  useEffect(() => {
    getstudents(JSON.parse(localStorage.getItem("token"))).then((data) => {
      setstudents(data);
      console.log(students, data);
      setupdate("hy")
    });
  }, [students.length == 0||update]);

  const handleSearch =()=>{
    console.log(data)
    searchstudents({data}).then((data,err)=>{
      console.log(data)
      if(data.length==0){
        alert("there is no such student")
      }
      setstudents(data);
    })
  }
  return (
    <div className="main">
      <div className="container">
       

        <div
          className="container"
          style={{ width: "100%", overflow: "scroll", height: "60vh" }}
        >
          <table style={{ width: "100%", textAlign: "center" }}>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status </th>
            </tr>
            {students &&
              students.map((d, i) => {
                return (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "10px 10px 10px 10px",
                        "font-size": "15px",
                      }}
                    >
                      {d.username}
                    </td>
                    <td
                      style={{
                        padding: "10px 10px 10px 10px",
                        "font-size": "15px",
                      }}
                    >
                      {d.number}
                    </td>
                    <td
                      style={{
                        padding: "10px 10px 10px 10px",
                        "font-size": "15px",
                      }}
                    >
                      {d.email}
                    </td>
                    <td
                      style={{
                        padding: "10px 10px 10px 10px",
                        "font-size": "15px",
                      }}

                    >
                      {d.isActive == true ? "Active" : "deactivated"}
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
