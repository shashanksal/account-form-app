import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import MainBody from "../components/MainBody";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const initData = {};

const mStore = mockStore(initData);

describe("test Mainbody", () => {
	it("Main body matches snapshot", () => {
		const { asFragment } = render(
			<Provider store={mStore}>
				<MainBody />
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
