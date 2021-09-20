import React from "react";
import styled from "styled-components";


const Wrap = styled.div`
    width: 40%;
    margin: auto;
    text-align: center;
    margin-top: 3%;
    input{
        width: 40%;
        padding: 0.5rem;
    }
    button {
        color: black;
        cursor: pointer;
        padding: 0.5rem 1rem;
        margin-top: 1%;
    }
`;
const ImgDownload = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        width: 45%;
    }
`;
const Info = styled.div`
    ul {
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
            border-left: 1px solid black;
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
    padding: 10px 0;
`;
const Footer = () => {
     return (
         <>
         <Wrap>
             <h2>Tải ứng dụng IVY moda</h2>
             <ImgDownload>
                <img src="https://pubcdn.ivymoda.com/images/appstore.jpg" alt=""/>
                <img src="https://pubcdn.ivymoda.com/images/googleplay.jpg" alt=""/>
             </ImgDownload>
             <h3>Nhận bản tin IVY moda</h3>
             <form action="">
                <input type="text" placeholder="Nhập email của bạn..."/>
                <br/>
                <button type="submit">SUBMIT</button>
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