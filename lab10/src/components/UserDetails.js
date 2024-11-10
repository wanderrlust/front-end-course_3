import React from "react";

const UserDetails = () => {
	return (
		<>
			<h2>User Details</h2>
			{console.log("User Details was rendered")}
			<p>
				<strong>Name:</strong> John Doe
			</p>
			<p>
				<strong>Email:</strong> john@example.com
			</p>
			<p>
				<strong>Phone:</strong> +1 (555) 123-4567
			</p>
			<p>
				<strong>Address:</strong> 123 Main St, Springfield, USA
			</p>
			<p>
				<strong>Company:</strong> Example Corp
			</p>
			<p>
				<strong>Position:</strong> Senior Developer
			</p>
			<p>
				<strong>Bio:</strong> Experienced developer with a background in
				web and mobile applications. Passionate about React and modern
				web technologies.
			</p>
		</>
	);
};

export default UserDetails;
