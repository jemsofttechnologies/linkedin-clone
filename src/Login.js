import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const register = () => {
		if (!name) {
			return alert("Please enter your full name!");
		} else {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((userAuth) =>
					userAuth.user
						.updateProfile({
							displayName: name,
							photoURL: profilePic,
						})
						.then(() =>
							dispatch(
								login({
									email: userAuth.user.email,
									uid: userAuth.user.uid,
									displayName: name,
									photoUrl: profilePic,
								})
							)
						)
				)
				.catch((error) => alert(error.message));
		}
	};
	const SignIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) =>
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: name,
						photoUrl: profilePic,
					})
				)
			)
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<img
				src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png"
				alt=""
			/>
			<form action="">
				<input
					type="text"
					placeholder="Full name (required if registering)"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Profile picture Url (Optional)"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" onClick={SignIn}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
