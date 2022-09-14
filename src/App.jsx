import * as React from 'react'
import { Header, Map } from './components'

function App() {

  return (
    <div className="App">
      <div className='max-h-screen'>
        <div className='sticky z-50'>
          <Header />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default App
