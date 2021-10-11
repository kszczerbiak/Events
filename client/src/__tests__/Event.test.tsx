import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Event from "../components/Event/Event";

describe("<Event/>", () => {
  it("should render event with given props", () => {
    const obj = {
      firstName: "Test",
      lastName: "Test",
      email: "test@test.pl",
      date: "2021-10-04",
    };
    const { getByText, getByTestId } = render(<Event event={obj} />);

    const firstName = getByTestId("fNameTest");
    const lastName = getByTestId("lNameTest");
    const email = getByTestId("emailTest");
    const date = getByTestId("dateTest");
    expect(firstName).toHaveTextContent(obj.firstName);
    expect(lastName).toHaveTextContent(obj.lastName);
    expect(email).toHaveTextContent(obj.email);
    expect(date).toHaveTextContent(obj.date);
  });
});
