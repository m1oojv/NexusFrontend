import App from "../App";
import { shallow, mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import "../setupTests";
import { render, cleanup, screen } from "../test-utils";
import ReactDOM from "react-dom";
import Dashboard from "../layouts/Dashboard.js";
import toJson from "enzyme-to-json";

afterEach(cleanup);

describe("general rendering of app", () => {
  test("renders App snapshot", () => {
    const tree = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // expect(toJson(tree)).toMatchSnapshot();
  });

  test("render Dashboard", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
  });

  test("get text", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const userName = await screen.findByText(
      /Sign in to your account to continue/
    );
    screen.debug();
    expect(userName).toBeInTheDocument();
  });
});
