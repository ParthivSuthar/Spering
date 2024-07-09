import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Category from './components/Category.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='work' element={<Work/>}/>
      <Route path='category' element={<Category />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
