import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from "../components/kid/SideBar";
import Content from '../components/kid/Content';
import { useParams } from 'react-router';
import Loading from "../components/Loading";

const Wrap = styled.div`
    display: flex;
`;
function Kid(props) {
    const [type, setType] = useState("new");
    const [loading, setLoading] = useState(true);
    let params = useParams();
    useEffect(() => {
        setType(params.type);
        window.scroll(0,0);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    },[params]);
    return (
        <>
        {loading ? (<Loading/>) :
        (
            <Wrap>
                <SideBar/>
                <Content type={type}/> 
            </Wrap>
        )}
        </>
    );
}

export default Kid;