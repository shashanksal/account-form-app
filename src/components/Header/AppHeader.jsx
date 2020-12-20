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

import { storeFormEditState , storeAccountData } from '../../actions/formActions'; //Redux Actions

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
	const isFormEdit = useSelector((state) => state?.rForm);
	const tempFormData = useSelector((state) => state?.rTempFormData)

	// State for handling Errors
	let fNameError = useSelector((state) => state?.rErrorHandler?.fNameFlag);
	let lNameError = useSelector((state) => state?.rErrorHandler?.lNameFlag);
	let emailError = useSelector((state) => state?.rErrorHandler?.emailFlag);
	let phoneError = useSelector((state) => state?.rErrorHandler?.phoneFlag);
	let dobError = useSelector((state) => state?.rErrorHandler?.dobFlag);
	let bioError = useSelector((state) => state?.rErrorHandler?.bioFlag);

	const handleButtonClick = () => {
		if(fNameError || lNameError || emailError || phoneError || dobError || bioError) return;
		if (isFormEdit) {
			dispatch(storeAccountData({
				first_name: tempFormData?.tempFname,
				last_name: tempFormData?.tempLname,
				email: tempFormData?.tempEmail,
				phone: tempFormData?.tempPhone,
				dob: new Date(tempFormData?.tempDob),
				bio: tempFormData?.tempBio,
			}));
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
