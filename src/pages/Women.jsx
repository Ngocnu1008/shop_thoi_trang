import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SideBar from '../components/nu/SideBar';
import Content from '../components/nu/Content';
import {useParams} from "react-router-dom";
const Wrap = styled.div`
    display: flex;    
`;
function Women() {
    const [type, setType] = useState("news");
    let params = useParams();

    useEffect (() => {
        setType(params.type);
    },[params]);

    return (
       <Wrap>
           <SideBar/>
           <Content type ={type}/>
       </Wrap>
    );
}

export default Women;
