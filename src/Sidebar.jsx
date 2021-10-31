import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import back from "./images/back.jpeg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);
  const recentitem = (topic) => (
    <div className="sidebar__recentitem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={back} alt="back" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,823</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post </p>
          <p className="sidebar__statNumber">2,975</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentitem("React.js")}
        {recentitem("Design")}
        {recentitem("Programming")}
        {recentitem("Software")}
        {recentitem("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
