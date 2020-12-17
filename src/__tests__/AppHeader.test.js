import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import AppHeader from '../components/Header';

const mockStore = configureMockStore();
const mStore = mockStore();

describe('test AppHeader', () => {
	it('AppHeader matches snapshot', () => {
		const { asFragment } = render(
			<Provider store={mStore}>
				<AppHeader />
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
