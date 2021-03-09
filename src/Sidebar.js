import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.itl.cat/pngfile/big/210-2103455_good-background-photo-for-linkedin-page-linkedin-background.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>James Bundi</h2>
        <h4>jamesbundi@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,010</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,458</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
