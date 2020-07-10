import React from 'react';
import { Button } from '..';
import { render } from 'enzyme';

describe('button-group', () => {
  it('render', function () {
    const wrapper = render(
      <Button.Group>
        <Button>Cancel</Button>
        <Button>OK</Button>
        <Button>OK</Button>
        <Button>OK</Button>
      </Button.Group>
    );
    expect(wrapper).toMatchSnapshot();
  });
});