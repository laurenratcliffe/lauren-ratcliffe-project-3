import { Link } from 'react-router-dom';


function Header() {
  return (
      <nav className='header'>
        <div className='logo'>
          <li>M.M.M</li>
        </div>
        <div className='links'>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Favourites</Link>
            </li>
        </div>
      </nav>


  );
}

export default Header;