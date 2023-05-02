import './App.css';
import Navbar from './components/Home/Navbar';
import Layout from './components/Home/Layout';
import Web3 from './components/Web3.0';
import Metaverse from './components/Metaverse';
import Nft from './components/Nft';
import Defi from './components/Defi';
import Exchange from './components/Exchange';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  console.log(window.location);
  return (
    <div>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route exact path="/Web3" element={<Web3 />} >
        </Route>
        <Route exact path="/Metaverse" element={<Metaverse />} />
        <Route exact path="/Nft" element={<Nft />} />
        <Route exact path="/Defi" element={<Defi />} />
        <Route exact path="/Exchange" element={<Exchange />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}
export default App;
