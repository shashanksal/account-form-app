import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import AccountPage from "../components/AccountPage";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const initData = {};

const mStore = mockStore(initData);

describe("test AccountPage", () => {
	it("AccountPage matches snapshot", () => {
		const { asFragment } = render(
			<Provider store={mStore}>
				<AccountPage />
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
