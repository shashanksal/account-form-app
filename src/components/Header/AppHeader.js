import React from 'react';

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

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
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
	})
);

const AppHeader = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<ArrowBackIosIcon />
				</IconButton>
				<Typography className={classes.title} align="left">
					My Account
				</Typography>
				<Button className={classes.button} color="inherit">
					Save
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default AppHeader;
