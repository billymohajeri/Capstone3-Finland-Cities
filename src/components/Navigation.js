import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import { IoMdSettings, IoMdArrowRoundBack, IoMdMic } from 'react-icons/io';

const Navigation = () => (
  <nav className="nav-bar">
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          <IoMdArrowRoundBack />
        </NavLink>
      </li>
      <li>
        <IoMdMic />
        <IoMdSettings />
      </li>
    </ul>
  </nav>
);

export default Navigation;
