import { StrictMode, useState } from 'react'
import './App.css'
import StudentsTable from './Components/StudentTable'
import { Routes, Route } from 'react-router';
import Home from './Components/Home';
import About from './Components/About';
import StudentDetails from './Components/StudentDetails';
import NotFound from './Components/NotFound';
import ProductList  from './Components/ProductList';
import Login from './Components/Login'; 
import RegisterForm from './Components/RegisterForm';
import Todo from './Components/Todo';





function App() {
  return(

<Routes>
  <Route path="/" element={<Home/>}>
  <Route path="about" element={<About/>}/>
  <Route path="Product" element={<ProductList/>}/>
  <Route path="studenttable/:name" element={<StudentDetails/>}/>
  </Route>
  <Route path="Todo" element={<Todo/>}/>
  <Route path="/studenttable" element={<StudentsTable/>}/>
  <Route path="/RegisterForm" element={<RegisterForm/>}/>
  <Route path="/Login" element={<Login/>}/>

  <Route path="*" element={<NotFound/>}/>

</Routes>

  )
}
export default App


// function App() {
//   return (


   
//     <div className="app-layout">
//       <Sidebar />
//       <main className="app-main">
//         <h1>Dashboard</h1>
//         <p>Your main content goes here.</p>
//       </main>
//     </div>

    
//   );
// }

// export default App;
