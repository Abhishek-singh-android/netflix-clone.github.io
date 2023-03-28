import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres, getUserLikedMovies } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Card from '../components/Card';

const UserLiked = () => {
  const[isScrolled,setIsScrollled] = useState(false);
const navigate = useNavigate();
// const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
const movies = useSelector((state)=>state.netflix.movies);


const dispatch = useDispatch();

const [email,setEmail] = useState();
onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) setEmail(currentUser.email);
  else navigate("/login");
});

useEffect(()=>{
    if(email){
      dispatch(getUserLikedMovies(email));
    }
},);



window.onscroll = ()=> {
    setIsScrollled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
};

onAuthStateChanged(firebaseAuth,(currentUser)=>{
    // if(currentUser) navigate("/");
});
  return (
    <Container>
      <Navbar isScrolled={isScrolled}/>
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {
            movies.map((movie,index)=>{
              return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>
            })
          }
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.content{
  margin: 2.3rem;
  margin-top: 8rem;
  gap:3rem;
  h1{
    margin-left: 3rem;
  }
  .grid{
    flex-wrap: wrap;
    gap:1rem;
  }
}
`;

export default UserLiked