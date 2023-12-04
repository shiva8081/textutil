
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [color1] = useState('#00a6a0');
  const [color2] = useState('#ae70a7');
  const [color3] = useState('#a4a120');
  const changecolor1=()=>{
      props.set(color1)
  }
  const changecolor2=()=>{
props.set(color2)
  }
  const changecolor3=()=>{
props.set(color3)
  }
return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill={color1} onClick={changecolor1} className="bi bi-circle-fill mx-4" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill={color2} onClick={changecolor2} className="bi bi-circle-fill mx-4" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"  fill={color3} onClick={changecolor3} className="bi bi-circle-fill mx-4" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
            <div className={`form-check  form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
  <input className="form-check-input  "onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mr-3 " htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'light':'dark' }</label>
</div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
    </nav> 
  )
}


Navbar.propTypes= {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  home: PropTypes.string,
 
}
// console.log('hyyy');
export default Navbar;
