import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form action="">
						<input type="text" />
						<button type="submit">Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
					<InputOption
						Icon={CalendarViewDayIcon}
						title="Write article"
						color="#F5987E"
					/>
				</div>
			</div>
			<Post
				name="James Bundi"
				description="This is a test"
				message="This works. This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works."
			/>
			<Post
				name="James Bundi"
				description="This is a test"
				message="This works. This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works."
			/>
			<Post
				name="James Bundi"
				description="This is a test"
				message="This works. This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works."
			/>
			<Post
				name="James Bundi"
				description="This is a test"
				message="This works. This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works.This works."
			/>
		</div>
	);
}

export default Feed;
