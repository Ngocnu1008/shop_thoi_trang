import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from "sweetalert2";
import { Redirect } from 'react-router';
const Wrap = styled.div`
    padding: 50px 20px;
    width: 90%;
    margin: auto;
    h3 {
        font-size: 16px;
        margin: 10px 0px;
    }
    .brand_policy{
        p{
            font-size: 14px;
        }
        margin: 20px 0px;
        ul li{
            margin-left: 30px;
            font-size: 14px;
        }
        h4{
            margin: 10px 0px;
        }
    }
    .customer_service{
        cursor: pointer;
        margin-top: 40px;
        h3{
            font-size: 20px;
        }
        .main_p{
            font-weight: 500;
            margin: 30px 0px 20px 0px;
        }
        .normal_p{
            margin-left: 20px;
        }
        p{
            font-size: 14px;
            line-height: 25px;
        }
        i{
            margin-right: 5px;
        }
        .confirmation{
            display: flex;
            justify-content: space-between;
            .map {
                width: 60%;
                margin-top: 100px;
            }
            .form{
                margin-left: 20px;
            }
            input{
                margin: 10px 0px;
                padding: 5px 5px;
                width: 250px;
                outline: none;
            }
            button{
                padding: 5px 30px;
                color: white;
                background-color: black;
                :hover{
                    color: orange;
                }
                border-radius: 2px;
            }
            
        }
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        width: 100%;
        margin-top: 40px;
        padding-top: 10px;
        .customer_service {
            .confirmation {
                width: 100%;
                display: block;
                .map { 
                    width: 95%;
                    margin: auto;
                    margin-top: 40px;
                }
            }
        }
        h3 {
            font-size: 14px;
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 90%;
        margin: auto;
        margin-top: 4px !important;
        .customer_service {
            .confirmation {
                .map {
                    width: 50%;
                }
            }
        }
    }

`;
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function Info(props) {
    const [errorEmail, setErrorEmail] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [value, setValue] = useState({
        name: "", 
        phone: "",
        email: "", 
        topic: "", 
        content: "", 
    })
    const handleChangeValue = (e) =>{
        setValue({
            ...value, 
            [e.target.name] : e.target.value,
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();//ch???n s??? ki???n chuy???n ti???p khi ch??a ??i???n th??ng tin
        let check_email = validateEmail(value.email);
        if(!check_email){
           return setErrorEmail(true);
        }
        if (value.name === "" || value.phone === "" || value.email === "" || value.topic === "" || value.content === ""){
            return alert ("Vui l??ng ??i???n ?????y ????? th??ng tin trong c??c m???c tr?????c khi g???i!");
        }
        Swal.fire({
            title: "B???n ???? g???i ph???n h???i",
            text: "Th??nh c??ng", 
            icon: "success", 
            confirmButtonText: "yes",
        }).then(() =>{
            setRedirect(true);
        })
    };
    useEffect(() => {
        window.scroll(0,0);
    })
    return (
        <Wrap>
            {redirect && <Redirect to="/"/>}
            <div className="brand_policy">
                <h3>1. IVYMODA.COM L?? WEBSITE C???A TH????NG HI???U TH???I TRANG IVY MODA</h3>
                <p> - IVYmoda.com l?? k??nh mua s???m v?? h??? tr??? ?????c l???c c??ng t??c ch??m s??c Kh??ch H??ng c???a Th????ng hi???u th???i trang IVY moda;</p>
                <p> - K??? t??? khi ra m???t v??o cu???i n??m 201, IVYmoda.com ???? - ??ang v?? s??? kh??ng ng???ng c???i ti???n v?? n??ng c???p ????? ng??y m???t ho??n thi???n t??nh n??ng, th??n thi???n nh???t v???i Kh??ch H??ng.</p>
                <h3>2. CH??NH S??CH TH??? TH??NH VI??N ONLINE</h3>
                <h4>??i???u ki???n</h4>
                <ul>
                    <li>Kh??ch h??ng c?? t???ng gi?? tr??? h??a ????n t???: 12.000.000 VN?? trong 01 n??m k??? t??? ng??y b???t ?????u s??? d???ng th???</li>
                    <li>??i???u ki???n gia h???n th???: Kh??ch h??ng c?? t???ng gi?? tr??? mua h??ng t??? 12.000.000 VN?? trong 01 n??m ti???p theo s??? d???ng th???</li>
                    <li>??i???u ki???n n??ng h???ng th??? V??NG/GOLD MEMBERSHIP: Kh??ch h??ng c?? t???ng gi?? tr??? mua h??ng t??? 23.000.00 VN?? k??? t??? ng??y ?????t h???ng th??? B???C/SILVER MEMBERSHIP</li>
                </ul>
                <h4>Quy???n l???i</h4>
                <ul>
                    <li>Gi???m 10% khi mua h??ng t???i h??? th???ng IVY moda trong v??ng 01 n??m k??? t??? ng??y ?????t h???ng th???</li>
                    <li>Nh???n qu?? t???ng sinh nh???t c???a kh??ch h??ng, k??m theo nh???ng ch??nh s??ch ??u ????i d??nh ri??ng cho kh??ch h??ng VIP v??o c??c d???p l??? ?????c bi???t.</li>
                    <li>Kh??ch h??ng s??? ???????c nh???n th??m c??c ??u ????i h???p d???n t??? c??c ?????i t??c c???a IVY Moda trong c??c l??nh v???c: M??? Ph???m, N?????c hoa, Trang s???c, Beauty - Spa, Nh?? h??ng, T???p ch?????</li>
                    <li>Kh??ch h??ng s??? ???????c nh???n th??m c??c ??u ????i h???p d???n t??? c??c ?????i t??c c???a IVY Moda trong c??c l??nh v???c: M??? Ph???m, N?????c hoa, Trang s???c, Beauty - Spa, Nh?? h??ng, T???p ch?????</li>
                </ul>
                <h3>3. CH??NH S??CH B???O M???T V?? CHIA S??? TH??NG TIN</h3>
                <h4>M???c ????ch ??p d???ng</h4>
                <p>Ch??nh s??ch b???o m???t v?? chia s??? th??ng tin n??y (???Ch??nh S??ch???) nh???m ?????m b???o an to??n th??ng tin li??n quan ?????n c??c t??? ch???c, c?? nh??n tham gia truy c???p v??/ho???c giao d???ch tr??n website: ivymoda.com v?? ???ng d???ng di ?????ng IVY moda (sau ????y g???i t???t l?? ???Website v?? ???ng d???ng???) thu???c quy???n s??? h???u c???a C??ng ty C??? ph???n D?? Kim (???IVY moda???)</p>
                <h4>Quy ?????nh c??? th???</h4>
                <ul>
                    <li>Khi Kh??ch H??ng th???c hi???n giao d???ch v??/ho???c ????ng k?? m??? t??i kho???n t???i Website v?? ???ng d???ng, t??y t???ng th???i ??i???m, Kh??ch H??ng ph???i cung c???p m???t s??? th??ng tin c???n thi???t cho vi???c th???c hi???n giao d???ch v??/ho???c ????ng k?? t??i kho???n (???Th??ng Tin Kh??ch H??ng???).</li>
                    <li>Th??ng Tin Kh??ch H??ng, c??ng nh?? c??c th??ng tin trao ?????i gi???a Kh??ch H??ng v?? IVY moda, ?????u ???????c l??u gi??? v?? b???o m???t b???i h??? th???ng c???a IVY moda, ri??ng th??ng tin th??? thanh to??n c???a Kh??ch H??ng s??? do c??c ?????i t??c C???ng thanh to??n c???a IVY moda b???o m???t theo ti??u chu???n qu???c t???.</li>
                    <li>Kh??ch H??ng c?? tr??ch nhi???m b???o v??? th??ng tin t??i kho???n c???a m??nh v?? kh??ng cung c???p b???t k??? th??ng tin n??o li??n quan ?????n t??i kho???n v?? m???t kh???u truy c???p tr??n Website v?? ???ng d???ng c???a IVY moda tr??n c??c website kh??c ngo???i tr??? khi ????ng nh???p v??o ?????a ch??? ch??nh th???c c???a IVY moda t???i ivymoda.com v?? ???ng d???ng di d???ng IVY moda;</li>
                    <li>IVY moda cung c???p c??c t???p tin cookie ho???c c??c c??ng ngh??? t????ng t???, nh???m thu th???p c??c th??ng tin nh??: l???ch s??? truy c???p, c??c l???a ch???n c???a Kh??ch H??ng khi truy c???p v?? s??? d???ng t??nh n??ng c???a Website v?? ???ng d???ng... nh???m t??ng tr???i nghi???m b???o m???t v?? gi??p IVY moda hi???u r?? nhu c???u, s??? th??ch c???a Kh??ch H??ng ????? c?? th??? cung c???p d???ch v??? t???t h??n.</li>
                </ul>
            </div>
            <div className="customer_service">
                <h3>D???CH V??? KH??CH H??NG</h3>
                <div className="contact">
                    <p className="main_p"><i class="fa fa-phone" aria-hidden="true"></i>
                    LI??N H??? 
                    </p>
                    <div className="normal_p">
                        <p><strong>?????a ch???: </strong> T???ng 14, To?? nh?? Hapulico Complex 24T - 85 V?? Tr???ng Ph???ng - Qu???n Thanh Xu??n, HN</p>
                        <p><strong>Email: </strong> saleadmin@ivy.com.vn </p>
                        <p><strong>Mua h??ng online : </strong> 024 6662 3434</p>
                        <p><strong>CSKH :</strong> cskh@ivy.com.vn</p>
                        <p><i>Th??? Hai ?????n Th??? B???y, t??? 8:00 ?????n 17:30</i></p>
                    </div>
                </div>
                <div className="confirmation">
                    <div className="content">
                        <p className="main_p"><i class="fa fa-envelope" aria-hidden="true"></i>
                        EMAIL
                        </p>
                        <div className="form">
                        <form action="#" autoComplete="off">
                                <label htmlFor="name" >H??? v?? t??n:</label>
                                <br/>
                                <input type="text" name="name" placeholder="H??? v?? t??n..." value={value.name} onChange={handleChangeValue} />
                                <br/>
                                <label htmlFor="phone">??i???n tho???i:</label>
                                <br/>
                                <input type="number" name="phone" placeholder="??i???n tho???i..." value={value.phone} onChange={handleChangeValue}/>
                                <br/>
                                <label htmlFor="email">Email:</label>
                                <br/>
                                <input type="text" name="email" placeholder="Email..." value={value.email} onChange={handleChangeValue}/>
                                <br/>
                                {errorEmail && <p className="warning">Vui l??ng ??i???n ????ng ?????a ch??? email</p>}
                                <label htmlFor="topic">Ch??? ?????:</label>
                                <br/>
                                <input type="text" name="topic" placeholder="Ch??? ?????..." value={value.topic} onChange={handleChangeValue}/>
                                <br/>
                                <label htmlFor="content">N???i dung:</label>
                                <br/>
                                <input type="text" name="content" value={value.content} onChange={handleChangeValue} className="comment"/>
                                <br/>
                                <button onClick={handleSubmit}>G???I</button>
                            </form>
                        </div>
                    </div>
                    <div className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.776344884068!2d105.80375051476285!3d21.001600586013165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad7ff997a981%3A0x786e42250043fb56!2zMjRUMiBIYXB1bGljbyBWxakgVHLhu41uZyBQaOG7pW5n!5e0!3m2!1svi!2suk!4v1634460919608!5m2!1svi!2suk" 
                        style={{"width": "100%", "height": "90%",  "border": "0", "loading": "lazy"}}
                        title="map"/>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

export default Info;