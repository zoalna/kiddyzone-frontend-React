import React, { Component } from "react";

import "../../App.css";

export default function GiftFinder() {
  return (
    <section id="gift-finder" className="content">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading">
              <h2>Gift Finder</h2>
            </div>
          </div>
        </div>
        <div className="row bg-blue">
          <div className="col-md-7 finder-form">
            <h2 className="text-center">Please select the following:</h2>
            <form role="form" className="form" method="post">
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <label>Gender</label>
                    <select className="form-control">
                      <option> Choose option </option>
                      <option>Boy</option>
                      <option>Girl</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <label>Age Group</label>
                    <select className="form-control">
                      <option> Choose option </option>
                      <option>3 years</option>
                      <option>4 years</option>
                      <option>5 years</option>
                      <option>6 years</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <label>Budget Range</label>
                    <select className="form-control">
                      <option> Choose option </option>
                      <option>$25 - $50</option>
                      <option>$50 - $100</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <label>Interests</label>
                    <select className="form-control">
                      <option> Choose option </option>
                      <option>Interest 1</option>
                      <option>Interest 2</option>
                      <option>Interest 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-center">
                  <a href="#" className="bg-yellow btn submit">
                    Find it!
                  </a>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-5">
            <img src="image/kid-with-gift.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
