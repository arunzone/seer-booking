import React from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function ({time, duration, userId}) {
  const date = time && new Date(time)
  const durationMinutes = duration && (duration / (60 * 1000))
  const durationFormatted = durationMinutes?.toFixed(1)

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {date && <Item>{date.toString()}</Item>}
        {durationFormatted && <Item>{durationFormatted}</Item>}
        {userId && <Item>{userId}</Item>}
      </Stack>
    </div>
  )
}
