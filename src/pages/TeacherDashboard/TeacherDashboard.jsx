import React, { useState } from "react";

import "./TeacherDashboard.scss";

import Sidebar from "../../components/TeacherDashboard/Sidebar/Sidebar";
import Header from "../../components/TeacherDashboard/Header/Header";
import Main from "../../components/TeacherDashboard/Main/Main";
import CourseMaterial from "../../components/TeacherDashboard/Main/CourseMaterial"; 
import Footer from "../../components/TeacherDashboard/Footer/Footer";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import ComplaintsAndFeedbacks from "../../components/ComplaintsAndFeedbacks/ComplaintsAndFeedbacks";
import Result from "../../components/TeacherDashboard/Main/Results/Results"
import Analytics from "../../components/TeacherDashboard/Main/Analytics/Analytics"
import Livelectures from "../../components/TeacherDashboard/Main/LiveLectures/LiveLectures"
import RecordedLectures from "../../components/TeacherDashboard/Main/RecordedLectures/RecordedLectures";

const TeacherDashboard = ({ child }) => {
  const [sidebarMenu, setSidebarMenu] = useState([
    {
      title: "Dashboard",
      active: true,
      component: <Main />,
    },
    {
      title: "Live Lectures",
      active: false,
      component: <Livelectures />, 
    },
    {
      title: "Recorded Lectures",
      active: false,
      component: <RecordedLectures />, 
    },
    {
      title: "Institute Details",
      active: false,
      component: <></>,
    },
    // {
    //   title: "My Students",
    //   active: false,
    //   component: <></>,
    // },
    // { title: "My Classrooms", active: false, component: <></> },
    {
      title: "Complaints",
      active: false,
      component: <ComplaintsAndFeedbacks />,
    }
    // {
    //   title: "Result",
    //   active: false,
    //   component: <Result />,
    // },
    // {
    //   title: "Analytics",
    //   active: false,
    //   component: <Analytics />,
    // },
    // { title: "Course Material", active: false, component: <CourseMaterial /> },
    // { title: "Subjects", active: false, component: <></> },
  ]);

  return (
    <AdminLayout>
      <div className="teacherDashboard">
        <div className="teacherDashboard__sidebarWrapper">
          <Sidebar sidebarMenu={sidebarMenu} setSidebarMenu={setSidebarMenu} />
        </div>
        <div className="teacherDashboard__mainWrapper">
          <Header />
          {child
            ? child
            : sidebarMenu.map((item) => (item?.active ? item?.component : <></>))}
          <Footer />
        </div>
      </div>
    </AdminLayout>
  );
};

export default TeacherDashboard;
