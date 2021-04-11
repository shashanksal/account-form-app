import { TYPE_STORE_FORM_EDIT_MODE } from "../actions/actionTypes";

const rFromEditMode = (state = false, action) => {
	switch (action.type) {
		case TYPE_STORE_FORM_EDIT_MODE:
			return action.payload;
		default:
			return state;
	}
};

export default rFromEditMode;
