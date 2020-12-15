import React from 'react';

//Material UI imports
import {
	Grid,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
		<Grid container spacing={3}>
			<Grid item md={4}></Grid>
			<Grid item md={4}>
				<AppBar position="static" color={'transparent'} elevation={0}>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<ArrowBackIosIcon />
						</IconButton>
						<Typography
							//variant="h4"
							className={classes.title}
							align="left"
						>
							My Account
						</Typography>
						<Button className={classes.button} color="inherit">
							Save
						</Button>
					</Toolbar>
				</AppBar>
			</Grid>
			<Grid item md={4}></Grid>
		</Grid>
	);
};

export default AppHeader;
