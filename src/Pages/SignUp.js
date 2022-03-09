import React, { Component } from "react";

import "../App.css";

export default function SignUp() {
  return (
    <section id="sign-up" className="content account">
      <div className="container">
        <div className="row">
          <div className="col-md-5 img-col bg-pink text-center">
            <img src="image/login-logo.png" />
          </div>
          <div
            className="col-md-7 sign-form"
            style={{ backgroundColor: "#EEEEEE" }}
          >
            <form role="form" autocomplete="off" className="form" method="post">
              <div className="col-md-12">
                <div className="form-group">
                  <h2>Sign UP Here !</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="input-group">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <input type="password" placeholder="Confirm Password" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <button className="submit">Create Account</button>
              </div>
              <div className="col-md-6">
                <div className="account-link">
                  <p>
                    Already Have An Account{" "}
                    <a href="#" className="text-green">
                      Login
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group checkbox">
                  <input type="checkbox" id="html" />
                  <label for="html">
                    Yes, I understand and agree to{" "}
                    <a href="#" className="text-green">
                      kiddy Zone Terms of service,
                    </a>{" "}
                    incliding the{" "}
                    <a href="#" className="text-green">
                      user agreement
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green">
                      privacy policy
                    </a>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
