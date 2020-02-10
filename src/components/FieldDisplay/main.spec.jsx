import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import FieldDisplay from ".";

describe("FieldDisplay", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<FieldDisplay />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has correct float value", () => {
    const value = 12.5;
    const component = mount(<FieldDisplay value={value} />);

    expect(component.contains(value)).toBe(true);
  });

  it("has correct int value", () => {
    const value = 1337;
    const component = mount(<FieldDisplay value={value} />);

    expect(component.contains(value)).toBe(true);
  });

  it("has correct text value", () => {
    const value = "Different value";
    const component = mount(<FieldDisplay value={value} />);

    expect(component.contains(value)).toBe(true);
  });

  it("shows icon if passed", () => {
    const icon =
      "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png";
    const component = mount(<FieldDisplay icon={icon} />);

    expect(component.find(`img[src="${icon}"]`).length).toBe(1);
  });

  it("does not show icon if not passed", () => {
    const component = mount(<FieldDisplay />);

    expect(component.find("img").length).toBe(0);
  });
});
