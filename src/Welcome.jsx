import React from 'react'

function Welcome(props) {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-green-700'>
        Welcome, {props.name} !
      </h1>
      <p className='text-2xl text-black-200'>Your role, {props.role}</p>
    </div>
  )
}

export default Welcome; 
