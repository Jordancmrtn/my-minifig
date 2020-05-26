import React from 'react';
import SerieList from './SerieList';

const Serie = ({ match }) => {

  return (
    <>
      <SerieList id={match.params.id} />
    </>
  )
}

export default Serie;
