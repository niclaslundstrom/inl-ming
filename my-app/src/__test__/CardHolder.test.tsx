import { render, screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme'
import CardHolder from "../components/cardHolder"

const comment = "hello enna!!"
const mockcomment = jest.fn()

const testData = [{ id: 3, eventname: "Wheelspeed and smoke", date: '2022-07-01', description: "lite mindre intresant" , imageUrl: 'test' },
{ id: 1, eventname: 'Cars and coffe', date: '2022-06-27', description: "något intresant" , imageUrl: 'test' }] 

describe('CardHolder AKA Events', () => {

	it('Renders without Errors!!', () => {
		render(<CardHolder events={testData}  />)
	})

	it('Renders eventname, date, description', () => {
		render(<CardHolder events={testData} />)
		
		screen.getByText(testData[0].eventname, { exact: false })
		screen.getByText(testData[0].date, { exact: false })
	})
    it('Renders textarea whitout Errors!!', () => {
		const wrapper = shallow(<CardHolder events={testData}  />)
		expect(wrapper.find('textarea[data-test="comment on event"]').length).toBe(2)
	})
    it('Renders button whitout Errors!!', () => {
		const wrapper = shallow(<CardHolder events={testData}  />)
		expect(wrapper.find('button[data-test="sign up"]').length).toBe(2)
	})
	it('Should ul comments!', () => {
		const wrapper = shallow(<CardHolder events={testData}  />)
		expect(wrapper.find('[data-test="comment"]').length).toBe(2)
	})
	test('Should add comment as button is clickt', () => {
        const wrapper = mount(<CardHolder events={testData}  />)
        const btn = wrapper.find('button[data-test="sign up"]')
        btn.simulate('click')
        expect(mockcomment.mock.calls.length).toBe(1)
        expect(mockcomment.mock.calls[0][0]).toEqual(comment)
  })


})