import React, { useState, useEffect, useContext } from 'react';
import './SerieList.css';
import Accueuil from '../Accueil/Header';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../Accueil/SearchBar';
import axios from 'axios';
import CtxUser from '../../CtxUser';
import CtxCollection from '../../CtxCollection';
import Loading from '../Loading';

const SerieList = ({id}) => {

  const user = useContext(CtxUser);
  const collection = useContext(CtxCollection);
  
  const [test, setTest] = useState(false)
  const [serie, setSerie] = useState([]);
  const [nameSerie, SetNameSerie] = useState("")
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    setLoading(true)

    const test = async () => {
      await axios.get(`http://localhost:8000/series/${id}`)
      .then(response => {
        setSerie(response.data)
      })
      
      setLoading(false)
    }

    test()

    if (id === "dcsuperheroes") {
      SetNameSerie("DC Super Heroes")
    } else if (id === "disney2") {
      SetNameSerie("Disney 2")
    } else if (id === "disney1") {
      SetNameSerie("Disney 1")
    } else if (id === "legomovie1") {
      SetNameSerie("Lego Movie 1")
    } else if (id === "legomovie2") {
      SetNameSerie("Lego Movie 2")
    } else if (id === "batman1") {
      SetNameSerie("Batman Movie 1")
    } else if (id === "batman2") {
      SetNameSerie("Batman Movie 2")
    } else if (id === "harrypotter") {
      SetNameSerie("Harry Potter et les animaux fantastiques")
    } else if (id === "footallemagne") {
      SetNameSerie("L'équipe de football d'Allemagne - La Mannschaft")
    } else if (id === "simpson1") {
      SetNameSerie("Simpsons 1")
    } else if (id === "simpson2") {
      SetNameSerie("Simpsons 2")
    } else if (id === "teamgb") {
      SetNameSerie("Team GB Olympic")
    } else {
      SetNameSerie(id)
    }
  },[id]);

  const loadingfunction =  () => {
    setLoading(!loading)
  }

  //J'ajoute à ma collection personelle
  const handleAdded = (e, index, minifig) => {

    axios.post(`http://localhost:8000/collection?user=${user.id}&serieid=${minifig.id}`)
    .then(response => {
      console.log(response)
    })
    setTest(!test)
  }

  //Je supprime de la collection personelle
  const handleRemove = (e, index, minifig) => {

    axios.delete(`http://localhost:8000/collection?user=${user.id}&serieid=${minifig.id}`)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <>
      <Accueuil />
      <NavBar />
      <SearchBar />
      <h3>Série {nameSerie}</h3>
      <p>Elle compte {serie.length} minifigs</p>
      {loading ? 
      <Loading /> 
      : 
      <div className="cardContainer container-sm">
        {
          serie.map((minifig, index) => {
            return (
              <div className="card divCard" style={{ width: 169 + "px" }} key={index}>
                <img src={minifig.img_url} className="card-img-top imgMinifig" alt={minifig.title} style={{ margin: 10 + "%" + 0 + "%" + 2 + "%" + 0 + "%" }} />
                <p className="card-text name">{minifig.title}</p>
                <p className="card-text year">{minifig.year}</p>
                {
                (collection.find(fig => fig.title === minifig.title) !== undefined) ? 
                  <button type="button" key={index} className="btn btn-danger mt-3 mb-3" onClick={(e) => handleRemove(e, index, minifig)}>Je retire de ma collection</button>
                  :
                  <button type="button" key={index} className="btn btn-warning mt-3 mb-3" onClick={(e) => handleAdded(e, index, minifig)}>J'ajoute à ma collection</button>
                } 
              </div>
            )
          })
        }
      </div>
      }
    </>
  )
}

export default SerieList;
