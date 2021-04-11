import React from "react";
import { useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles"; // Using Material UI styles

import { dateConvert } from "../../utils/helper";

const useStyles = makeStyles((theme) =>
	createStyles({
		paper: {
			padding: theme.spacing(2)
		},
		lableFont: {
			fontWeight: 600,
			fontSize: 14,
			color: "#05AE95"
		},
		bodyFont: {
			fontSize: 14
		}
	})
);

const AccountPage = (props) => {
	const user = useSelector((state) => state?.rAccount);
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item sm={6}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.lableFont}
					>
						First Name
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user?.first_name}
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<Typography
						display="block"
						align="left"
						className={classes.lableFont}
					>
						Last Name
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user?.last_name}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.lableFont}
					>
						Email
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user?.email}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.lableFont}
					>
						Phone
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user?.phone}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.lableFont}
					>
						Date of Birth
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{dateConvert(user?.dob)}
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<Typography
						display="block"
						align="left"
						color="textPrimary"
						className={classes.lableFont}
					>
						Bio
					</Typography>
					<Typography align="left" className={classes.bodyFont}>
						{user?.bio}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default AccountPage;
