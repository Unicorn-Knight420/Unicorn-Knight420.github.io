import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Accommodation from './Components/Accommodation/Accommodation'
import Footer from './Components/Footer/Footer'
import Search from './Components/Search/Search'
import Value from './Components/Value/Value'
import Preview from './Components/Preview/Preview'


const App = () => {
  return(
    <div className='w-[85%] m-auto bg-white'>
      <Navigation/>
      <Search/>
      <Preview/>
      <Accommodation/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
