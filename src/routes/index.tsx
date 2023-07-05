import React from 'react'

import { Route, Routes as RoutesDom } from 'react-router-dom'

import Home from '../pages/Home'
import Start from '../pages/Start'
import Users from '../pages/Users'
import Shutdown from '../pages/Shutdown'

const Routes: React.FC = () => (
  <RoutesDom>
    <Route path="/" element={<Start />} />
    <Route path="/users" element={<Users />} />
    <Route path="/home" element={<Home />} />
    <Route path="/shutdown" element={<Shutdown />} />
  </RoutesDom>
)

export default Routes
