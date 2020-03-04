import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
  //They are arranged in order of exit. From most recent to oldest
  return (
    <Fragment>
      <div className="dropdown mt-3">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Toutes les séries 
          </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link className="nav-link dropdown-item" to='/series'>Toutes les séries</Link>
          <div className="dropdown-divider"></div>
          <Link className="nav-link dropdown-item" to='/serie/dcsuperheroes'>Série DC Super Heroes</Link>
          <Link className="nav-link dropdown-item" to='/serie/19'>Série 19</Link>
          <Link className="nav-link dropdown-item" to='/serie/disney2'>Série Disney 2</Link>
          <Link className="nav-link dropdown-item" to='/serie/legomovie2'>Série Lego Movie 2</Link>
          <Link className="nav-link dropdown-item" to='/serie/harrypotter'>Série Harry Potter et Les Animaux fantastiques</Link>
          <Link className="nav-link dropdown-item" to='/serie/18'>Série 18</Link>
          <Link className="nav-link dropdown-item" to='/serie/batman2'>Série Batman movie 2</Link>
          <Link className="nav-link dropdown-item" to='/serie/unikitty'>Série Unikitty</Link>
          <Link className="nav-link dropdown-item" to='/serie/ninjago'>Série Ninjago</Link>
          <Link className="nav-link dropdown-item" to='/serie/17'>Série 17</Link>
          <Link className="nav-link dropdown-item" to='/serie/batman1'>Série Batman movie 1</Link>
          <Link className="nav-link dropdown-item" to='/serie/16'>Série 16</Link>
          <Link className="nav-link dropdown-item" to='/serie/disney1'>Série Disney 1</Link>
          <Link className="nav-link dropdown-item" to='/serie/15'>Série 15</Link>
          <Link className="nav-link dropdown-item" to='/serie/footallemagne'>Série Equipe de foot d'Allemagne</Link>
          <Link className="nav-link dropdown-item" to='/serie/14'>Série 14</Link>
          <Link className="nav-link dropdown-item" to='/serie/simpson2'>Série Simpson 2</Link>
          <Link className="nav-link dropdown-item" to='/serie/13'>Série 13</Link>
          <Link className="nav-link dropdown-item" to='/serie/12'>Série 12</Link>
          <Link className="nav-link dropdown-item" to='/serie/simpson1'>Série Simpson 1</Link>
          <Link className="nav-link dropdown-item" to='/serie/legomovie1'>Série Lego Movie 1</Link>
          <Link className="nav-link dropdown-item" to='/serie/11'>Série 11</Link>
          <Link className="nav-link dropdown-item" to='/serie/10'>Série 10</Link>
          <Link className="nav-link dropdown-item" to='/serie/9'>Série 9</Link>
          <Link className="nav-link dropdown-item" to='/serie/8'>Série 8</Link>
          <Link className="nav-link dropdown-item" to='/serie/teamgb'>Série Team GB</Link>
          <Link className="nav-link dropdown-item" to='/serie/7'>Série 7</Link>
          <Link className="nav-link dropdown-item" to='/serie/6'>Série 6</Link>
          <Link className="nav-link dropdown-item" to='/serie/5'>Série 5</Link>
          <Link className="nav-link dropdown-item" to='/serie/4'>Série 4</Link>
          <Link className="nav-link dropdown-item" to='/serie/3'>Série 3</Link>
          <Link className="nav-link dropdown-item" to='/serie/2'>Série 2</Link>
          <Link className="nav-link dropdown-item" to='/serie/1'>Série 1</Link>          
        </div>
      </div>
    </Fragment>
  )
}

export default NavBar;