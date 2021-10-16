import React, { useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import Swal from "sweetalert2";

const Container = styled.div`
    width: 100%;   
    border: 1px solid black;
    margin: 20px 0px 70px 0px;
    @media screen and (max-width: 811px) {
        margin-bottom: 50px;
    }
`;
const Wrap = styled.div`
    width: 40%;
    margin: auto;
    text-align: center;
    margin-top: 3%;
    input{
        width: 100%;
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
    @media screen and (max-width: 811px){
        h2 {
            font-size: 20px;
        }
        width: 60%;
        margin-top: 5px;
    }
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
    @media screen and (max-width: 811px) {
        margin: 5% 0%;
        width: 100%;
        ul li{
            font-size: 10px;
            i{
                font-size: 10px;
            }
        }
        p {
            font-size: 9px;
        }
    }
`;
const License = styled.div`
    width: 100%;
    text-align: center;
    background: #f8f8f8;
    padding: 20px 0;
    @media screen and (max-width: 811px) {
        font-size: 10px;
    }
`;
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Footer = () => {
    const [text, setText] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const handleGetValue = (e) => {
        setText(e.target.value);
    }
    const [send, setSend] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === ""){
            return alert("Vui lòng nhập địa chỉ email của bạn!");
        }else {
            let check_email = validateEmail(text);
            if (!check_email) {
                return setErrorEmail(true);
            }
            setErrorEmail(false);
            setText("");
            Swal.fire({
                title: "Đăng nhập email", 
                text: "Thành công",
                icon: "success", 
                confirmButtonText: "yes",
            }).then(() =>{
                setSend(true);
            })
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
                {errorEmail && <p className="warning">Địa chỉ email không đúng</p>}
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