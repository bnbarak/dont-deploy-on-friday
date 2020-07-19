import React from "react";
import { App } from "./App";
import { mount } from "enzyme";

test("renders the app", () => {
  mount(<App />);
});
