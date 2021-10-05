import React from "react";
import {fireEvent,render} from '@testing-library/react'
import  EventsList from '../components/eventsList/EventsList'

describe('<EventsList/>', ()=> {
    it("should render list of events", ()=> {
        const list = [
            {
                firstName: 'Test',
                lastName: 'Test',
                email: 'test@test.pl',
                date:'2021-10-04'
            },{
                firstName: 'Test2',
                lastName: 'Test2',
                email: 'tes2t@test.pl',
                date:'2021-10-04'
            }
        ]
        const connection = true;
        const {getByText, getByTestId} = render (<EventsList connection={connection} events={list}/>)
        const orderedList = getByTestId('orderedList')

        expect(orderedList).toHaveTextContent(list[0].firstName);
        expect(orderedList).toHaveTextContent(list[0].lastName);
        expect(orderedList).toHaveTextContent(list[0].email);
        expect(orderedList).toHaveTextContent(list[0].date);
        expect(orderedList).toHaveTextContent(list[1].firstName);
        expect(orderedList).toHaveTextContent(list[1].lastName);
        expect(orderedList).toHaveTextContent(list[1].email);
        expect(orderedList).toHaveTextContent(list[1].date);
         })
   
})