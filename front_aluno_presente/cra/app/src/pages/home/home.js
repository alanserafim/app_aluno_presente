import { useState } from 'react'
import ResponsiveAppBar from './componentes/ResponsiveAppBar'
import SimpleContainer from './componentes/SimpleContainer'



export const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <SimpleContainer />
    </div>
  )
}