import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import NavBar from './NavBar'

Enzyme.configure({ adapter: new Adapter() });

describe('#NavBar component', () => {
  test('should have two parent div`s`', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('div').length).toEqual(2)
  })
})