import React from "react";
import { render } from "enzyme";
import Icon from "..";
import mountTest from "../../../../tests/shared/mountTest";

describe("render", () => {
  mountTest(() => <Icon type="add" />);
  it("render correctly", function() {
    const wrapper = render(<Icon type="add" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("render loading", function() {
    const wrapper = render(
      <Icon type="loading" spin={true} fill="#1890ff" interval={1200} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("props", () => {
  it("props fill", function() {
    const wrapper = render(<Icon type="add" fill="green" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("props spin", function() {
    const wrapper = render(<Icon type="add" spin={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("props interval", function() {
    const wrapper = render(<Icon type="add" interval={500} />);
    expect(wrapper).toMatchSnapshot();
  });
});
