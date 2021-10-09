import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from '../components/SaleOff/SideBar';
import { useParams } from 'react-router';
import Content from '../components/SaleOff/Content';
import Loading from "../components/Loading"
const Wrap = styled.div`
    display: flex;
`;
function SaleOff(props) {
    const [gender, setGender] = useState("nu");
    const [loading, setLoading] = useState(true);
    let params = useParams();
    console.log(params);
    useEffect(() =>{
        setGender(params.gender);
        setTimeout(() =>{
            setLoading(false);
        },1000);
    }, [params]);
    return (
        <>
        {loading ? (<Loading/>) : 
        (
        <Wrap>
            <SideBar/>
            <Content gender={gender}/>
        </Wrap>
        )};
        </>
    );
}

export default SaleOff;