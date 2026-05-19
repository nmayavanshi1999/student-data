import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentsTable from './Components/StudentTable.jsx'
import { BrowserRouter } from "react-router";
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import ProductList from './Components/ProductList.jsx'
import RegisterForm from './Components/RegisterForm.jsx'
import Login from './Components/Login.jsx'
import Todo from './Components/Todo.jsx'








createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
     <App />
  </StrictMode>
   </BrowserRouter>
)
