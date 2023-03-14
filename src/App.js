import './App.css';
import Reg from './components/Reg';
import Login from './components/Login';
import{  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
//import EducationDetails from './components/EducationDetails';
import Success from './components/Success';import Product from './components/Product';
import Post from './components/Post';
import User from './components/User'
import Todo from './components/Todo'
function App() {  
  
  return (   
  <div>     
    <Router>      
      <Routes>      
        <Route exact path="/" element={<Reg />} />      
        <Route exact path="/login" element={<Login />} />      
        <Route exact path="/dashboard" element={<Dashboard/>}/>      
        {/* <Route exact path="/education" element={<EducationDetails/>}/> */}      
        <Route exact path="/confirmation" element={<Success/>}/>      
        <Route exact path="/product" element={<Product/>}/>      
        <Route exact path="/post" element={<Post/>}/>      
        <Route exact path="/users" element={<User/>}/>      
        <Route exact path="/todo" element={<Todo/>}/>           
        </Routes>      
        </Router>    
        </div>  
        );
      }
      export default App;