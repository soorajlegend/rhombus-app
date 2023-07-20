import { auth } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {

    const {userId} = auth();

  return (
    <div>Dashboard: {userId}</div>
  )
}

export default Dashboard