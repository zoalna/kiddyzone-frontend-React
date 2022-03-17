import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import RatingStarsCard from "../Layout/RatingStarsCard";
import "../../App.css";

export default function ReviewCard(props) {

const [item,setitem] = React.useState(props.item);


  return (

  
         

            <div className="review">
            <div className="author"><img className="text-center" src="image/user-img.png"/><span className="name text-center">d****t</span><span className="date text-center">{item.created_at}</span></div>
            <div className="description">
           <RatingStarsCard  item={item.rating} />
            <p>{item.content}</p>    
            </div>
            
            </div>

         
         
         ) ;
      

   
  
}
