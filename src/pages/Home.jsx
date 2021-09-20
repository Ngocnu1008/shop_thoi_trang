import React from "react";
import styled from "styled-components";
import Banner from "../components/home/Banner";
const Wrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    hr {
        width: 99%;
        height: 2px;
        background: ${props => props.theme.bg};
        margin: auto;
        margin-top: 1%;
    }
`;
function Home() {
    return (
        <Wrap>
            <Banner/>
            <hr/>
        </Wrap>
    )
}
export default Home;