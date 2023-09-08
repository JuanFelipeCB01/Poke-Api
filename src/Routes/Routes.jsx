import React from 'react'
import { Route, Routes as RoutesDom } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'

export default function Routes() {
  return (
    <RoutesDom>
        <Route path='/' element={<HomePage/>}/>
    </RoutesDom>
  )
}
