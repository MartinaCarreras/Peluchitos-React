import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/'
import { ProductListContainer, ContactContainer } from './components/pages/'
import HeaderContextProvider from './context/headerContext.jsx'
import './App.css'
import { HomeContainer } from './components/pages/home/HomeContainer.jsx'



function App() {

  
  return (
    <>
      <BrowserRouter>
        <HeaderContextProvider>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<HomeContainer/>}/>
              <Route path='/productos' element={<ProductListContainer/>}/>
              <Route path='/contacto' element={<ContactContainer/>}/>
            </Route>
          </Routes>
        </HeaderContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
