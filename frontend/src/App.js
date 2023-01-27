import "./App.css";
import LoginSignup from "./components/LoginAndSignup/LoginSignup";
import Courses  from "./components/Courses/Courses";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import 'bootswatch/dist/minty/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>      
      <Routes>
      <Route path="/" element={<LoginSignup/>} />
      <Route path='/Courses' element={<Courses/>}/>
      </Routes>
     <Footer/>
     </BrowserRouter>
    </div>)
}


export default App;