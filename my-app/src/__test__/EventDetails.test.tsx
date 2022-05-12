import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import Eventdetails from '../components/Eventdetails'

const testData = [{ id: '3', eventname: "Wheelspeed and smoke", date: '2022-07-01', description: "lite mindre intresant" , imageUrl: 'test', comments: [], attending: [] }]

const testcomment = '1, 2, 1, 2, testing testing ' 

const mockAddComment = jest.fn()

describe('Tests for EventComment', () => {
  test('Renders evnetcomment component', () => {
    render(<BrowserRouter><Eventdetails Events={testData}  /></BrowserRouter>)
  })
  test('Renders a button for sign up', () => {
    const wrapper = shallow(<Eventdetails Events={testData}  />)
    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })
  test('Evnet renders a textarea', () => {
    const wrapper = shallow(<Eventdetails Events={testData}  />)
    expect(wrapper.find('[data-test="comment-on-event"]').length).toBe(2)
  })
  test('Renders a button to add a comment', () => {
    const wrapper = shallow(<Eventdetails Events={testData}  />)
    expect(wrapper.find('button[data-test="addCommentBtn"]').length).toBe(1)
  })
  // rednar a button to add a attending
  test('Renders a button to add a attending', () => {
    const wrapper = shallow(<Eventdetails Events={testData}  />)
    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })
  // test a arry of attending
  test('Renders a array of attending', () => {
    const wrapper = shallow(<Eventdetails Events={testData}  />)
    expect(wrapper.find('EventAttending').length).toBe(1)
  })

  // test a arry of comments
  test('Renders a array of comments', () => {
    const wrapper = shallow(<Eventdetails Events={testData}  />)
    expect(wrapper.find('EventComment').length).toBe(1)
  })

  })