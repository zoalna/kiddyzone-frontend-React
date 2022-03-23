import { BookOnline } from "@mui/icons-material";
import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBetween } from 'use-between';

const useGlobal = () => {
  const [cart, setcart] = useState([])
  const [userData, setuserData] = useState(null);
  const [cartCounter, setcartCounter] = useState(null);
  const [closeSide, setcloseSide] = useState(false);
  const changeuserData = useCallback((user) => setuserData(user), []);
  const changecartcounter = useCallback((count) => setcartCounter(count), []);
  const changecloseSide = useCallback((bool) => setcloseSide(BookOnline), []);
  const changecart = useCallback((data) => setcart(data), []);
  return {
    userData,
    setuserData,
    changeuserData,
    cartCounter,
    setcartCounter,
    changecartcounter,
    closeSide,
    setcloseSide,
    changecloseSide,cart,setcart,changecart
  };
};

export const useShared = () => useBetween(useGlobal);