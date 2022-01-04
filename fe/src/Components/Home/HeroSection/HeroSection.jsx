import React, { useState, useEffect} from 'react';
import "./HeroSection.css";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import * as auth from '../../../Store/Action';
// import { useSelector } from 'react-redux'
// require('dotenv').config()
// import mobile from "../../Assets/Images/Home/Artwork-mob.png";

function HeroSection() {
//   const baseUrl = "https://test-057.herokuapp.com/api" || process.env.baseUrl
//   console.log('dddd :', baseUrl)

//   useEffect(async () => {
//   await axios.get(`${baseUrl}/auth/demo`)
//   .then((res) => {
//       console.log('dddd :', res.data.message)
//   })
//   .catch((err) => {
//     console.log('err :', err)
// })
// }, [])

  // const dispatch = useDispatch()
  // dispatch(auth.LoginUser({
  //   username: 'alpha',
  //   email: 'gama',
  //   id: result.user.id,
  //   token: result.user.token,
  // }))
  
  // const {username, email} = useSelector(state => state.user)
  // console.log("USER=>>>>", email)
  
  // localStorage.setItem('USER', 'RTEKDSMDWSA');
  // const a = localStorage.getItem('USER');
  // localStorage.removeItem('USER'); //null
  // console.log(a)
  return (
    <section className="bg_image ">
      <div className="container-fluid">

      </div>
    </section>
  );
}

export default HeroSection;