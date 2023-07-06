import React from 'react'
import { Route, Routes as RoutesDom } from 'react-router-dom'
import Start from '../pages/Start'

const Routes: React.FC = () => (
  <RoutesDom>
    <Route path="/" element={<Start />} />
  </RoutesDom>
)

export default Routes
