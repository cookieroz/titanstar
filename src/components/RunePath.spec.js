import React from 'react';
import { mount } from 'enzyme';
import RunePath from './RunePath';

describe('RunePath component', () => {
  let runeTypes = ['blocks', 'meal', 'cake', 'crown'];
  let wrapper;

  const factory = (spentPoints = 0) => {
    return mount(<RunePath runeTypes={runeTypes} spentPoints={spentPoints} talentPoints={6} updateSpentPoints={jest.fn()} />)
  }

  it("renders", () => {
    factory()
  });

  it('it renders .rune-path', () => {
    wrapper = factory();
    expect(wrapper.find('.rune-path').exists()).toBe(true);
  });

  it('.rune-path__rune length is same as runeTypes length', () => {
    wrapper = factory();
    expect(wrapper.find('.rune-path__rune').length).toEqual(runeTypes.length);
  });
});