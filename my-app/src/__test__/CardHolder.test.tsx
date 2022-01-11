import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CardHolder from "../components/cardHolder"



const testData = [{ id: 3, eventname: "Wheelspeed and smoke", date: '2022-07-01', description: "lite mindre intresant" , imageUrl: 'test' },
{ id: 1, eventname: 'Cars and coffe', date: '2022-06-27', description: "något intresant" , imageUrl: 'test' }] 

describe('CardHolder AKA Events', () => {

	it('Renders without Errors!!', () => {
		render(<BrowserRouter><CardHolder events={testData}  /></BrowserRouter>)
	})

	it('Renders eventname, date, description', () => {
		render(<BrowserRouter><CardHolder events={testData} /></BrowserRouter>)
		
		screen.getByText(testData[0].eventname, { exact: false })
		screen.getByText(testData[0].date, { exact: false })
	})
    
})