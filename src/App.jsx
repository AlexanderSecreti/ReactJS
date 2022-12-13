import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Icon from './components/Icon'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/DigitalCelu/' element={<ItemListContainer greeting={"Item List Container"}/>} />
      <Route path='/DigitalCelu/category/:id' element={<ItemListContainer greeting={"Item List Container"}/>} />
      <Route path='/DigitalCelu/item/:id' element={<ItemDetailContainer/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App