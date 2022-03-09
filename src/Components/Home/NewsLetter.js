import React, { Component } from "react";

import "../../App.css";

export default function Newsletter() {
  return (
    <div id="subs-newsletter" className="footer-top-cms">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src="image/footer-newsletter.png" />
          </div>
          <div className="col-md-6">
            <div className="newslatter">
              <form>
                <h5>Subscribe To Our Newsletter</h5>
                <div className="input-group">
                  <input
                    type="text"
                    className=" form-control"
                    placeholder="Your-email@website.com"
                  />
                  <button
                    type="submit"
                    value="Sign up"
                    className="btn btn-large btn-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="footer-social" style={{ display: "none" }}>
            <ul>
              <li className="facebook">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="linkedin">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="gplus">
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="youtube">
                <a href="#">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
