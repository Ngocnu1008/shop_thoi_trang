import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Content from "../components/collections/Content";
import Sidebar from "../components/collections/Sidebar"

const Wrap = styled.div`
`;
function Collections(props) {
    const [type, setType] = useState("Trendy");
    let params = useParams();
    useEffect(() =>{
        window.scroll(0,0);
        setType(params.type);
    },[params]);
    return (
        <Wrap>
             <Sidebar/>
            <Content type={type}/>
        </Wrap>
    );
}

export default Collections;