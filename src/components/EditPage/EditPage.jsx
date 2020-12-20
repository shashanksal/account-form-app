import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
//Material UI imports
import {
	Grid,
	Typography,
	TextField,
	TextareaAutosize,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles'; // Using Material UI styles

import { validateEmail, validateAUNumber } from '../../utils/helper';

import {
	storeTempLData,
	storeTempFData,
	storeTempBio,
	storeTempEmail,
	storeTempDob,
	storeTempPhone
} from '../../actions/formActions';

import{
	storeLDataErrorFlag,
	storeFDataErrorFlag,
	storeBioErrorFlag,
	storeEmailErrorFlag,
	storeDobErrorFlag,
	storePhoneErrorFlag
} from '../../actions/errorHandlerActions';

const errorColor = "#F44335";
const primaryColor = "#05AE95";

const useStyles = makeStyles((theme) =>
	createStyles({
		form: {},
		lableFont: {
			fontWeight: 600,
			fontSize: 14,
		},
		bodyFont: {
			fontSize: 14,
		},
		rightHelperText: {
			textAlign: 'right',
		},
		textArea: {
			width: '100%',
		},
	})
);

const EditPage = (props) => {
	const dispatch = useDispatch();

	// State for handling Errors
	let fNameError = useSelector((state) => state.rErrorHandler.fNameFlag);
	let lNameError = useSelector((state) => state.rErrorHandler.lNameFlag);
	let emailError = useSelector((state) => state.rErrorHandler.emailFlag);
	let phoneError = useSelector((state) => state.rErrorHandler.phoneFlag);
	let dobError = useSelector((state) => state.rErrorHandler.dobFlag);
	let bioError = useSelector((state) => state.rErrorHandler.bioFlag);

	const user = useSelector((state) => state.rAccount);

	const fNameFontColor = fNameError ?  errorColor: primaryColor;
	const lNameFontColor = lNameError ? errorColor : primaryColor;
	const emailFontColor = emailError ? errorColor : primaryColor;
	const phoneFontColor = phoneError ? errorColor : primaryColor;
	const dobFontColor = dobError ? errorColor : primaryColor;
	const bioFontColor = bioError ? errorColor : primaryColor;

	const handleFNameChange = (event) => {
		let value = event.target.value;
		if (!value && !fNameError) {
			dispatch(storeFDataErrorFlag(true))
		} else {
			dispatch(storeFDataErrorFlag(false))
			dispatch(storeTempFData(value))
		};
	};

	const handleLNameChange = (event) => {
		let value = event.target.value;
		if (!value && !lNameError) {
			dispatch(storeLDataErrorFlag(true))
		} else {
			dispatch(storeLDataErrorFlag(false))
			dispatch(storeTempLData(value))
		};
	};

	const handleEmailAddressChange = (event) => {
		let value = event.target.value;
		if ((!value && !emailError) || !validateEmail(value)) {
			dispatch(storeEmailErrorFlag(true))
		} else {
			dispatch(storeEmailErrorFlag(false))
			dispatch(storeTempEmail(value))
		};
	};

	const handlePhoneNumberChange = (event) => {
		let value = event.target.value;
		if ((!value && !phoneError) || !validateAUNumber(value)) {
			dispatch(storePhoneErrorFlag(true))
		} else {
			dispatch(storePhoneErrorFlag(false))
			dispatch(storeTempPhone(value))
		};
	};

	const handleDateChange = (event) => {
		let value = event.target.value;
		if (!value && !dobError) {
			dispatch(storeDobErrorFlag(true))
		} else {
			dispatch(storeDobErrorFlag(false))
			dispatch(storeTempDob(value))
		};
	};

	const handleBioChange = (event) => {
		let value = event.target.value;
		if (!value && !bioError) {
			dispatch(storeBioErrorFlag(true))
		} else {
			dispatch(storeBioErrorFlag(false))
			dispatch(storeTempBio(value))
		};
	};

	const classes = useStyles();
	return (
		<div>
			<form className={classes.form} noValidate id='accountForm'>
				{/* First Name */}
				<TextFieldComponent
					fontColor={fNameFontColor}
					lableFont={classes.lableFont}
					title="First Name"
					error={fNameError}
					defaultValue={user.first_name}
					onChange={handleFNameChange}
					rightHelperText={classes.rightHelperText}
					helpertext="Your first name is required"
					id="fName"
				/>

				{/* Last Name */}
				<TextFieldComponent
					fontColor={lNameFontColor}
					lableFont={classes.lableFont}
					title="Last Name"
					error={lNameError}
					defaultValue={user.last_name}
					onChange={handleLNameChange}
					rightHelperText={classes.rightHelperText}
					helpertext="Your last name is required"
					id="lName"
				/>

				{/* Email */}
				<TextFieldComponent
					fontColor={emailFontColor}
					lableFont={classes.lableFont}
					title="Email"
					error={emailError}
					defaultValue={user.email}
					onChange={handleEmailAddressChange}
					rightHelperText={classes.rightHelperText}
					helpertext="Your email is not valid email"
					id="email"
				/>

				{/* Phone Number */}
				<TextFieldComponent
					fontColor={phoneFontColor}
					lableFont={classes.lableFont}
					title="Phone"
					error={phoneError}
					defaultValue={user.phone}
					onChange={handlePhoneNumberChange}
					rightHelperText={classes.rightHelperText}
					helpertext="Your phone number is not a valid number"
					id="phone"
				/>

				{/* Date of Birth */}
				<Grid container spacing={2}>
					<Grid item sm={12}>
						<Typography
							display="block"
							align="left"
							color="textPrimary"
							className={classes.lableFont}
							style={{ color: dobFontColor }}
						>
							Date of Birth
						</Typography>
						<TextField
							fullWidth
							id="date"
							onChange={handleDateChange}
							type="date"
							defaultValue={new Date(user.dob).toLocaleDateString(
								'en-CA'
							)}
							className={classes.dateField}
							InputLabelProps={{
								shrink: true,
								required: true,
							}}
						/>
					</Grid>
				</Grid>

				{/* Bio */}
				<Grid container spacing={2}>
					<Grid item sm={12}>
						<Typography
							display="block"
							align="left"
							color="textPrimary"
							className={classes.lableFont}
							style={{ color: bioFontColor }}
						>
							Date of Birth
						</Typography>
						<TextareaAutosize
							rowsMin={3}
							defaultValue={user.bio}
							id="bio"
							className={classes.textArea}
							onChange={handleBioChange}
							helpertext={
								bioError ? (
									<Typography
										variant="caption"
										className={props.rightHelperText}
										display="block"
									>
										Please provide a bio
									</Typography>
								) : null
							}
						/>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

const TextFieldComponent = (props) => {
	return (
		<Grid container spacing={2}>
			<Grid item sm={12}>
				<Typography
					display="block"
					align="left"
					color="textPrimary"
					className={props.lableFont}
					style={{ color: props.fontColor }}
				>
					{props.title}
				</Typography>
				<TextField
					InputLabelProps={{ shrink: false }}
					error={props.error}
					fullWidth
					id={props.id}
					defaultValue={props.defaultValue}
					onChange={props.onChange}
					helperText={
						props.error ? (
							<Typography
								variant="caption"
								className={props.rightHelperText}
								display="block"
							>
								{props.helpertext}
							</Typography>
						) : null
					}
				></TextField>
			</Grid>
		</Grid>
	);
};

export default EditPage;
