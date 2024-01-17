import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containeres";
import{ Cta, Brand, Navbar  } from "./components";
const App = () => {
  return (
    <div className='APP'>
      <div className='gradient_bg'>
       <Navbar />
       <Header />

      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      
     
    </div>
  )
}

export default App
