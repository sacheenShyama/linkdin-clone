//Imports

import React from "react";
import styled from "styled-components";
import { LeftSide } from "../LeftSide/LeftSide";
import PostComponent from "../Post/PostComponent";
import { RightSide } from "../RightSide/RightSide";


//Home component
function Home() {
  return (
    <div>
      <Layout>
        <LeftSide />
        <PostComponent />
        <RightSide />
      </Layout>
    </div>
  );
}

//Styled components
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside postcomponent rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* margin: 0px 0; */
  padding: 3% 12%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 5% 3%;
  }
`;

export default Home;
