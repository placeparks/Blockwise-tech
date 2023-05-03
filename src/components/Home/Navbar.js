
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
          <Link className="nav-link" to="">Coin Development</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">Blog</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About us
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="">Action</Link></li>
            <li><Link className="dropdown-item" to="">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">Something else here</Link></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
