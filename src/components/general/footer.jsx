import React, { useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;   
    border: 1px solid black;
    margin: 20px 0px 70px 0px;
`;
const Wrap = styled.div`
    width: 40%;
    margin: auto;
    text-align: center;
    margin-top: 3%;
    input{
        width: 40   %;
        padding: 0.5rem;
        border-radius: 5px;
        margin: 20px 0px 10px 0px;
    }
    button {
        color: white;
        background: black;
        cursor: pointer;
        padding: 0.5rem 0.8rem;
        margin-top: 1%;
        margin-bottom: 7%;
        border-radius: 5px;
    }
    color: ${props => props.theme.color};
`;
const ImgDownload = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    img {
        width: 35%;
    }
`;
const Info = styled.div`
    ul {
        margin-bottom: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            width: 23%;
            img {
                width: 90%;
            }
            list-style: none;
            font-weight: bold;
            border-left: 1px solid #d5cccc;
            padding: 5px 5px;
            cursor: pointer;
            i {
                font-size: 20px;
                margin: 0 10px;
                color: #666;
                &:hover{
                    color: black;
                }
            }
        }
        
        li:first-child{
            border-left: none;
        }

    }
    p{
        font-weight: 500;
    }
`;
const License = styled.div`
    width: 100%;
    text-align: center;
    background: #f8f8f8;
    padding: 20px 0;
`;
const Footer = () => {
    const [text, setText] = useState("");
    const handleGetValue = (e) => {
        setText(e.target.value);
    }
    const [send, setSend] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== ""){
            setSend(true);
        }else {
            alert("Please fill in your email address!")
        }
    }
     return (
         <>
         {send && <Redirect to= "/"/>}
         <Container>
         </Container>
         <Wrap>
             <h2>Tải ứng dụng IVY moda</h2>
             <ImgDownload>
                <img src="https://pubcdn.ivymoda.com/images/appstore.jpg" alt=""/>
                <img src="https://pubcdn.ivymoda.com/images/googleplay.jpg" alt=""/>
             </ImgDownload>
             <h3>Nhận bản tin IVY moda</h3>
             <form action="">
                <input type="text" placeholder="Nhập email của bạn..." onChange={handleGetValue} value={text}/>
                <br/>
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
             </form>
             <Info>
                 <ul>
                     <li>
                         <img src="https://pubcdn.ivymoda.com/images/dathongbao.png" alt=""/>
                     </li>
                     <li>Liên hệ</li>
                     <li>Tuyển dụng</li>
                     <li>Giới thiệu</li>
                     <li>
                     <i className="fa fa-facebook" aria-hidden="true"></i>
                     <i className="fa fa-youtube" aria-hidden="true"></i>
                     </li>
                </ul>
                     <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                     <p>Địa chỉ đăng ký: Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam - 0243 205 2222</p>
                     <p>Đặt hàng online :<strong> 0246 662 3434</strong>.</p>
                 
             </Info>
         </Wrap>
         <License>
             <p>©Ivymoda All rights reserved</p>
         </License>
         </>
     )
 }
export default Footer;