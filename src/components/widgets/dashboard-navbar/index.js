import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import src from '../../../assets/images/avatar.png'
import { getUser, removeUserSession } from '../../../utils/Common';

export default function index(props) {
    const user = getUser();
console.log(user)
    const logout =()=>{
       
        removeUserSession();
        // props.history.push('/login');
      }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper text-dark">
            <a className="navbar-brand" href="javascript:;">Hello {user}</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            {/* <form className="navbar-form">
              <div className="input-group no-border">
                <input type="text" defaultValue className="form-control" placeholder="Search..." />
                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container" />
                </button>
              </div>
            </form> */}
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell" />
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <Dropdown>
  <Dropdown.Toggle  className="bg-transparent" id="dropdown-basic">
  <img className="thumbnail-image" 
                            src={src} 
                            alt="user pic"
                        />
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={logout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


                <div className="dropdown-menu dropdown-menu-down" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Mike John responded to your email</a>
                  <a className="dropdown-item" href="#">You have 5 new tasks</a>
                  <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a className="dropdown-item" href="#">Another Notification</a>
                  <a className="dropdown-item" href="#">Another One</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className="pull-left  rounded-circle nav-user-photo" width={40} src="./assets/images/avatar2.png" />
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-down" aria-labelledby="navbarDropdownProfile">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
