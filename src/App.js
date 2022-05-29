import "./App.css";
import Home from "./components/home";
import Videos from "./components/videos";
import Details from "./components/details";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
