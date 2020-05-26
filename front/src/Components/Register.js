import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Accueil/Header';
import axios from 'axios';
import './Register.css';


const Register = () => {

  const [succes, setSucces] = useState(false)
  const [form, setForm] = useState({
    firstname : '',
    lastname : '',
    password : '',
    cpassword : '',
    email : '',
  })

  const submitForm = () => {

    //Activates the success modal with the conditional
    setSucces(!succes);

    //Send the user with the infos into the database 
    axios.post('http://localhost:8000/user', {
      firstname : form.firstname,
      lastname : form.lastname,
      email : form.email,
      password : form.password
    }).then(result => {
      console.log(result)
    })
    setForm({
      firstname : '',
      lastname : '',
      password : '',
      cpassword : '',
      email : '',
    })
  };

  //Checked is the form is OK (same password in both input)
  const checkedform = () => {
    //this button is inactif
    let enable = true;
    //Check if each input if not empty and both password are the same.
    if (form.firstname.length > 0 && form.lastname.length > 0 && form.email.length > 0 && form.password.length > 0 && form.cpassword.length > 0) {
      if (form.cpassword === form.password) {
        enable = false;
      }
    }
    return enable;
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      {succes ? 
        <div className="alert test alert-success" role="alert">
        Félicitation ! Ton compte vient d'être créé !
        </div>
      : 
        null
      }
      <div className="container cardLogin pb-3">
      <h5 className="mb-3">Créer ton compte !</h5>
        <div className="form-group">
          <input type="text" 
          value={form.lastname}
          onChange={ (event) => setForm({...form, lastname : event.target.value}) }
          className="form-control" id="inputNom" placeholder="Nom" />
        </div>
        <div className="form-group">
          <input type="text" 
          value={form.firstname} 
          onChange={ (event) => setForm({...form, firstname : event.target.value}) }
          className="form-control" id="inputPrenom" placeholder="Prénom" />
        </div>
          <div className="form-group">
            <input type="email" 
            value={form.email} 
            onChange={ (event) => setForm({...form, email : event.target.value}) }
            className="form-control" id="inputEmail" placeholder="exemple@gmail.com" />
          </div>
          <div className="form-group">
            <input type="password" 
            onChange={ (event) => setForm({...form, password : event.target.value}) }
            value={form.password} className="form-control" id="inputPassword" placeholder="Mot de passe" />
          </div>
          <div className="form-group">
            <input type="password" 
            value={form.cpassword} 
            onChange={ (event) => setForm({...form, cpassword : event.target.value}) }
            className="form-control" id="inputCPassword" placeholder="Confirme ton mot de passe" />
          </div>
        <button type="submit" className="btn btn-primary" onClick={submitForm} disabled={checkedform()} >C'est parti !</button>
        </div>
      <Link className="mt-3" to='/'>Retour à l'accueil</Link>
      </div>
    </>
  )
};

export default Register;
