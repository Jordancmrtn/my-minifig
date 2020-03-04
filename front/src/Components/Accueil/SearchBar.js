import React, { useState, useContext } from 'react';
import './SearchBar.css';
import CtxSerie from '../../CtxSerie';


const Searchbar = () => {

  //import of the API fetch in APP en set in a hook
  const serie = useContext(CtxSerie)

  const [resultSearch, setResultSearch] = useState('');

  //Set the onChange event ont the input into resultSearch
  const handleFilterSearch = (event) => {
    setResultSearch(event.target.value)
  };

  //Filter on serie with the include methode to take only mifigures wich have the text in their title
  const result = serie.filter( minifig => minifig.title.toLowerCase().includes(resultSearch.toLowerCase()))

  return (
      <>
      <div className="input-group mb-3 mt-3 searchBar">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1" aria-label="Loupe" aria-describedby="Icon de la loupe">	&#128269;</span>
        </div>
        <input type="text" className="form-control" onChange={handleFilterSearch} placeholder="Recherche" aria-label="Recherche" aria-describedby="Tapez votre recherche ici" />
      </div>
      {resultSearch.length <= 0 ? 
      null 
      : 
      <div className="container">
        <h5>Résultat(s) de la recherche</h5>
      <div className="cardSearch">
      {
        result.map((minifig, index) => {
          return (
            <div className="card divCard" style={{ width: 169 + "px" }} key={index}>
              <img src={minifig.img_url} className="card-img-top imgMinifig" alt={minifig.title} style={{ margin: 10 + "%" + 0 + "%" + 2 + "%" + 0 + "%" }} />
              <div className="test">
                <p className="card-text name">{minifig.title}</p>
                <p className="card-text year">Série : {minifig.serie}</p>
                <p className="card-text year">{minifig.year}</p>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Je l'ai</label>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>  
    </div>
    }
      
      </>
  )
}
        
export default Searchbar;
