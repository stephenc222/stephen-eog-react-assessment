import React from 'react'
import { Provider } from "urql";
import Subscriber from './Subscriber'

const Dashboard = () => {
  return (
    <Provider>
      <Subscriber />
    </Provider>
  )
}

export default Dashboard
