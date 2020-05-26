import React, {useContext} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CtxUser from '../../CtxUser';

const Header = () => {

  const user = useContext(CtxUser);
  
  return (
    <div className="title">
      <Link to='/'><h1 >MY MINIFIG</h1></Link>
      {user.firstname != null ? <><p>Hello {user.firstname} ! </p><Link to='/profil'> Mon compte</Link> </> : <Link to='/login'><p>Connecte-toi !</p></Link> }
    </div>
  )
}

export default Header;

