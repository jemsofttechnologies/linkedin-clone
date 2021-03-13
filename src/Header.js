import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(logout());
		auth.signOut();
	};
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png"
					alt=""
				/>
				<div className="header__search">
					<SearchIcon />
					<input type="text" name="" id="" placeholder="Search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions title="Home" Icon={HomeIcon} />
				<HeaderOptions
					title="My Network"
					Icon={SupervisorAccountIcon}
				/>
				<HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
				<HeaderOptions title="Messaging" Icon={SmsIcon} />
				<HeaderOptions
					title="Notifications"
					Icon={NotificationsIcon}
				/>
				<HeaderOptions title="me" onClick={onClick} avatar={true} />
			</div>
		</div>
	);
}

export default Header;
