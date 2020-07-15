import React from 'react';
import { mount } from 'enzyme';
import TalentCalculator from './TalentCalculator';

describe('TalentCalculator component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TalentCalculator />);
  });

  it("renders", () => {});

  it('it renders .talent-calculator__content', () => {
    expect(wrapper.find('.talent-calculator__content').exists()).toBe(true);
  });

  it('.talent-calculator__path-wrapper length is 2', () => {
    expect(wrapper.find('.talent-calculator__path-wrapper').length).toEqual(2);
  });
});