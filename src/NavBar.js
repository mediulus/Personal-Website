import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <nav className="NavBar">
      <NavLink to="/" className="LogoLink">
        <span className="wordmark">Meg&nbsp;Diulus</span>
      </NavLink>
      <div className="links">
        <NavLink className='Link' to='/' end>About Me</NavLink>
        <NavLink className='Link' to='/CurrentInterest'>Art</NavLink>
        <NavLink className='Link' to='/Resume'>Resume</NavLink>
        <a className='Link' href="https://www.linkedin.com/in/megan-diulus-0b703429b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}

export default NavBar;
