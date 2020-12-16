import React from 'react';
import { useSelector } from 'react-redux';
//Material UI Imports
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles'; // Using Material UI styles

//Custom Component imports
import AccountPage from '../AccountPage';
import EditForm from '../EditForm';

const useStyles = makeStyles((theme) =>
	createStyles({
		paper: {
			padding: theme.spacing(2),
		},
	})
);

const MainBody = () => {
	const isFormEdit = useSelector((state) => state.rForm);

	const classes = useStyles();
	return (
		<div>
			<Paper className={classes.paper}>
				{isFormEdit ? <EditForm /> : <AccountPage />}
			</Paper>
		</div>
	);
};

export default MainBody;
