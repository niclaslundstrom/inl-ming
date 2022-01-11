import { render } from '@testing-library/react';
import { mount  } from 'enzyme'
import { BrowserRouter } from "react-router-dom";
import CardHolder from "../components/cardHolder"

const testData = [{ id: 3, eventname: "Wheelspeed and smoke", date: '2022-07-01', description: "lite mindre intresant" , imageUrl: 'test' },] 

describe('test SearchComponet', () => {

	it('Search wheel, should render 1 event', () => {
        const wrapper = mount(<BrowserRouter><CardHolder events={testData} /></BrowserRouter>)
        const text = "wheel"
        const searchtext = wrapper.find('[data-test="Event-search"]')
        searchtext.simulate("change",{ target: { value: text }})
        expect(wrapper.find('[data-test="eventresult"]').length).toBe(1)
	})

	it('Search ball, should render 0 event', () => {
        const wrapper = mount(<BrowserRouter><CardHolder events={testData} /></BrowserRouter>)
        const text = "ball"
        const searchtext = wrapper.find('[data-test="Event-search"]')
        searchtext.simulate("change",{ target: { value: text }})
        expect(wrapper.find('[data-test="eventresult"]').length).toBe(0)
	})

})