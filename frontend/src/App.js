import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/home/Home.jsx';
import Introduction from "./Pages/introduction/Introduction.jsx";
function App() {
  



  return (
    <div className="App">
                      
          <BrowserRouter>
          <Routes>
            
              <Route path="/" element={<Home/>}/>
              
              <Route path='introduction' element={<Introduction />}/>

              

           
            
            
 
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
