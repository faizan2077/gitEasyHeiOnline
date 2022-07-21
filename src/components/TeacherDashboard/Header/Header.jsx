import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import "./Header.scss";
import ProfilePopUp from "./ProfilePopUp/ProfilePopUp";
import EditProfile from "./EditProfile/EditProfile";
import Notifications from "./Notifications/Notifications";
import SidebarHam from "../Sidebar/SidebarHam";
import Main from "../../../components/TeacherDashboard/Main/Main";
// import CourseMaterial from "../../../components/TeacherDashboard/Main/CourseMaterial"; 
import ComplaintsAndFeedbacks from "../../ComplaintsAndFeedbacks/ComplaintsAndFeedbacks"
import Analytics from "../../../components/TeacherDashboard/Main/Analytics/Analytics"
import Livelecutres from "../../../components/TeacherDashboard/Main/LiveLectures/LiveLectures"
import Result from "../Main/Results/Results"
import LiveLectures from "../../../components/TeacherDashboard/Main/LiveLectures/LiveLectures";
import RecordedLectures from "../../../components/TeacherDashboard/Main/RecordedLectures/RecordedLectures";

const Header = ({ notifications = false }) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

    const [hideShowSidebarHam, setHideShowSidebarHam] = useState(1);

    const handleBurger = () => {
      setHideShowSidebarHam(!hideShowSidebarHam);
    };

    const [sidebarMenu, setSidebarMenu] = useState([
      {
        title: "Dashboard",
        active: true,
        component: <Main />,
      },
      // {
      //   title: "My Students",
      //   active: false,
      //   component: <></>,
      // },
      // { title: "My Classrooms", active: false, component: <></> },
      {
        title: "Live Lectures",
        active: false,
        component: <LiveLectures />,
      },
      {
        title: "Recorded Lectures",
        active: false,
        component: <RecordedLectures />,
      },
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
      // {
      //   title: "Course Material",
      //   active: false,
      //   component: <CourseMaterial />,
      // },
      // { title: "Subjects", active: false, component: <></> },
      {
        title: "Institute Details",
        active: false,
        component: <></>,
      },
      {
        title: "Complaints",
        active: false,
        component: <ComplaintsAndFeedbacks />,
      }
    ]);

  return (
    <>
      <div className="header">
        <div className="header__left">
          {/* <div className="header__left__dropdown">
            <img
              src="/assets/images/teacher-dashboard-header-feedback.svg"
              alt="Feedback"
              className="header__left__dropdown__downArrow"
            />
            <span>Feedback</span>
          </div> */}

          {/* <div className="header__left__dropdown">
            <img
              src="/assets/images/teacher-dashboard-header-contact-us.svg"
              alt="Contact Us"
              className="header__left__dropdown__downArrow"
            />
            <span>Contact Us</span>
          </div> */}
          <img
            src="/assets/images/dashboard-header-ham-burger-menu.svg"
            alt="Hamburger Menu"
            className="header__left__menu"
            onClick={handleBurger}
          />
        </div>
        <div className="header__right">
        {/* <div className="header__right__link">
            <img
              src={
                notifications.length >= 1
                  ? "/assets/images/dashboard-header-notifications-icon.svg"
                  : "/assets/images/dashboard-header-notifications-off-icon.svg"
              }
              onClick={() => setNotificationsOpen((prevState) => !prevState)}
              // alt="Notifications"
              title="Notifications"
            />
          </div> */}
          <div className="header__right__dropdown">
            <div
              onClick={() => setOpen((prevState) => !prevState)}
              className="header__right__dropdown__profile"
            >
              <img
                src={
                  JSON.parse(localStorage.getItem("user")).image
                    ? JSON.parse(localStorage.getItem("user")).image
                    : "/assets/images/teacher-dashboard-header-profile.svg"
                }
                alt="User"
                className="header__right__dropdown__profile__photo"
              />
              <img
                src="/assets/images/dashboard-header-arrow-down.svg"
                alt="Down Arrow"
                className="header__right__dropdown__profile__downArrow"
              />
            </div>
            {/* <p className="header__right__dropdown__name">Ben Parker</p> */}
            {/* <p className="header__right__dropdown__status">Student</p> */}
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <>
            <ProfilePopUp setOpen={setOpen} setEditOpen={setEditOpen} />
          </>
        </Modal>
        <Modal open={editOpen} onClose={() => setEditOpen(false)}>
          <div className="header__modalWrapper">
            <EditProfile setEditOpen={setEditOpen} />
          </div>
        </Modal>
        <Modal
          open={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
        >
          <>
            <Notifications setNotificationsOpen={setNotificationsOpen} />
          </>
        </Modal>
      </div>

      {hideShowSidebarHam == 1 ? (
        <SidebarHam
          sidebarMenu={sidebarMenu}
          setSidebarMenu={setSidebarMenu}
          setHideShowSidebarHam={setHideShowSidebarHam}
        />
      ) : null}
    </>
  );
};

export default Header;
