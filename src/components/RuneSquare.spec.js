import React from 'react';
import { mount } from 'enzyme';
import RuneSquare from './RuneSquare';

describe('RuneSquare component', () => {
  let wrapper;

  it("renders", () => {
    mount(<RuneSquare />);
  });

  it('it renders .rune-square', () => {
    wrapper = mount(<RuneSquare />);
    expect(wrapper.find('.rune-square').exists()).toBe(true);
  });

  it('ableToSelect as true', () => {
    wrapper = mount(<RuneSquare ableToSelect={true} />);
    expect(wrapper.find('.rune-square--selectable').exists()).toBe(true);
  });

  it('ableToSelect as false', () => {
    wrapper = mount(<RuneSquare ableToSelect={false} />);
    expect(wrapper.find('.rune-square--selectable').exists()).toBe(false);
  });

  it('isSelected as true', () => {
    wrapper = mount(<RuneSquare isSelected={true} />);
    expect(wrapper.find('.rune-square--selected').exists()).toBe(true);
  });

  it('isSelected as false', () => {
    wrapper = mount(<RuneSquare isSelected={false} />);
    expect(wrapper.find('.rune-square--selected').exists()).toBe(false);
  });
});