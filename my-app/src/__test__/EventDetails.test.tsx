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

   test('Should add 1 comment when Click on add button', () => {
    // Should add 1 comment when Click on add button
    const wrapper = mount(<BrowserRouter><Eventdetails Events={testData}  /></BrowserRouter>)
    const btn1 = wrapper.find('button[data-test="addCommentBtn"]')
    const btn2 = wrapper.find('button[data-test="addCommentBtn"]')
    btn1.simulate('click')
    btn2.simulate('click')
    setTimeout(() => {
      expect(mockAddComment.mock.calls.length).toBe(2)
      expect(mockAddComment.mock.calls[1][1]).toEqual(testcomment)
    }, 1000)

  })

  })