import React, { useContext } from 'react';
import CtxSerie from '../../CtxSerie';
import './SerieList.css';
import Accueuil from '../Accueil/Header';
import NavBar from '../NavBar/NavBar';
import Searchbar from '../Accueil/SearchBar';

const Series = () => {
  //Use the context with have the API information that was given to her in APP
  const serie = useContext(CtxSerie);
  const myFigs = [];

  return (
    <>
      <Accueuil />
      <NavBar />
      <Searchbar />
      <h3>Toutes les séries</h3>
      <p>Il y a {serie.length} minifigs de référencées</p>
      <div className="cardContainer container-sm">
        {
          serie.map((minifig, index) => {
            return (
              <div className="card divCard" style={{ width: 169 + "px" }} key={index}>
                <img src={minifig.img_url} className="card-img-top imgMinifig" alt={minifig.title} style={{ margin: 10 + "%" + 0 + "%" + 2 + "%" + 0 + "%" }} />
                <div className="test">
                  <p className="card-text name">{minifig.title}</p>
                  <p className="card-text year">Série : {minifig.serie}</p>
                  <p className="card-text year">{minifig.year}</p>
                  <div className="form-check">
                    <input type="checkbox" 
                    onClick={ () => {
                      myFigs.push(minifig.title)
                      localStorage.setItem('MyMinifigs', myFigs)
                      console.log(myFigs)
                    }}
                    className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Je l'ai</label>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Series;
