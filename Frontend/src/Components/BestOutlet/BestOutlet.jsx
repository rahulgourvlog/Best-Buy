import React from 'react'
import Best from './best'
import Data from './data'
import Explore from './explore'
import Qandans from './Qandans'
import Shopour from './Shopour'
import "./App1.css"

const BestOutlet = () => {
  return (
    <div className='App'>
    <>
    <h1></h1>
    <Best />
    <Explore />
    <Shopour/>
    <Data />
    <Qandans />
    </>
    </div>    
  )
}

export default BestOutlet