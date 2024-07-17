/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../assets/images/white.png'
export const Header = () => {
  return (
    <div>
          <header>
        <div className="header">
          <div className="container">
            <div className="header-main">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index.html" >Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index.html" >Product</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index.html" >Contacts</a>
                      </li>
                    </ul>
                    <div className="d-flex left-btn">
                      <button className="btn" type="submit">Sign
                        In</button>
                      <button className="btn" type="submit">Sign
                        up</button>
                    </div>
                    {/* <form class="d-flex left-btn">
                              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                              <button class="btn " type="submit">Search</button>
                            </form> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
