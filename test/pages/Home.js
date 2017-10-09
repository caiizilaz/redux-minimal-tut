import React from 'react'
import { shallow } from 'enzyme'
import assert from 'assert'

import Home from '../../src/pages/Home'

describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Home />)
      assert.equal(wrapper.find('div').length, 1)
    });
  });
})

