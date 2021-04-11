import React from "react";

import { Grid } from "@material-ui/core";

//Custom components Import
import AppHeader from "../Header";
import MainBody from "../MainBody";

import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				{/* <Grid item md={5}></Grid> */}
				<Grid item md={3}>
					<div className="App">
						<AppHeader></AppHeader>
						<MainBody></MainBody>
					</div>
				</Grid>
				<Grid item md={9}></Grid>
			</Grid>
		</React.Fragment>
	);
};

export default App;
