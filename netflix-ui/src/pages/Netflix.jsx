import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../assets/OTT.jpg";
import MovieLogo from "../assets/netflix-svgrepo-com.svg"
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

export default function Netflix() {

    const[isScrolled,setIsScrollled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
    const movies = useSelector((state)=>state.netflix.movies);

    console.log("Movie data: ",movies);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenres());
    },[]);

    useEffect(()=>{
        if(genresLoaded) 
        dispatch(fetchMovies({type:"all"}));
    },[genresLoaded]); // dependency array

    window.onscroll = ()=> {
        setIsScrollled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
    <Container>
        <Navbar isScrolled={isScrolled}/>
        <div className="hero">
        <img src={BackgroundImage} alt="background" className="background-image" />
        <div className="container">
            <div className="logo">
                <img src={MovieLogo} alt="MovieLogo" />
            </div>
            <div className="button flex" onClick={()=>navigate("/player")}>
                <button className="flex j-center a-center">
                    <FaPlay/> Play
                </button>
                <button className="flex j-center a-center">
                    <AiOutlineInfoCircle/> More Info...
                </button>
            </div>
        </div>
        </div>
        <Slider movies={movies}/>
    </Container>
    )
}

const Container = styled.div`
background-color:black;
.hero{
    position:relative;
    .background-image {
        filter:brightness(60%);
    }
    img{
        height:100vh;
        width:100vw;
    }
    .container{
        position:absolute;
        bottom:5rem;
        .logo{
            img{
                width:50%;
                height:50%;
                margin-left:5rem;
            }
        }
        .button{
            margin:5rem;
            gap:2rem;
            button{
                font-size:1.4rem;
                gap:1rem;
                border-radius:0.2rem;
                padding:0.5rem;
                padding-left:2rem;
                padding-right:2.4rem;
                border:none;
                cursor:pointer;
                transition:0.3s ease-in-out;
                &:hover{
                    opacity:0.8;
                }
                &:nth-of-type(2){
                    background-color:rgba(109,109,110,0.7);
                    color:white;
                    svg{
                        font-size:1.8rem;
                    }
                }
            }
        }
    }
}

`;