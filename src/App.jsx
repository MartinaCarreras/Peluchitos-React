import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/'
import { Home, ProductList } from './components/pages/'
import HeaderContextProvider from './context/headerContext.jsx'
import './App.css'



function App() {

  
  return (
    <>
      <BrowserRouter>
        <HeaderContextProvider>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/productos' element={<ProductList/>}/>
            </Route>
          </Routes>
        </HeaderContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
