import React from "react";
import "./Notifications.scss";

const Notifications = ({
  setNotificationsOpen,
  notifications = [
    {
      title: "Detailed Test Report",
      time: "2 Days Ago",
      description: "Detailed Test Report is available for MOCK TEST JEE - 1",
    },
    {
      title: "Detailed Test Report",
      time: "2 Days Ago",
      description: "Detailed Test Report is available for MOCK TEST JEE - 1",
    },
  ],
}) => {
  return (
    <div className="notifications">
      {notifications.map((item) => (
        <div className="notifications__wrapper">
          <div className="notifications__wrapper__header">
            <div className="notifications__wrapper__header__title">
              {item.title}
            </div>
            <div className="notifications__wrapper__header__time">
              {item.time}
            </div>
          </div>
          <div className="notifications__wrapper__description">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
