import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import {v4 as uuid} from "uuid";
import { Redirect } from 'react-router';

const Wrap= styled.div`
    width: 40%;
    margin: auto;
    margin-top: 5%;
    text-align: center;
    h3{
        text-transform: uppercase;
        margin-bottom: 30px;
    }
    form{
        margin-top: 20px;
        input{
            width: 50%;
            padding: 8px 5px;
            margin: 5px 0px;
            outline: none;
        }
        i{
            margin-left: 5px;
        }
    }
    button{
        padding: 8px 30px;
        background: black;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
        &:hover{
            color: orange;
        }
    }
    p{
        font-size: 14px;
    }
   
`;

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// regax.test(value_check) => true/false;
function Login({setCheckLogin}) {
    const [status, setStatus] = useState(false);
    const [value, setValue]= useState({
        email: "",
        pw: "",
    })
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPw, setErrorPw] = useState(false);
    const [redirect, setRedirect] = useState(false);
    useEffect(()=>{
        let check = localStorage.getItem("user");//lúc này không cần parse để về json vì không xử lý dữ liệu mà chir ktra ở dưới đã có dữ liệu chưa thôi
        if (check){
            setRedirect(true);
        }
    }, []);
    const handleShow = () =>{
        // setStatus(!status); cách viết sau khi quen
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
        let check_email = validateEmail(value.email);
        if(!check_email){
            return setErrorEmail(true);
        }
        setErrorEmail(false);//trình duyệt sẽ dừng sau return (dòng 44), lúc này setErrorEmail lại false để khi ng dùng đáp ứng 
        //việc nhập đúng email thì set không hiện dòng chữ đỏ nữa. Tương tự dòng 52 nhưng trong th này thì không nhất thiết vì lúc này 
        //khi điền đúng thông tin thì thực hiện lệnh tiếp theo.
        let check_pw = value.pw.includes(" ");
        if(check_pw){
            return setErrorPw(true);
        }
        setErrorPw(false)
    localStorage.setItem("user", JSON.stringify({email: value.email, pw: uuid(value.pw)}));//khi sử dụng lệnh local thì dữ liệu sẽ được lưu bên dưới.
    //lúc này khi user hoàn tất đăng nhập thì sẽ lưu lại thông tin bên dưới local nên chuyển thành dạng chuỗi (dưới local không lưu dưới dạng object),
    //với thông tin gồm email và pw như trên.
     Swal.fire({
         title: "Login successfully", 
         icon: "success", 
         confirmButtonText: "yes",
     }).then(()=>{
        // setTimeout(()=>{
            setRedirect(true);
            setCheckLogin(true);//ng dùng đã login thành công thì đã có thông tin lưu ở local (truyền từ app.js) nên 
            //set lại Checklogin là true để nó chuyển thành trang account ngay sau login luôn (lúc này bên dưới góc trái màn hình đường link chuyển
            //về trang account(vì setchecklogin lại là true, true bên nav đã gắn cho nó là trang account) chứ không còn là trang login (theo path) nữa, nhưng 
            //th này không thấy thông tin hiện ra email và pw như đã set bên trang account vì lúc này nó đã redirect về trang chủ.)
        // }, 300);
     })
    }; 
    return (
        <Wrap>
            {redirect && <Redirect to="/"/>}
            <h3>Đăng nhập</h3>
            <p><i>Hãy đăng nhập để tích lũy điểm và nhận được nhiều ưu đãi hơn!</i></p>
            <form action="#" autoComplete="off">
                <label htmlFor="email">Email của bạn: </label>
                <input type="text" name="email" placeholder="Email của bạn" 
                value={value.email} onChange={handleGetvalue}/>
                {errorEmail && <p className="warning"><i>Email không đúng</i></p>}
                <br/>
                <label htmlFor="pw">Mật khẩu: </label>
                <input type={status ? "text" : "password"} name="pw" placeholder="Mật khẩu của bạn"
                value={value.pw} onChange={handleGetvalue}/>
                <i className="fa fa-eye" aria-hidden="true" onClick={handleShow}></i>
            </form>
                {errorPw && <p className="warning"><i>Mật khẩu không bao gồm khoản trắng</i></p>}
                <br/>
                <button onClick={handleLogin}>
                    Đăng nhập
                </button>
        </Wrap>
    );
}

export default Login;