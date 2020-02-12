import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import AddressInput from ".";

describe("AddressInput", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<AddressInput />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays input with title", () => {
    const title = "Enter your wallet address";
    const component = mount(<AddressInput title={title} />);

    expect(component.find("h2").length).toBe(1);
    expect(component.find("h2").text()).toBe(title);
    expect(component.find("input").length).toBe(1);
  });

  it("displays input with different title", () => {
    const title = "Different title";
    const component = mount(<AddressInput title={title} />);
    expect(component.find("h2").text()).toBe(title);
    expect(component.find("input").length).toBe(1);
  });

  it("calls the correct callback on change", () => {
    const title = "Holaho";
    const onChange = jest.fn();
    const component = mount(<AddressInput title={title} onChange={onChange} />);

    const input = component.find("input").at(0);

    const inputText = "0xaa";
    input.simulate("change", { target: { value: inputText } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("displays the submit button", () => {
    const component = mount(<AddressInput />);

    expect(component.find("input").length).toBe(1);
  });

  it("displays the submit button with correct title", () => {
    const submitTitle = "Go go!";
    const component = mount(<AddressInput submitTitle={submitTitle} />);

    expect(component.find("button").length).toBe(1);
    expect(
      component
        .find("button")
        .at(0)
        .text()
    ).toBe(submitTitle);
  });

  it("displays the submit button with correct another title", () => {
    const submitTitle = "Another Go!";
    const component = mount(<AddressInput submitTitle={submitTitle} />);

    expect(component.find("button").length).toBe(1);
    expect(
      component
        .find("button")
        .at(0)
        .text()
    ).toBe(submitTitle);
  });
});
