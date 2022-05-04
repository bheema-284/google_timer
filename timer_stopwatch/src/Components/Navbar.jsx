import { Link } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBell } from '@fortawesome/free-regular-svg-icons';
const element = <FontAwesomeIcon icon={faClock} />;
const element1 = <FontAwesomeIcon icon={faBell} />;
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to={'/'}>
        Timer {element1}
      </Link>
      <Link className="link" to={'/stopwatch'}>
        Stopwatch {element}
      </Link>
    </div>
  );
};
