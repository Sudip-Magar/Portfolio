import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header'
import Home from './Pages/Home'
import Feature from './Pages/Feature'
import Resume from './Pages/Resume'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex lg:gap-5 bg-bg1'>
      <div className='xl:w-1/5 z-50'>
        <Header />
      </div>
      <div className='xl:w-4/5 z-0'>
        <Home />
        <Feature/>
        <Resume/>
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
