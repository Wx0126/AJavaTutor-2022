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
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path='introduction'>
                <Route index element={<Introduction/>}/>

              </Route>

           
            
            </Route>
 
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
