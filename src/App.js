import React from "react";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
	return (
		<div>
			<h1>Tasks (user should be manager inorder to make changes) </h1>
			<HomeScreen />
		</div>
	);
};

export default App;
