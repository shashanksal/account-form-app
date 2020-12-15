import React from 'react';

//Material UI Imports
import { Paper } from '@material-ui/core';

//Custom Component imports
import AccountPage from '../AccountPage';
import EditForm from '../EditForm';

const MainBody = () => {
	return (
		<div>
			<Paper>
				<AccountPage></AccountPage>
				<EditForm></EditForm>
			</Paper>
		</div>
	);
};

export default MainBody;
