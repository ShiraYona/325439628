// import logo from './logo.svg';
// import './App.css';
// import Calender from './Calender';

// function App() {
//   return (
// <Calender></Calender>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Calender from './Calender';
import Prshot from './Prshot';
function App() {
  return (
    <div className="App">

 <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Myinputs/>}></Route> */}
      {<Route path='/' element={<Calender/>}></Route> }
      {<Route path='/Prshot' element={<Prshot/>}></Route> }
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;

