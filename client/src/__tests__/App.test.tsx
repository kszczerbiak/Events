import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import App, { validate } from "../App";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("<App/>", () => {
  let wrapper: any;
  beforeEach(() => {
    act(() => {
      wrapper = mount(<App />);
    });
  });
  it("should render component", () => {
    expect(wrapper).not.toBeNull();
  });
});
