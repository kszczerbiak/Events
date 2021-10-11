import React from "react";
import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
  waitForDomChange,
} from "@testing-library/react";
import App, { validate } from "../App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("axios");
describe("<App/>", () => {
  test("should render component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });
  test("should display loading while fetching data", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".loading")).toHaveLength(1);
  });
});
