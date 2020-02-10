import React from "react";
import renderer from "react-test-renderer";

import Loader from ".";

describe("Loader", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<Loader />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
