import React,{Suspense , lazy} from 'react'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'


//using code splitting  to avoid unnecessary rendering of components that user dont want
//we are avoiding unnecessary rendering of components that user dont want
//route based code splitting

const NavBar = lazy(()=>import('./Components/common/NavBar'))
const List = lazy(()=>import('./Components/users/List'))
const Add = lazy(()=>import('./Components/users/Add'))
const Update = lazy(()=>import('./Components/users/Update'))

//all the lazy components must be wrap inside Suspense components
// that have fallback prop 
//while waiting for lazy components to load fallback prop will be rendered that time

function App() {
  return (
    <Router>
      {/* we can also add error boundaries fro better use experience */}
      <Suspense fallback={<div><h1>Loading....</h1></div>}>   
        <Routes>
        <Route path="/" element={<NavBar/>} >
        <Route path="/list" element={<List/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/update/:id" element={<Update/>} />
        </Route>
        <Route path="*" element={<div style={{marginLeft:"50px",marginTop:"50px"}}><h1>There's nothing here!</h1></div>} />
      </Routes>
      </Suspense>
  
    </Router>


  );
}

export default App;
