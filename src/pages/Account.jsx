import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

const Wrap = styled.div`
    h2{
        font-size: 16px;
    }
    h3{
        font-size: 14px;
        margin-top: 10px;
    }
    margin: 20px 10px;
`;
function Account(props) {
    const [info, setInfo] = useState({});
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        let check = JSON.parse(localStorage.getItem("user"));
        if(!check){
            return setRedirect(true);
        }
        setInfo(check);
        //đặt biến khởi tạo info bằng 1 chuỗi vì bên login sau khi đăng nhập thành công thì bên dưới localstorage sẽ lưu dạng chuỗi, 
        //khi use bấm vào trang account thì đầu tiên dùng useEffect ktra xem họ đã đăng nhập trước đó chưa bằng biến check (biến check được gán
        //với bằng với lệnh local store khi đăng nhập xong/ nếu không đăng nhập trước đó thì ng dùng cố tình bấm vào trang account trên path thì
        //họ bị chuyển về trang chủ, còn đã có đnhập thì info được set thành chuỗi gồm email và pw, sau đó render bên dưới return.)
        //lúc này useEffect với check không chỉ cho trong th ng dùng cố tình vào account mà để sau khi login thành công và có lưu localstorage
        //rồi thì setInfor lại chuỗi được lưu và render ra luôn.
    },[])
    return (
        <Wrap>
            {redirect && <Redirect to="/"/>}
            <div>
                <h2>Email của bạn là: </h2>
                <p>{info.email}</p>
                <h3>Mật khẩu: </h3>
                <p>{info.pw}</p>
            </div>
        </Wrap>
    );
}

export default Account;