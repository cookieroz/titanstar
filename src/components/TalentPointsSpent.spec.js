import React from 'react';
import { mount } from 'enzyme';
import TalentPointsSpent from './TalentPointsSpent';

describe('TalentPointsSpent component', () => {
  let wrapper;

  it("renders", () => {
    mount(<TalentPointsSpent />);
  });

  it('it renders .talent-points', () => {
    wrapper = mount(<TalentPointsSpent />);
    expect(wrapper.find('.talent-points').exists()).toBe(true);
  });

  it('it displays talentPoints', () => {
    wrapper = mount(<TalentPointsSpent spentPoints={2} talentPoints={6} />);
    expect(wrapper.find('.talent-points__points-spent').text()).toBe('2/6');
  });
});