import React, { useEffect } from 'react'
import { api } from '../../service/Api'
import RequestState from '../../helpers/RequestState'
import CircularProgress from '@mui/material/CircularProgress'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import BookingItem from './BookingItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { Grid } from '@mui/material'

const useBookingListHandler = () => {
  const [inProgress, setInProgress] = React.useState(RequestState.INITIAL)
  const [bookings, setBookings] = React.useState(undefined)

  const loadBookings = () => {
    setInProgress(RequestState.IN_PROGRESS)
    api
      .get('/bookings')
      .then((response) => {
        setBookings(response.data)
        setInProgress(RequestState.SUCCESS)
      })
      .catch((response) => {
        console.error(response.data)
        setInProgress(RequestState.SUCCESS)
      })
  }

  useEffect(() => {
    loadBookings()
  }, [])

  return { bookings, inProgress }
}

const ListBookings = (props) => {
  const { bookings, inProgress } = useBookingListHandler(props)

  return (
    <div className='App-main'>
      {bookings && <p>Existing bookings:</p>}
      {inProgress === RequestState.IN_PROGRESS && <CircularProgress />}
      <Timeline>
        {bookings && bookings.map((booking, i, {length}) => {
          return (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
              <Grid container justifyContent="flex-end">
                <BookingItem time={booking.time} />
              </Grid>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                {length - 1 !== i && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <BookingItem duration={booking.duration} userId={booking.userId} />
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}

export default ListBookings
