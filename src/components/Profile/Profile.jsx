import React from "react";
import Header from "../Navbar/Header";
import styled from "styled-components";

const Container=styled.div`
background:rgb(242,242,238);
margin:0;
padding:0;
`

function UserProfile(){
    return( 
        <> 
        
    <Container>
    <Header/>
  <h1>welcome to my profile</h1>
  
    
    
    </Container>
    </>
    )
}
export default UserProfile;