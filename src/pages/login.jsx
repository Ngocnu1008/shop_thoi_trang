import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router';
import axios from "axios";
const Wrap= styled.div`
    width: 35%;
    margin: auto;
    margin-top: 50px !important;
    h3 {
        text-align: center;
        margin-bottom: 30px;
    }
    form {
        margin-top: 20px;
        input {
            padding: 5px 5px;
            margin-top: 10px;
            width: 500px;
        }
    }
    button {
        margin-top: 20px;
        font-size: 15px;
        padding: 7px 10px;
        background: black;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        :hover {
            color: orange;
            transition: 1s;
        }
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        width: 80%;
        margin: auto;
        padding-top: 20px;
        form {
            margin-top: 20px;
            input {
                padding: 5px 5px;
                margin-top: 10px;
                width: 300px;
            }
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 60%;
        margin: auto;
        padding-top: 20px;
    }
`;
function Login({Setcheck_register}) {
    const [status, setStatus] = useState(false);
    const [errorPw, setErrorPw] = useState(false);
    const [value, setValue]= useState({
        phone: "",
        pw: "",
    })
    const [redirect, setRedirect] = useState(false);
    const handleShow = () =>{
        if (status){
            setStatus(false);
        }else{
            setStatus(true);
        }
    }
    const handleGetvalue = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        let check_pw = value.pw.includes(" ");
        if(check_pw){
            return setErrorPw(true); 
        }
        setErrorPw(false);
        const { phone, pw } = value;
        if(!phone || !pw) {
            return alert("Vui lòng điền đầy đủ thông tin")
        }
        const info = { phone, pw };
        axios.post("http://localhost:5000/api/user/login", info)
        .then(({data}) => {
            Swal.fire({
                title: "Đăng nhập thành công", 
                icon: "success", 
                confirmButtonText: "có",
            }).then(()=>{
                   setRedirect(true);
            })
            localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((err) => {
            console.error(err);
            return Swal.fire({
                title: "Sô điện thoại hoặc mật khẩu không đúng, vui lòng thử lại", 
                icon: "error", 
                confirmButtonText: "có",
            })}
        );
    
    }; 
    useEffect(() => {
        window.scroll(0,0);
    })
    return (
        <Wrap>
            {redirect && <Redirect to="/"/>}
            <h3>ĐĂNG NHẬP</h3>
            <p>Vui lòng đăng nhập để nhận được nhiều ưu đãi hơn từ Ivymoda!</p>
            <form action="#" autoComplete="off">
                <div>
                    <label htmlFor="phone">Số điện thoại: </label>
                </div>
                <div>
                    <input type="text" name="phone" placeholder="Số điện thoại" 
                    value={value.phone} onChange={handleGetvalue}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="pw">Mật khẩu: </label>
                </div>
                <div>
                    <input type={status ? "text" : "password"} name="pw" placeholder="Mật khẩu"
                    value={value.pw} onChange={handleGetvalue}/>
                    <i className="fa fa-eye" aria-hidden="true" onClick={handleShow}></i>
                    {errorPw && <p className="warning"><i>Mật khẩu không bao gồm khoản trắng</i></p>}
                <br/>
                </div>
            </form>
                <button onClick={handleLogin}>
                    ĐĂNG NHẬP
                </button>
        </Wrap>
    );
}

export default Login;