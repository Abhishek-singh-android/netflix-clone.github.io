import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {firebaseAuth} from "../utils/firebase-config";
export default function Login() {
  const navigate =  useNavigate();
  const [formValues,setFormValues] = useState({
    email:"",
    password:"",
  });

  const handleLognin = async()=>{
    try{
      const {email,password} = formValues;
      await signInWithEmailAndPassword(firebaseAuth,email,password);
    }catch(error){
      console.log("Error: ",error);
    }
  }

   onAuthStateChanged(firebaseAuth,(currentUser)=>{
     if(currentUser)
     navigate("/");
   })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header Login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere.Cancel anyTime.</h4>
            <h6>
              Ready to Watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
          <h3>Login</h3>
            <input type="email" placeholder="Email Address" name="email" 
            value={formValues.email} 
           onChange = {(e)=>
             setFormValues({
                 ...formValues,
                [e.target.name]:e.target.value,
             })
            }
            />
           
            <input type="password" placeholder="Password" name="password" 
            value={formValues.password}
            onChange={(e)=>setFormValues({
                 ...formValues,
                [e.target.name]:e.target.value,})
                }

                />

              <button onClick={handleLognin}>Login</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }

      .form {
        display: grid;
        ${'' /* grid-template-column:${({showPassword})=>showPassword ? "1fr 1fr":"2fr 1fr"} */}
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        width: 60%;
        background-color:black;
        margin-bottom:4rem;
        box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
        opacity:0.8;
        border-radius:1rem;
        margin-bottom:4rem;
        margin-top:1rem;

        h3{
          margin:4px;
          font-size:2rem;
        }

        input {
          color: black;
          border: none;
          padding: 1rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          ${'' /* border-radius: 0.2rem; */}
          font-weight: bolder;
          font-size: 1.5rem;
          margin-bottom:2rem;
        }       
      }
      button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.5rem;
        }
    }
  }
`;