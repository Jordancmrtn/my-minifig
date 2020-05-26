import React, { useContext } from 'react';
import CtxSerie from '../../CtxSerie';
import './CardBienvenue.css';
import { Link } from 'react-router-dom';
import CtxUser from '../../CtxUser';

const CardBienvenue = () => {

  const serie = useContext(CtxSerie);
  const user = useContext(CtxUser);

  return (
    <div className="cardBienvenue">
      <img src={process.env.PUBLIC_URL + '/Assets/img/tetelego.png'} alt="logo tete lego" id="logoLego" className="mb-3" />
      <h1>BIENVENUE SUR MY MINIFIG</h1>
      <p>Créé par un fan et pour les fans de minifigurines Lego. <br></br> Vous pourrez trouver la totalité des minifigures pour gérer votre collection !</p>
      <p>Il y a <b>{serie.length} minifigs</b> de référencées sur MyMinifig !</p>
      <p>Le site est totalement <b>GRATUIT</b></p>
      {user.firstname != null ? "" : <Link className="link" to='/register'>Je m'inscris</Link> }
    </div>
  )
}

export default CardBienvenue;
