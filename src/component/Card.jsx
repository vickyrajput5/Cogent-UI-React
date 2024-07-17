import React from 'react'

import circuit from '../assets/images/circuit.png'
import objective from '../assets/images/objective.png'
import smartphone from '../assets/images/smartphone.png'
import arrow from '../assets/images/arrow-right-5.png'

export const Card = () => {
  return (
    <div className="services-card">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img src={circuit} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Web
                          Services</h5>
                        <p className="card-text">Some networks
                          believe that by only offering.
                        </p>
                      </div>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={objective} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">CRM
                          Product</h5>
                        <p className="card-text">Some networks
                          believe that by only offering.
                        </p>
                      </div>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={smartphone} alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Mobile
                          App</h5>
                        <p className="card-text">Some networks
                          believe that by only offering.
                        </p>
                      </div>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
  )
}
