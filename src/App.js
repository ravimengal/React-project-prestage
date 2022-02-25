import './App.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './Components/common/NavBar';
import Add from './Components/users/Add';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Update from './Components/users/Update';
import List from './Components/users/List';

function App() {
  return (
    <Router>         
      <Routes>
        <Route path="/" element={<NavBar/>} >
        <Route path="/list" element={<List/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/update/:id" element={<Update/>} />
        </Route>
        <Route path="*" element={<div style={{marginLeft:"50px",marginTop:"50px"}}><h1>There's nothing here!</h1></div>} />
      </Routes>
    </Router>


  );
}

export default App;
