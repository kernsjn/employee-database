import React from 'react'
import HelloWorld from '../components/HelloWorld'
import AllEmployees from './AllEmployees'

const HomePage = () => {
  return (
    <>
      <h1 className="directory-title">Employee Directory</h1>
      <AllEmployees />
    </>
  )
}

export default HomePage
