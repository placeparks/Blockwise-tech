import './App.css';
import Navbar from './components/Home/Navbar';
import Layout from './components/Home/Layout';
import Card from './components/Home/Cards';
import Expertise from './components/Home/Expertise';
import Solutions from './components/Home/Solutions';
import MetaverseBenefits from './components/Home/Metaverse-Benefits';
import Partners from './components/Home/Partners';
import Clients from './components/Home/Clients';
import FAQ from './components/Home/FAQ';
import Blog from './components/Home/Blog';
import Contact from './components/Home/Contact';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div>
    <Navbar/>
     <Layout/>
     <Card/>
     <Expertise/>
     <Solutions/>
     <MetaverseBenefits/>
     <Partners/>
     <Clients/>
     <FAQ/>
    <Blog/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
