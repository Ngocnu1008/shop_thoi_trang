import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Content from "../components/nam/Content";
import Sidebar from "../components/nam/Sidebar"
import Loading from '../components/Loading';

const Wrap = styled.div`
    display: flex;
`;
function Man(props) {
    const [type, setType] = useState("news");
    const [loading, setLoading] = useState(true);
    let params = useParams();
    useEffect(() =>{
        setType(params.type);
    },[params]);
    useEffect(() => {
        window.scroll(0,0);
        setTimeout(()=> {
            setLoading(false);
        }, 1000);
    })
    return (
        <>
        {loading ? 
        (<Loading/>) : 
        (
            <Wrap>
                <Sidebar/>
                <Content type={type}/>
            </Wrap>
        )}
        </>
    );
}

export default Man;