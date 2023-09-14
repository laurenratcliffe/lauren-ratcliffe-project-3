import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
     <nav className='header'>
        <div>
          <img className='logo' src="/MMM.png" alt="a logo for Make Me a Meal with three M's and a spoon and fork"/>
        </div>
        <div className='links'>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/login">Favourites</Link>
            </li>
        </div>
      </nav>
    </>
     

  );
}

export default Header;