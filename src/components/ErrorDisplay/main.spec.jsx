import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import ErrorDisplay from ".";

describe("ErrorDisplay", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<ErrorDisplay />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays correct error value", () => {
    const error = "An error has occured";
    const component = mount(<ErrorDisplay error={error} />);

    expect(component.contains(error)).toBe(true);
  });

  it("displays correct different error value", () => {
    const error = "A different error has occured";
    const component = mount(<ErrorDisplay error={error} />);

    expect(component.contains(error)).toBe(true);
  });
});
