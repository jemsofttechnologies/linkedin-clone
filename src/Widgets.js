import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Mighty React", "Top news - 999 readers")}
			{newsArticle("COVID 19 Updates", "Top news - 810 readers")}
			{newsArticle("DevTools", "Top news - 210 readers")}
			{newsArticle("React Release Updates", "Top news - 510 readers")}
			{newsArticle("Latest Tech Trends", "Top news - 620 readers")}
		</div>
	);
}

export default Widgets;
