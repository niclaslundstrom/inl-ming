import { render, screen } from '@testing-library/react';
import { mount  } from 'enzyme'
import CardHolder from "../components/cardHolder"

const testData = [{ id: 3, eventname: "Wheelspeed and smoke", date: '2022-07-01', description: "lite mindre intresant" , imageUrl: 'test' },] 

describe('test SearchComponet', () => {

	it('Search wheel, should render 1 event', () => {
		render(<CardHolder events={testData}  />)
        const wrapper = mount(<CardHolder events={testData} />)
        const text = "wheel"
        const searchtext = wrapper.find('[data-test="Event-search"]')
        searchtext.simulate("change",{ target: { value: text }})
        expect(wrapper.find('[data-test="eventresult"]').length).toBe(1)
	})

	it('Search ball, should render 0 event', () => {
		render(<CardHolder events={testData}  />)
        const wrapper = mount(<CardHolder events={testData} />)
        const text = "ball"
        const searchtext = wrapper.find('[data-test="Event-search"]')
        searchtext.simulate("change",{ target: { value: text }})
        expect(wrapper.find('[data-test="eventresult"]').length).toBe(0)
	})

})