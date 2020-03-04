import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from './Header'
import CardBienvenue from './CardBienvenue';
import SearchBar from './SearchBar';

const Accueuil = () => {

  return (
    <>
      <Header />
      <CardBienvenue />
      <SearchBar />
      <NavBar />
    </>
  )
}

export default Accueuil;
