import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles'; // Using Material UI styles

import { dateConvert } from '../../utils/helper';

const useStyles = makeStyles((theme) =>
	createStyles({
		paper: {
			padding: theme.spacing(2),
		},
		titleFont: {
			fontWeight: 600,
			fontSize: 14,
			color: '#05AE95',
		},
		bodyFont: {
			fontSize: 14,
		},
	})
);

const AccountPage = (props) => {
	const user = useSelector((state) => state.rAccount);
	console.log(new Date(user.dob).toDateString());
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item sm={6}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.titleFont}
					>
						First Name
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user.first_name}
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<Typography
						display="block"
						align="left"
						className={classes.titleFont}
					>
						{user.last_name}
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						Banner
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.titleFont}
					>
						Email
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user.email}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.titleFont}
					>
						Phone
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user.phone}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.titleFont}
					>
						Date of Birth
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{dateConvert(user.dob)}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.titleFont}
					>
						Bio
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user.bio}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default AccountPage;
