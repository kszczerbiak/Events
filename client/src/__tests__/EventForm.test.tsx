import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { EventForm } from "../components/eventForm/EventForm";

describe("<EventForm/>", () => {
  it("should fire click with given properties if there is connection to backend ", () => {
    const firstName = "Test";
    const lastName = "Test";
    const email = "test@test.pl";
    const date = "2021-10-04";
    const connection = true;
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <EventForm connection={connection} onSubmit={onSubmit} />
    );

    const firstNameInput = getByPlaceholderText("Your first name");
    const lastNameInput = getByPlaceholderText("Your last name");
    const emailInput = getByPlaceholderText("Your email");
    const dateInput = getByPlaceholderText("2021-10-04");

    const button = getByText("Submit");

    fireEvent.change(firstNameInput, { target: { value: firstName } });
    fireEvent.change(lastNameInput, { target: { value: lastName } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.click(button);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith(firstName, lastName, email, date);
  });
  it("inputs and button should be disabled where theres no connection to backend", () => {
    const connection = false;
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <EventForm connection={connection} onSubmit={onSubmit} />
    );

    const firstNameInput = getByPlaceholderText("Your first name");
    const lastNameInput = getByPlaceholderText("Your last name");
    const emailInput = getByPlaceholderText("Your email");
    const dateInput = getByPlaceholderText("2021-10-04");

    const button = getByText("Submit");

    expect(firstNameInput).toBeDisabled;
    expect(lastNameInput).toBeDisabled;
    expect(emailInput).toBeDisabled;
    expect(dateInput).toBeDisabled;
    expect(button).toBeDisabled;
  });
});
