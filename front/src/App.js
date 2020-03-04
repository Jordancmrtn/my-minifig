import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CtxSerie from './CtxSerie';
import { Switch, Route } from 'react-router-dom';

import Accueuil from './Components/Accueil/Accueil';
import Series from './Components/Series/Series';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer/Footer';
import Profil from './Components/Profil';
import CtxUser from './CtxUser';
import Serie from './Components/Series/Serie'
import CtxCollection from './CtxCollection';

function App() {

  const [serie, setSerie] = useState([]);
  const [collection, setCollection] = useState([])

  const [user, setUser] = useState({
    firstname : null,
    lastname: null,
    email: null
  });

  //Fetch data from the API and set the response in serie Hook
  useEffect(() => {
    axios.get("http://localhost:8000/series")
    .then(response => {
      setSerie(response.data)
    })
  },[]);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      axios.get("http://localhost:8000/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response, err) => {
        if(err){
          console.log(err);
        }
        console.log(response)
        setUser(response.data)
        // console.log(user);
      })
    } else {
      //redirection
    }
  }, []);


  // Fetch the user collection and provide ce ctx with the collection value
  useEffect(() => {
    axios.get(`http://localhost:8000/collection?user=${user.id}`)
    .then(response => {
      setCollection(response.data)
    })
  }, [user])

  
  //Declare for each road what component it will be displayed
  return (
    <div className="App">
      <CtxCollection.Provider value={collection}>
      <CtxUser.Provider value={user}>
      <CtxSerie.Provider value={serie} >
        <Switch>
          <Route exact path="/" component={Accueuil} />
          <Route exact path="/series" component={Series} />

          <Route exact path="/serie/:id" component={Serie} />
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profil" component={Profil} />
        </Switch>
      </CtxSerie.Provider>
      </CtxUser.Provider>
      </CtxCollection.Provider>
      <Footer />
    </div>
  );
}

export default App;
