import React from 'react'
import Interface from './Interface'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import Navigation from '../components/navigation'

function App() {
  return (
    <html>
    <body>
        <Navigation buttons={false} theme="dark"/>
      <Theme appearance='light'>
        <Interface />
      </Theme>
    </body>
  </html>
  )
}

export default App


