import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#332d2dff', padding: '10px', display: 'flex', justifyContent: 'center', gap: '20px'  }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Services</Link>
      <Link to="/contact" style= {{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
