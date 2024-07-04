import React from 'react'
import Random from "./components/Random"
import Tag from './components/Tag'

const App = () => {
  return (
    <div className="w-full h-full flex flex-col relative items-center background">
      <h1 className="bg-white rounded-md absolute text-center mt-[20px] w-11/12 text-3xl px-10 py-2 font-bold">RANDOM GIFs</h1>
      <div className="flex flex-col w-full items-center mt-[80px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  )
}

export default App
