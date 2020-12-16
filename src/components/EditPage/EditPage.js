import React from 'react';
import { useSelector } from 'react-redux';
//Material UI imports
import {
	Grid,
	Typography,
	TextField,
	TextareaAutosize,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles'; // Using Material UI styles

import { validateEmail, validateAUNumber } from '../../utils/helper';

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
	const [fNameError, setFNameError] = React.useState(false);
	const [lNameError, setLNameError] = React.useState(false);
	const [emailError, setEmailError] = React.useState(false);
	const [phoneError, setPhoneError] = React.useState(false);
	const [dobError, setDobError] = React.useState(false);
	const [bioError, setBioError] = React.useState(false);

	const user = useSelector((state) => state.rAccount);

	const fNameFontColor = fNameError ? '#F44335' : '#05AE95';
	const lNameFontColor = lNameError ? '#F44335' : '#05AE95';
	const emailFontColor = emailError ? '#F44335' : '#05AE95';
	const phoneFontColor = phoneError ? '#F44335' : '#05AE95';
	const dobFontColor = dobError ? '#F44335' : '#05AE95';
	const bioFontColor = bioError ? '#F44335' : '#05AE95';

	const validateFName = (event) => {
		let value = event.target.value;
		if (!value && !fNameError) {
			setFNameError(true);
		} else setFNameError(false);
	};

	const validateLName = (event) => {
		let value = event.target.value;
		if (!value && !lNameError) {
			setLNameError(true);
		} else setLNameError(false);
	};

	const validateEmailAddress = (event) => {
		let value = event.target.value;
		if ((!value && !emailError) || !validateEmail(value)) {
			setEmailError(true);
		} else setEmailError(false);
	};

	const validatePhoneNumber = (event) => {
		let value = event.target.value;
		if ((!value && !phoneError) || !validateAUNumber(value)) {
			setPhoneError(true);
		} else setPhoneError(false);
	};

	const validateDate = (event) => {
		let value = event.target.value;
		if (!value && !dobError) {
			setDobError(true);
		} else setDobError(false);
	};

	const validateBio = (event) => {
		let value = event.target.value;
		if (!value && !bioError) {
			setBioError(true);
		} else setBioError(false);
	};

	const classes = useStyles();
	return (
		<div>
			<form className={classes.form} noValidate>
				{/* First Name */}
				<TextFieldComponent
					fontColor={fNameFontColor}
					lableFont={classes.lableFont}
					title="First Name"
					error={fNameError}
					defaultValue={user.first_name}
					onChange={validateFName}
					rightHelperText={classes.rightHelperText}
					helperText="Your first name is required"
					id="fName"
				/>

				{/* Last Name */}
				<TextFieldComponent
					fontColor={lNameFontColor}
					lableFont={classes.lableFont}
					title="Last Name"
					error={lNameError}
					defaultValue={user.last_name}
					onChange={validateLName}
					rightHelperText={classes.rightHelperText}
					helperText="Your last name is required"
					id="lName"
				/>

				{/* Email */}
				<TextFieldComponent
					fontColor={emailFontColor}
					lableFont={classes.lableFont}
					title="Email"
					error={emailError}
					defaultValue={user.email}
					onChange={validateEmailAddress}
					rightHelperText={classes.rightHelperText}
					helperText="Your email is not valid email"
					id="email"
				/>

				{/* Phone Number */}
				<TextFieldComponent
					fontColor={phoneFontColor}
					lableFont={classes.lableFont}
					title="Phone"
					error={phoneError}
					defaultValue={user.phone}
					onChange={validatePhoneNumber}
					rightHelperText={classes.rightHelperText}
					helperText="Your phone number is not a valid number"
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
							onChange={validateDate}
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
							onChange={validateBio}
							helperText={
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
								{props.helperText}
							</Typography>
						) : null
					}
				></TextField>
			</Grid>
		</Grid>
	);
};

export default EditPage;
