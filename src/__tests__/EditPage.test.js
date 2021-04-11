import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import EditPage from "../components/EditPage";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const initData = {
	rAccount: {
		first_name: "Bruce",
		last_name: "Banner",
		email: "bruce.banner@marvel.com",
		phone: "0400000000",
		dob: new Date("31 May 1970"),
		bio:
			'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.'
	},
	rForm: false
};

const mStore = mockStore(initData);

describe("test Edit page", () => {
	it("Edit page matches snapshot", () => {
		const { asFragment } = render(
			<Provider store={mStore}>
				<EditPage />
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
