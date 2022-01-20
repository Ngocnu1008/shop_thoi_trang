import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Trendy, Flourish18, Dream } from '../../data/collections';
import Aos from "aos";
import "aos/dist/aos.css";
const Wrap = styled.div`
    width: 100%;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        margin-top: 10% !important;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px){
        margin-top: 5%;
        width: 100%;
    }
`;

const Photo1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    img{
        width: 48%; 
        :last-child{
            margin-left: 2%;
        }
    }
`;
const Photo2 = styled.div`
    width: 30%;
    margin: auto;
    img{
        width: 100%;
    }
`;
const Photo3 = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`;
const Photo4 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
        width: 32%;
    }
`;
const Photo5 = styled.div`
    width: 40%;
    margin-left: 60%;
    img{
        width: 100%;
    }
`;
const Photo6 = styled.div`
    width: 30%;
    margin-left: 50%;
    img{
        width: 100%;
    }
`;
const Photo7 = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`;
function Content({ type }) {
    const [data, setData] = useState([])
    useEffect(() =>{
        Aos.init({duration: 1500})
    }, []);
    useEffect(() => {
        switch (type) {
            case "Flourish18":
                setData(Flourish18);
                break;
            case "Dream":
                setData(Dream);
                break;
            default:
                setData(Trendy);
        }
    }, [type])
    console.log(data);
    return (
            <div >
                <>
                    <Wrap>
                        {data &&
                            data.map((value) => {
                                return (
                                    <>
                                        <Photo1 data-aos="fade-down">
                                            <img src={`/image/collections/${value.image1}`} alt=""/>
                                            <img src={`/image/collections/${value.image1a}`} alt="" />
                                        </Photo1>
                                        <Photo2 data-aos="fade-down">
                                            <img src={`/image/collections/${value.image2}`} alt=""/>
                                        </Photo2>
                                        <Photo3>
                                            <img src={`/image/collections/${value.image3}`} alt="" />
                                        </Photo3>
                                        <Photo4 data-aos="fade-down">
                                            <img src={`/image/collections/${value.image4}`} alt="" />
                                            <img src={`/image/collections/${value.image4a}`} alt="" />
                                            <img src={`/image/collections/${value.image4b}`} alt="" />
                                        </Photo4>
                                        <Photo5>
                                            <img src={`/image/collections/${value.image5}`} alt="" />
                                        </Photo5>
                                        <Photo6 data-aos="fade-down">
                                            <img src={`/image/collections/${value.image6}`} alt="" />
                                        </Photo6>
                                        <Photo7>
                                            <img src={`/image/collections/${value.image7}`} alt="" />
                                        </Photo7>
                                    </>
                                )
                            })
                        }
                    </Wrap>
                </>
            </div>
    );
}

export default Content;