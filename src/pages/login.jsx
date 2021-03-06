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
            return alert("Vui l??ng ??i???n ?????y ????? th??ng tin")
        }
        const info = { phone, pw };
        axios.post("http://localhost:5000/api/user/login", info)
        .then(({data}) => {
            Swal.fire({
                title: "????ng nh???p th??nh c??ng", 
                icon: "success", 
                confirmButtonText: "c??",
            }).then(()=>{
                   setRedirect(true);
            })
            localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((err) => {
            console.error(err);
            return Swal.fire({
                title: "S?? ??i???n tho???i ho???c m???t kh???u kh??ng ????ng, vui l??ng th??? l???i", 
                icon: "error", 
                confirmButtonText: "c??",
            })}
        );
    
    }; 
    useEffect(() => {
        window.scroll(0,0);
    })
    return (
        <Wrap>
            {redirect && <Redirect to="/"/>}
            <h3>????NG NH???P</h3>
            <p>Vui l??ng ????ng nh???p ????? nh???n ???????c nhi???u ??u ????i h??n t??? Ivymoda!</p>
            <form action="#" autoComplete="off">
                <div>
                    <label htmlFor="phone">S??? ??i???n tho???i: </label>
                </div>
                <div>
                    <input type="text" name="phone" placeholder="S??? ??i???n tho???i" 
                    value={value.phone} onChange={handleGetvalue}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="pw">M???t kh???u: </label>
                </div>
                <div>
                    <input type={status ? "text" : "password"} name="pw" placeholder="M???t kh???u"
                    value={value.pw} onChange={handleGetvalue}/>
                    <i className="fa fa-eye" aria-hidden="true" onClick={handleShow}></i>
                    {errorPw && <p className="warning"><i>M???t kh???u kh??ng bao g???m kho???n tr???ng</i></p>}
                <br/>
                </div>
            </form>
                <button onClick={handleLogin}>
                    ????NG NH???P
                </button>
        </Wrap>
    );
}

export default Login;