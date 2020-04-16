import React from 'react'
// import '../../assets/css/kyc.css'
import {Link} from 'react-router-dom'
import bg from '../../assets/images/img2.jpg'
import Stepper from '../../components/step-form/Card'

export default function KYC() {
    return (
        <div>
        <div className="image-container set-full-height" style={{backgroundImage: `url(${bg})`}}>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" href="index.html">
                <span className="text-white">Nexus</span>Insurance
              </Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars mfa-white" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    Call Us On 0700000000
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Stepper />
      </div>
    
        <footer id="footer" className="footer bg-dark">
          {/* Footer Secondary */}
          <div className="footer-secondary bg-dark">
            <div className="container">
              <div className="footer-secondary__inner bg-dark">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-copyright"><a href="_soccer_index.html">© Nexus Inc</a> 2019 &nbsp; | &nbsp; All Rights Reserved</div>
                  </div>
                  <div className="col-md-8">
                    <ul className="footer-nav footer-nav--right footer-nav--condensed footer-nav--sm">
                      <li className="footer-nav__item"><a href="_soccer_index.html">Terms and Conditions</a></li>
                      <li className="footer-nav__item"><a href="_soccer_features-shortcodes.html">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Secondary / End */}
        </footer>
        </div>
    )
}
