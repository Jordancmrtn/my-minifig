import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from './Accueil/Header';
import CtxUser from '../CtxUser';
import axios from 'axios';
import './Register.css';

const Login = () => {

  const user = useContext(CtxUser);

  //set event of the input into form
  const [form, setForm] = useState({
    password : '',
    email : '',
  });

  //set the result of the fetch that match the form in user
  const submitForm = () => {
    axios.post('http://localhost:8000/login/', {
      email: form.email,
      password: form.password
    }).then(result => {
      if(result.status === 200) {
        localStorage.setItem('token', result.data.token);
      }
      console.log(result);
    })
  }

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column">
      { user.email ? <Redirect to="/profil" /> : null }
      <div className="container cardLogin pb-3 mt-5">
      <h5>Connecte-toi !</h5>
      <div className="form-group">
        <input type="text" 
        value={form.email}
        onChange={ (event) => setForm({...form, email : event.target.value}) }
        className="form-control" id="inputNom" placeholder="exemple@gmail.com" />
      </div>
      <div className="form-group">
        <input type="password" 
        value={form.password} 
        onChange={ (event) => setForm({...form, password : event.target.value}) }
        className="form-control" id="inputPrenom" placeholder="Mot de passe" />
      </div>
      <Link to='/profil' type="submit" className="btn btn-primary" onClick={submitForm} >Se connecter</Link>
      </div>

      <Link className="mt-3" to='/'>Retour à l'accueil</Link>
      </div>
    </>
  )
};

export default Login;