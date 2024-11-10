import React from "react";
import UserDetails from "./UserDetails";

const Profile = () => {
	return (
		<div className="container">
			<h1>Profile Page</h1>
            {console.log("Profile was rendered")}
			<p>This is the user's profile page.</p>
            <UserDetails />
		</div>
	);
};

export default Profile;
