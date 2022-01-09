import {describe, expect, test} from '@jest/globals'
import eventComp from '../components/cardHolder' 

//const func = require('../components/cardHolder')
jest.mock('../components/cardHolder')

describe('CardHolder jest arry sorting', () => {
    //func()
	     test('Should render event soted by date', () => {
		    const props = {eventComp: jest.fn()}
            const spyfn = jest.fn(eventComp)

            const events = [{ id: 3, eventname: "Wheelspeed and smoke", date: '2022-07-01', description: "lite mindre intresant" , imageUrl: 'test' },
            { id: 1, eventname: 'Cars and coffe', date: '2022-06-27 2022-07-01', description: "något intresant" , imageUrl: 'test' }] 


            spyfn({ events })
            //@ts-ignore
            spyfn.mockImplementationOnce(() =>{
                return {events}
            })
            //expect(spyfn).toHaveBeenCalled()
            expect(spyfn.mock.calls).toEqual()
            //expect(spyfn).toBeCalled()
            //expect(spyfn).toBe(1)
	})

})