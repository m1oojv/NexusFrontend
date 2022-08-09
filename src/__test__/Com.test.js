import App from "../App";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import "../setupTests";
import { render, cleanup, screen, fireEvent } from "../test-utils";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("testing sign in", () => {
  test("checking initial email value is undefined", async () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const emailInput = await component.findByTestId("email");
    expect(emailInput.value).toBe("");
  });

  test("validating email input", async () => {
    const username = " ";
    const password = " ";
    await act(async () => {
      const component = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const emailInput = await component.findByTestId("email");
      const passwordInput = await component.findByTestId("password");
      const submitButton = await component.findByTestId("submit-button");
      fireEvent.change(emailInput, { target: { value: username } });
      fireEvent.change(passwordInput, { target: { value: password } });
      fireEvent.click(submitButton);
      // const nextpage = await component.findByText("Protoslabs");
    });
  });
});
