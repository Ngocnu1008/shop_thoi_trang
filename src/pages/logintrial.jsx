import React, { useState } from 'react';

function Logintrial(props) {
    const [toggle, setToggle] = useState(false);
    const handleShow = () => {
        setToggle(!toggle);
    }
    const [value, setValue] = useState({
        email:"",
        pw: "",
    })
    const handleChangeValue = (e) => {
        setValue({...value, 
            [e.target.name] : e.target.value});
    }
    console.log(value);
    return (
        <div>
            <form action="#">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="your email address" value={value.email} onChange={handleChangeValue}/>
                <label htmlFor="pw">Password</label>
                <input type={toggle ? "text" : "password"} name="pw" placeholder="your password" value={value.pw} onChange={handleChangeValue}/>
                <i className="fa fa-eye" aria-hidden="true" onClick={handleShow}></i>
            </form>
        </div>
    );
}

export default Logintrial;