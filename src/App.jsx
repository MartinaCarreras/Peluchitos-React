import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/'
import { Home, ProductList } from './components/pages/'
import './App.css'


function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/productos' element={<ProductList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
