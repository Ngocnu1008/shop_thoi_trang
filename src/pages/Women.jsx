import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SideBar from '../components/nu/SideBar';
import Content from '../components/nu/Content';
import {useParams} from "react-router-dom";
import Loading from '../components/Loading';
const Wrap = styled.div`
    display: flex;    
`;
function Women() {
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("news");
    let params = useParams();
    useEffect (() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setType(params.type);//params.type thì sau dấu chấm này phải trùng với tên mà đã định nghĩa ở đường dẫn path sau dấu hai chấm! 
        //lúc này params hiện ra là 1 object gồm phần tử type mà mình định nghĩa nên khi lấy phần tử đó thì là params.type!
        window.scroll(0,0);
    },[params]);
    return (
        <>
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
