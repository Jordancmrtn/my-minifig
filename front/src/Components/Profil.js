import React, { useContext } from 'react';
import CtxUser from '../CtxUser';
import Headers from './Accueil/Header';
import CtxCollection from '../CtxCollection';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profil = () => {

    const user = useContext(CtxUser);
    const collection = useContext(CtxCollection)

    const handleRemove = (e, index, minifig) => {

      axios.delete(`http://localhost:8000/collection?user=${user.id}&serieid=${minifig.id}`)
      .then(response => {
        console.log(response)
      })
    }

    const handleDeconnection = () => {
      localStorage.removeItem('token');
    }
    
  return(
    <>
      <Headers />
      <div className="mt-5">
        <p>Hello <b>{user.firstname}</b> voici ta collection</p>
        <Link to="/" onClick={handleDeconnection}>Se deconnecter</Link>
        <div className="cardContainer container-sm">
        {
          collection.map((minifig, index) => {
            return (
              <div className="card divCard pb-3" style={{ width: 169 + "px" }} key={index}>
                  <img src={minifig.img_url} className="card-img-top imgMinifig" alt={minifig.title} style={{ margin: 10 + "%" + 0 + "%" + 2 + "%" + 0 + "%" }} />
                  <p className="card-text name">{minifig.title}</p>
                  <p className="card-text year">série : {minifig.serie}</p>
                  <p className="card-text year">{minifig.year}</p>
                  <button type="button" key={index} className="btn btn-danger mt-3 mb-3" onClick={(e) => handleRemove(e, index, minifig)}>Je retire de ma collection</button>
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

export default Profil;
