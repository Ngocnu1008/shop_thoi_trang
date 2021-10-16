import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SideBar from '../components/nu/SideBar';
import Content from '../components/nu/Content';
import {useParams} from "react-router-dom";
import Loading from '../components/Loading';
import { Redirect } from 'react-router';
const Wrap = styled.div`
    display: flex; 
    @media screen and (max-width: 811px){
        max-width: 95%;
        margin: auto; 
    }   
`;
const standard = ["news", "shirt", "croptop" ,"somi", "vest", "short", "trousers", "jeans", "dam", "dam_thun", "dam_mexi"];
function Women() {
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("news");
    const [redirect, setRedirect] = useState(false);
    let params = useParams();
    useEffect (() => {
        let check = standard.includes(params.type);
        if(!check){
           return setRedirect(true);
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setType(params.type);//params.type thì sau dấu chấm này phải trùng với tên mà đã định nghĩa ở đường dẫn path sau dấu hai chấm! 
        //lúc này params hiện ra là 1 object gồm phần tử type mà mình định nghĩa nên khi lấy phần tử đó thì là params.type!
        window.scroll(0,0);
    },[params]);
    return (
        <>
            {redirect && <Redirect to="/"/>}
            {loading ? 
            (<Loading/>) :
            (
            <Wrap>
                <SideBar/>
                <Content type ={type}/>
            </Wrap>
            )}
       </>
    );
}

export default Women;
