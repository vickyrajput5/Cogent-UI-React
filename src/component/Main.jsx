/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Card } from './Card'
import Bar from '../assets/images/bar.png'
import about from '../assets/images/image-1.png'
import arrow from '../assets/images/arrow-right-1.png'
export const Main = () => {
  return (
    <div>
          <main>
        {/* hero section start */}
        <div className="hero-section">
          <div className="container">
            <div className="hero-details">
              <div className="hero-heading">
                <h1>Get It Together And Manage
                  Projects the Right Way.</h1>
              </div>
              <div className="hero-description">
                <p /><p>
                  udix is the world’s first smart workspace.
                  We
                  bring all your team’s
                  content together while letting you use the
                  tools
                  you love.
                </p><p />
              </div>
              <div className="hero-form">
                <form className="d-flex justify-content-center ">
                  <input type="text" placeholder="Email" />
                  <button className="sub-btn" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bar"><img src={Bar} alt="" /></div>
        {/* hero section end */}
        {/* service start */}
        <div className="services-section">
          <div className="container">
            <div className="services-details">
              <div className="services-title">
                <div className="services-heading">
                  <h2>Solutions that will change your business
                    forever</h2>
                </div>
                <div className="services-description">
                  <p>Some networks believe that by only offering a
                    basic tracking system their affiliates can
                    reach a high level of creativity. We like to
                    set the bar a lot higher by offering you
                    cutting-edge tech solutions together with a
                    team of creative experts.</p>
                </div>
              </div>
              <Card/>
            </div>
          </div>
        </div>
        <div className="bar"><img src={Bar} alt="" /></div>
        {/* services end */}
        <div className="counter-section">
          <div className="container">
            <div className="counter-details">
              <div className="counter-card">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">1,000 M</h5>
                        <p className="card-text">Clicks annually
                          through system</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">4.8 M</h5>
                        <p className="card-text">Relationships
                          created annually</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">100 +</h5>
                        <p className="card-text">Advertisers
                          with udix</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-btn">
                <button type="submit">Sign up now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bar"><img src={Bar} alt="" /></div>
        <div className="about-section">
          <div className="container">
            <div className="about-details">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 order2">
                    <div className="about-left">
                      <img src={about} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex">
                    <div className="about-right">
                      <div className="about-right-details">
                        <div className="about-title">
                          <h2>Creativity &amp; Technology</h2>
                        </div>
                        <div className="about-description">
                          <p>Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results</p>
                        </div>
                      </div>
                      <div className="about-right-details">
                        <div className="about-title">
                          <h2>Defines our true value</h2>
                        </div>
                        <div className="about-description">
                          <ul>
                            <li>Some networks believe that by only offering a basic tracking system</li>
                            <li>Some networks believe that by only offering a basic tracking system</li>
                            <li>Some networks believe that by only offering a basic tracking system</li>
                          </ul>
                          <div className="check-btn">
                            <a href="#">Check our solutions <img src={arrow} alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
