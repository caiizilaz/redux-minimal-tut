import React from 'react'
import { shallow } from 'enzyme'
import assert from 'assert'
import App from '../../src/components/App'
describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<App />)
      assert.equal(wrapper.find('.container').length, 1)
      assert.equal(wrapper.find('.row').length, 2)
    });
  });
})
