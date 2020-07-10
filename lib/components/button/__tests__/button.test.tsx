import * as React from 'react';
import { mount, render } from 'enzyme';
import mountTest from '../../../../tests/shared/mountTest';
import { Button } from '..';

describe('button', () => {
  mountTest(Button);
  mountTest(() => <Button size='large'/>);
  mountTest(() => <Button size='small'/>);

  it('renders correctly', () => {
    const wrapper = render(<Button>default</Button>);
    expect(wrapper).toMatchSnapshot();
    const wrapper1 = render(<Button type='primary'>primary</Button>);
    expect(wrapper1).toMatchSnapshot();
    const wrapper2 = render(<Button size='large'>large</Button>);
    expect(wrapper2).toMatchSnapshot();
  });

  it('renders Chinese characters correctly', () => {
    const wrapper = render(
      <Button>
        <span>按钮</span>
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Chinese characters correctly in HOC', () => {
    const Text: React.FC<{}> = ({ children }) => <span>{children}</span>;
    const wrapper = mount(
      <Button>
        <Text>按钮</Text>
      </Button>
    );
    expect(wrapper.find('.f-btn').text().trim()).toEqual('按钮');
    wrapper.setProps({
      children: <Text>大按钮</Text>
    });
    wrapper.update();
    expect(wrapper.find('.f-btn').text().trim()).toEqual('大按钮');
    wrapper.setProps({
      children: <Text>按钮</Text>
    });
    wrapper.update();
    expect(wrapper.find('.f-btn').text().trim()).toEqual('按钮');
  });

  it('should not insert space to link button', () => {
    const wrapper = render(<Button type='link'>按钮</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty button without errors', () => {
    const wrapper = mount(
      <Button>
        {null}
        {undefined}
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
