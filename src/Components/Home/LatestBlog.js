import React, { Component } from "react";

import "../../App.css";

export default function LatestBlog() {
  return (
    <section id="latest-Blog">
      <div className="container-fluid">
        <div className="content">
          <div className="blog">
            <div className="heading">
              <h2 style={{fontSize:'16px'}}>
                Our Latest
                <br /> Blogs
              </h2>
            </div>
            <div className="blog-inner box">
              <ul className="list-unstyled blog-wrapper" id="latest-blog">
                <li className="item blog-slider-item">
                  <div className="blog1 blog">
                    <div className="blog-image">
                      <span className="blog-date bg-blue">Jun 29, 2017</span>
                      <a href="#" className="blog-imagelink">
                        <img src="image/blog/blog1.png" alt="#" />
                      </a>{" "}
                      <span className="blog-readmore-outer"></span>{" "}
                    </div>
                    <div className="blog-content">
                      <h2 className="blog-name text-blue">
                        <a href="#" className="text-blue">
                          Gift For The Little Bundle Of Joy
                        </a>
                      </h2>
                      <p>
                        Our regular newsletters are packed full of events at our
                        stores, fun facts...
                      </p>
                      <a
                        href="single-blog.html"
                        className="blog-readmore btn bg-blue"
                      >
                        Read more
                      </a>{" "}
                    </div>
                  </div>
                  
                </li>
                <li className="item blog-slider-item">
                  <div className="blog1 blog">
                    <div className="blog-image">
                      <span className="blog-date bg-red">Jun 29, 2017</span>
                      <a href="#" className="blog-imagelink">
                        <img src="image/blog/blog2.png" alt="#" />
                      </a>{" "}
                      <span className="blog-readmore-outer"></span>{" "}
                    </div>
                    <div className="blog-content">
                      <h2 className="blog-name">
                        <a href="#" className="text-red">
                          Gift For The Little Bundle Of Joy
                        </a>
                      </h2>
                      <p>
                        Our regular newsletters are packed full of events at our
                        stores, fun facts...
                      </p>
                      <a
                        href="single-blog.html"
                        className="blog-readmore btn bg-red"
                      >
                        Read more
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="item blog-slider-item">
                  <div className="blog1 blog">
                    <div className="blog-image">
                      <span className="blog-date bg-green">Jun 29, 2017</span>
                      <a href="#" className="blog-imagelink">
                        <img src="image/blog/blog3.png" alt="#" />
                      </a>{" "}
                      <span className="blog-readmore-outer"></span>{" "}
                    </div>
                    <div className="blog-content">
                      <h2 className="blog-name">
                        <a href="#" className="text-green">
                          Gift For The Little Bundle Of Joy
                        </a>
                      </h2>
                      <p>
                        Our regular newsletters are packed full of events at our
                        stores, fun facts...
                      </p>
                      <a
                        href="single-blog.html"
                        className="blog-readmore btn bg-green"
                      >
                        Read more
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="item blog-slider-item">
                  <div className="blog1 blog">
                    <div className="blog-image">
                      <span className="blog-date bg-purple">Jun 29, 2017</span>
                      <a href="#" className="blog-imagelink">
                        <img src="image/blog/blog1.png" alt="#" />
                      </a>{" "}
                      <span className="blog-readmore-outer"></span>{" "}
                    </div>
                    <div className="blog-content">
                      <h2 className="blog-name">
                        <a href="#" className="text-purple">
                          Gift For The Little Bundle Of Joy
                        </a>
                      </h2>
                      <p>
                        Our regular newsletters are packed full of events at our
                        stores, fun facts...
                      </p>
                      <a
                        href="single-blog.html"
                        className="blog-readmore btn bg-purple"
                      >
                        Read more
                      </a>{" "}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
