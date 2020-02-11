import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Header from ".";

describe("Header", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays input with title", () => {
    const title = "Enter your wallet address";
    const component = mount(<Header title={title} />);

    expect(component.find("h2").length).toBe(1);
    expect(component.find("h2").text()).toBe(title);
  });
});
