import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
const Wrap = styled.div`
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
function Register(props) {
    const [value, setValue] = useState({
        name: "", 
        phone: "", 
        pw: "", 
        add: ""
    });
    const [errorPw, setErrorPw] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [showPw, setShowPw] = useState(true);

    const handleGetvalue = (e) => {
        setValue({
            ...value, 
            [e.target.name] : e.target.value,
        })
    };

    const handleShowPW = () => {
        setShowPw(!showPw);
    }
    useEffect(() => {
        let check = JSON.parse(localStorage.getItem("user"));
        if(check){
            return setRedirect(true);
        }
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        let check_pw = value.pw.includes(" ");
        if (check_pw) {
            return setErrorPw(true);
        }
        setErrorPw(false);

        const { name, phone, pw, add } = value;
        if(!name || !phone || !pw || !add) {
            return alert("Vui l??ng ??i???n ?????y ????? th??ng tin");
        }

        const info = { name, phone, pw, add }

        axios.post("http://localhost:5000/api/user/register", info)
            .then(({data}) => {
                if(data.success) {
                    return setRedirect(true);
                }
                alert("C?? l???i, th??? l???i");
            })
            .catch((err) => console.error(err))
            localStorage.setItem("user", JSON.stringify({phone: value.phone, pw: value.pw}));
            Swal.fire({
                title: "????ng k?? th??nh c??ng", 
                icon: "success", 
                confirmButtonText: "yes"
            }).then(() => {
                setRedirect(true);
            })
    };
    useEffect(() => {
        window.scroll(0,0);
    })
  
    return (
        <Wrap>
            {redirect && <Redirect to ="/login"/>}
           <h3>????NG K?? </h3>
           <h4>Kh??ch h??ng m???i c???a Ivymoda</h4>
           <form autoComplete='off'>
               <div name="label">
                    <label htmlFor='name'>T??n</label>
                </div>
               <div name="input">
                   <input type="text" name="name" placeholder='H??? v?? t??n' value={value.name} onChange={handleGetvalue}/>
                </div>
               <br/>
               <div name="label">
                    <label htmlFor='phone'>S??? ??i???n tho???i</label>
                </div>
               <div name="input">
                   <input type="text" name="phone" placeholder='S??? ??i???n tho???i' value={value.phone}  onChange={handleGetvalue}/>
                </div>
               <br/>
               <div name="label">
                    <label htmlFor='pw'>M???t kh???u</label>
                </div>
               <div name="input">
                   <input type={showPw ? "password" : "text"} name="pw" placeholder='M???t kh???u' value={value.pw}  onChange={handleGetvalue}/>
                   <i class="fa fa-eye" aria-hidden="true" onClick={handleShowPW}></i>
                </div>
                {errorPw && <p className='warning'>M???t kh???u kh??ng bao g???m kho???n tr???ng</p>}
               <br/>
               <div name="label">
                    <label htmlFor='add'>?????a ch???</label>
                </div>
               <div name="input">
                   <input type="text" name="add" placeholder='?????a ch???' value={value.add}  onChange={handleGetvalue}/>
                </div>
               <br/>
           </form>
           <button onClick={handleRegister}>????NG K?? </button>
        </Wrap>
    );
}

export default Register;