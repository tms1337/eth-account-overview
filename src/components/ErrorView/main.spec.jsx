import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import ErrorView from ".";

describe("ErrorView", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<ErrorView />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays correct error value", () => {
    const error = "An error has occured";
    const component = mount(<ErrorView error={error} />);

    expect(component.contains(error)).toBe(true);
  });

  it("displays correct different error value", () => {
    const error = "A different error has occured";
    const component = mount(<ErrorView error={error} />);

    expect(component.contains(error)).toBe(true);
  });
});
