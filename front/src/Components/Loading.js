import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../style/spinner.css'

export default function Loading() {

  return (
      <div id="spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
  )
}
