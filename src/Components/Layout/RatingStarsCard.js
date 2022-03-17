import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

export default function RatingStarsCard(props) {

  const [item, setitem] = React.useState(3);
  const [stars, setstars] = React.useState([]);

  useEffect(() => {
    update()
  }, [item])
  const update = () => {

    var starsdata = []
    for (let i = 0; i < item; i++) {
      starsdata.push(i)

    }
    setstars(starsdata)
  }



  return (

    <>



      {

        stars.map((item, i) => {

          return (
            <div className="rating">
              <span className="fa fa-stack">
                <i className="fa fa-star-o fa-stack-2x"></i>
                <i className="fa fa-star fa-stack-2x"></i>
              </span>
            </div>

          )
        })}


    </>

  );

}


