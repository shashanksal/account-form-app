import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Material UI imports
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles'; // Using Material UI styles
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; //Import for Back Icon

import { storeFormEditState } from '../../actions/formActions'; //Redux Actions

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
			color: '#05AE95',
			fontSize: 28,
			fontWeight: 600,
		},
		button: {
			textTransform: 'none',
		},
		toolbar: {
			padding: '0px 8px',
		},
	})
);

const AppHeader = () => {
	const dispatch = useDispatch();
	const isFormEdit = useSelector((state) => state.rForm);

	const handleButtonClick = () => {
		if (isFormEdit) {
			console.log('Save data');
		}
		dispatch(storeFormEditState(!isFormEdit));
	};

	const handleBackBtnClick = () => {
		dispatch(storeFormEditState(false));
	};

	const classes = useStyles();
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar className={classes.toolbar}>
				{isFormEdit ? (
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleBackBtnClick}
					>
						<ArrowBackIosIcon />
					</IconButton>
				) : (
					<div></div>
				)}

				<Typography className={classes.title} align="left">
					My Account
				</Typography>
				<Button
					className={classes.button}
					color="inherit"
					onClick={handleButtonClick}
				>
					{isFormEdit ? 'Save' : 'Edit'}
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default AppHeader;
