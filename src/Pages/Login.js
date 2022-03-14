import React, { Component } from "react";

import "../App.css";

export default function Login() {
  return (
    <>
      <div className="singIn-listing-cover">
        <h1 className="signIn-heading">Sign In</h1>
      </div>
      <section id="sign-in" className="content account">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 img-col bg-blue text-center"
              style={{ backgroundColor: "#02b0ed" }}
            >
              <img src="image/login-logo.png" />
            </div>
            <div
              className="col-md-7 sign-form"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              <form
                role="form"
                autocomplete="off"
                className="form"
                method="post"
              >
                <div className="col-md-12">
                  <div className="form-group">
                    <h2>Login Now !</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <p
                    href="#"
                    style={{
                      textAlign: "end",
                    }}
                  >
                    forget password
                  </p>
                </div>
                <div className="col-md-4">
                  <button
                    style={{
                      marginLeft: "5px",
                      background: "#e20025",
                    }}
                    className="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-8">
                  <div className="account-link">
                    <p
                      style={{
                        textAlign: "end",
                      }}
                    >
                      Create An Account{" "}
                      <a href="#" className="text-green">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group social-media">
                    <span>Login With :-</span>
                    <div className="icons">
                      <a href="#">
                        <img src="image/Group%204083.svg" />
                      </a>
                      <a href="#">
                        <img src="image/Group%204082.svg" />
                      </a>
                      <a href="#">
                        <img src="image/Group%204081.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
