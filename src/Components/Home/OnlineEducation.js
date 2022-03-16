import React, { Component } from "react";

import "../../App.css";

export default function OnlineEducation() {
  return (
    <section id="online-education">
      <div className="container-fluid">
        <div className="row">
          <div className="cms_banner">
            <div className="col-xs-12 col-md-6">
              <div>
                <a href="#">
                  <img
                    src="image/video.png"
                    alt="Sub Banner1"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="banner">
                <div className="online-edu">
                  <a href="#">
                    <img
                      src="image/online-edu.png"
                      alt="Sub Banner2"
                      className="img-responsive"
                    />
                  </a>
                  <div className="bannertext">
                    <h2>Online Education</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                    <button className="btn bg-orange text-black">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row kid-gallery">
          <div className="cms_banner">
            <div className="col-sm-12 problem__wala">
              <div className="banner">
                <a href="#">
                  <img
                    src="image/kid-winner-gallery.png"
                    alt="Sub Banner2"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <h2 className="text-white">Kids Zone Winner Gallery</h2>
                  <button className="btn bg-orange text-black">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
