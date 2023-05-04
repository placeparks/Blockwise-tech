
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className='logo'>
    <img className='logo-img' src='/logo.png'/>
    </div>
    <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Web3">Web 3.0</Link>        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Metaverse">Metaverse</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Nft">NFT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Defi">Defi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Exchange">Exchange</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Wallet">Wallet</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blockchain">Blockchain</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Coin">Coin Development</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog">Blog</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
