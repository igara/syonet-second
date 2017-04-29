import test from "ava";
import React from "react";
import {shallow, mount} from "enzyme";

import Routes from "../../imports/routes.jsx";
import Body from "../../imports/ui/layouts/body/body.jsx";

test("Should test for initial route", t => {
	const wrapper = shallow(<Body />);
	t.is(1, 1);
});
