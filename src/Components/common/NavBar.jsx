import React from "react";
import List from "../users/List";
import './NavBar.css'

const NavBar = () => {

  //to toggle sidebar
  const  getToggled = () => {
    var el = document.getElementById('wrapper')
    var toggleButton = document.getElementById('menu-toggle')
    toggleButton.onclick = function () {
      el.classList.toggle('toggled')
    }
  }
  return (
    <div className="d-flex" id="wrapper" onClick={()=>{getToggled()}}>
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>Logo
        </div>
        <div className="list-group list-group-flush my-3">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>Home
          </a>
          <br/>
          <br/>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-project-diagram me-2"></i>Open Tickets
          </a>
          <br/>
          <br/>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-chart-line me-2"></i>Pending Tickets
          </a>
          <br/>
          <br/>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-paperclip me-2"></i>Solved Tickets
          </a>
          <br/>
          <br/>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-shopping-cart me-2"></i>Spam
          </a>
          <br/>
          <br/>
          <br/><br/>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
          >
            <i className="fas fa-power-off me-2"></i>All Tickets
          </a>

        </div>
      </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              className="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
            ></i>
            <h2 className="fs-2 m-0">Logo / Name</h2>
          </div>

        </nav>
        {/* To Display Tickets List */}
        <List />
      </div>
    </div>
  );
};

export default NavBar;
