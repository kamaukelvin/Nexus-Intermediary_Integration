import React from 'react'


export default function index() {
    return (
        <div className="sidebar" data-color="purple" data-background-color="white" data-image="./assets/images/sidebar-1.jpg">
        <div className="logo"><a href="index.html" className="simple-text logo-normal">
            Nexus Insurance
          </a></div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item  ">
              <a className="nav-link" href="_">
                <i className="fa fa-th text-gray" aria-hidden="true" />
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item  ">
              <a className="nav-link" href="./clients.html">
                <i className="fa fa-users text-gray" aria-hidden="true" />
                <p>My Clients</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./underwriters.html">
                <i className="fa fa-briefcase text-gray" aria-hidden="true" />
                <p>My Underwriters</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./requests.html">
              <i class="fas fa-globe" />
                <p>My Requests</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./notifications.html">
              <i class="fas fa-bell" />
                <p>Notifications</p>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i className="fa fa-clone text-gray" aria-hidden="true" />
                <p>Quotations</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./accounts.html">
              <i class="far fa-credit-card"/>
                <p>Accounts</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <i className="fa fa-comments-o text-gray" aria-hidden="true" />
                <p>Chats</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./profession.html">
              <i class="fas fa-user-tie" />
                <p>My profession</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
              <i class="fas fa-user-friends" />
                <p>Users</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
              <i class="fas fa-file-alt" />
                <p>Terms and conditions</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}
