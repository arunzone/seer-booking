import React from 'react'
import { mount } from 'enzyme'
import BookingItem from './BookingItem'
import { Stack } from '@mui/material'
describe('Booking item', () => {
    describe('should display ', () => {
        const time = "01 Mar 2020 11:00:00 GMT+1000"
        const duration = 180 * 60 * 1000
        const userId = "0001"

        const bookingItem = mount(<BookingItem time={time} duration={duration} userId={userId}/>)

        it('formatted date', () => {
            const timeField = bookingItem.find(Stack).props().children[0].props
            expect(timeField['children']).toEqual('Sun Mar 01 2020 12:00:00 GMT+1100 (Australian Eastern Daylight Time)')
        })
        it('formatted duration', () => {
            const durationField = bookingItem.find(Stack).props().children[1].props
            expect(durationField['children']).toEqual('180.0')
        })
        it('user id', () => {
            const userField = bookingItem.find(Stack).props().children[2].props
            expect(userField['children']).toEqual('0001')
        })
    })
    describe('should not display ', () => {
        const time = "01 Mar 2020 11:00:00 GMT+1000"
        const duration = 180 * 60 * 1000
        const userId = "0001"

        const bookingItem = mount(<BookingItem time={time} duration={duration} userId={userId}/>)

        it('formatted date', () => {
            const bookingItem = mount(<BookingItem duration={duration} userId={userId}/>)
            const timeField = bookingItem.find(Stack).props().children[0]

            expect(timeField).toBeUndefined()
        })
        it('formatted duration', () => {
            const bookingItem = mount(<BookingItem time={time} userId={userId}/>)
            const durationField = bookingItem.find(Stack).props().children[1]

            expect(durationField).toBeUndefined()
        })
        it('user id', () => {
            const bookingItem = mount(<BookingItem time={time} duration={duration}/>)
            const userField = bookingItem.find(Stack).props().children[2]

            expect(userField).toBeUndefined()
        })
    })

})
