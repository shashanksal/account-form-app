import React from 'react';
import { useSelector } from 'react-redux';
//Material UI Imports
import { Paper } from '@material-ui/core';

//Custom Component imports
import AccountPage from '../AccountPage';
import EditForm from '../EditForm';

const MainBody = () => {
	const isFormEdit = useSelector((state) => state.rForm);

	return (
		<div>
			<Paper>{isFormEdit ? <EditForm /> : <AccountPage />}</Paper>
		</div>
	);
};

export default MainBody;
