import { Link } from 'react-router-dom';
import Logo from './imgs/Logo.png'; // Import the image

const NavBar = () => {
  return ( 
    <nav className="NavBar">
      <img className="Logo" src={Logo} alt="Logo" width = '150'/>
      <div className="links">
        <Link className = 'Link'to='/'>About Me</Link>
        <Link className = 'Link' to='/CurrentInterest'>Some of My Art</Link>
        <Link className = 'Link'to='/Resume'>Resume</Link>
        <a className='Link' href="https://www.linkedin.com/in/megan-diulus-0b703429b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}

export default NavBar;