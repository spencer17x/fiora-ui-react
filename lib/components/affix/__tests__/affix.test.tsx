import * as React from 'react';
import { render } from 'enzyme';
import Affix from '..';
import Button from '../../button/button';

describe('affix', () => {
  it('render', function () {
    const Component1 = render(<Affix/>);
    expect(Component1).toMatchSnapshot();
    const Component2 = render(
      <Affix>
        <Button type='primary'>Hello World</Button>
      </Affix>
    );
    expect(Component2).toMatchSnapshot();
  });
  it('props offsetTop', () => {
    const Component = render(
      <Affix offsetTop={20}>Hello World</Affix>
    );
    expect(Component).toMatchSnapshot();
  });
});
