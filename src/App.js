import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import './App.css'
import ListBookings from './component/booking/ListBookings'


export const App = () => {
  const onDrop = (files) => {
    console.log(files)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <Dropzone accept='.csv' onDrop={onDrop}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop some files here, or click to select files</p>
            </div>
          </section>
        )}
        </Dropzone>
      </div>
      <ListBookings />
    </div>
  )
}
