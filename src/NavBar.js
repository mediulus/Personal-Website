import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <nav className="NavBar">
      <h1>VCF Handling</h1>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/Indexing'>Index</Link>
        <Link to='/Searching'>Search</Link>
        <Link to='/Browsing'>Browse</Link>
      </div>
    </nav>
  );
}

export default NavBar;