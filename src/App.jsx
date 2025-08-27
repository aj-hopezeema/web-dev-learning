import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'


function App() {

  return (
   <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>  
      <h1 className='text-4xl font-bold text-b;ue-600 mb-6'>
        Hello React + Tailwiind
      </h1>
      <Welcome name="Temitope" role="Web Developer in training"/>
   </div>
  )
}

export default App
