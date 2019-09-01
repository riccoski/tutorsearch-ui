import React from 'react';
import { mount } from 'enzyme';
import Card from './index';

describe('<Card>', () => {
  it('should render children', () => {
    const wrapper = mount(
      <Card>
        <p>Hello world</p>
      </Card>
    );
    expect(wrapper.find('p').length).toBe(1);
  });

  it('accepts compact prop', () => {
    const wrapper = mount(<Card compact />);
    expect(wrapper.find('div').hasClass('compact')).toBe(true);
  });

  it('accepts shadow prop', () => {
    const wrapper = mount(<Card shadow />);
    expect(wrapper.find('div').hasClass('shadow')).toBe(true);
  });

  it('Should have div as default component', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('accepts as prop', () => {
    const wrapper = mount(<Card as="li" />);
    expect(wrapper.find('li').length).toBe(1);
  });
});
