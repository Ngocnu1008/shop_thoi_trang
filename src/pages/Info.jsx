import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from "sweetalert2";
import { Redirect } from 'react-router';
const Wrap = styled.div`
    padding: 50px 20px;
    width: 80%;
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
        margin-top: 30px;
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
        e.preventDefault();//chặn sự kiện chuyển tiếp khi chưa điền thông tin
        let check_email = validateEmail(value.email);
        if(!check_email){
           return setErrorEmail(true);
        }
        if (value.name === "" || value.phone === "" || value.email === "" || value.topic === "" || value.content === ""){
            return alert ("Vui lòng điền đầy đủ thông tin trong các mục trước khi gửi!");
        }
        Swal.fire({
            title: "Bạn đã gửi phản hồi",
            text: "Thành công", 
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
                <h3>1. IVYMODA.COM LÀ WEBSITE CỦA THƯƠNG HIỆU THỜI TRANG IVY MODA</h3>
                <p> - IVYmoda.com là kênh mua sắm và hỗ trợ đắc lực công tác chăm sóc Khách Hàng của Thương hiệu thời trang IVY moda;</p>
                <p> - Kể từ khi ra mắt vào cuối năm 201, IVYmoda.com đã - đang và sẽ không ngừng cải tiến và nâng cấp để ngày một hoàn thiện tính năng, thân thiện nhất với Khách Hàng.</p>
                <h3>2. CHÍNH SÁCH THẺ THÀNH VIÊN ONLINE</h3>
                <h4>Điều kiện</h4>
                <ul>
                    <li>Khách hàng có tổng giá trị hóa đơn từ: 12.000.000 VNĐ trong 01 năm kể từ ngày bắt đầu sử dụng thẻ</li>
                    <li>Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 12.000.000 VNĐ trong 01 năm tiếp theo sử dụng thẻ</li>
                    <li>Điều kiện nâng hạng thẻ VÀNG/GOLD MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 23.000.00 VNĐ kể từ ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP</li>
                </ul>
                <h4>Quyền lợi</h4>
                <ul>
                    <li>Giảm 10% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ</li>
                    <li>Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP vào các dịp lễ đặc biệt.</li>
                    <li>Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…</li>
                    <li>Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…</li>
                </ul>
                <h3>3. CHÍNH SÁCH BẢO MẬT VÀ CHIA SẺ THÔNG TIN</h3>
                <h4>Mục đích áp dụng</h4>
                <p>Chính sách bảo mật và chia sẻ thông tin này (“Chính Sách”) nhằm đảm bảo an toàn thông tin liên quan đến các tổ chức, cá nhân tham gia truy cập và/hoặc giao dịch trên website: ivymoda.com và ứng dụng di động IVY moda (sau đây gọi tắt là “Website và Ứng dụng”) thuộc quyền sở hữu của Công ty Cổ phần Dư Kim (“IVY moda”)</p>
                <h4>Quy định cụ thể</h4>
                <ul>
                    <li>Khi Khách Hàng thực hiện giao dịch và/hoặc đăng ký mở tài khoản tại Website và Ứng dụng, tùy từng thời điểm, Khách Hàng phải cung cấp một số thông tin cần thiết cho việc thực hiện giao dịch và/hoặc đăng ký tài khoản (“Thông Tin Khách Hàng”).</li>
                    <li>Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và IVY moda, đều được lưu giữ và bảo mật bởi hệ thống của IVY moda, riêng thông tin thẻ thanh toán của Khách Hàng sẽ do các đối tác Cổng thanh toán của IVY moda bảo mật theo tiêu chuẩn quốc tế.</li>
                    <li>Khách Hàng có trách nhiệm bảo vệ thông tin tài khoản của mình và không cung cấp bất kỳ thông tin nào liên quan đến tài khoản và mật khẩu truy cập trên Website và Ứng dụng của IVY moda trên các website khác ngoại trừ khi đăng nhập vào địa chỉ chính thức của IVY moda tại ivymoda.com và Ứng dụng di dộng IVY moda;</li>
                    <li>IVY moda cung cấp các tập tin cookie hoặc các công nghệ tương tự, nhằm thu thập các thông tin như: lịch sử truy cập, các lựa chọn của Khách Hàng khi truy cập và sử dụng tính năng của Website và Ứng dụng... nhằm tăng trải nghiệm bảo mật và giúp IVY moda hiểu rõ nhu cầu, sở thích của Khách Hàng để có thể cung cấp dịch vụ tốt hơn.</li>
                </ul>
            </div>
            <div className="customer_service">
                <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                <div className="contact">
                    <p className="main_p"><i class="fa fa-phone" aria-hidden="true"></i>
                    LIÊN HỆ 
                    </p>
                    <div className="normal_p">
                        <p><strong>Địa chỉ: </strong> Tầng 14, Toà nhà Hapulico Complex 24T - 85 Vũ Trọng Phụng - Quận Thanh Xuân, HN</p>
                        <p><strong>Email: </strong> saleadmin@ivy.com.vn </p>
                        <p><strong>Mua hàng online : </strong> 024 6662 3434</p>
                        <p><strong>CSKH :</strong> cskh@ivy.com.vn</p>
                        <p><i>Thứ Hai đến Thứ Bảy, từ 8:00 đến 17:30</i></p>
                    </div>
                </div>
                <div className="confirmation">
                    <div className="content">
                        <p className="main_p"><i class="fa fa-envelope" aria-hidden="true"></i>
                        EMAIL
                        </p>
                        <div className="form">
                        <form action="#" autoComplete="off">
                                <label htmlFor="name" >Họ và tên:</label>
                                <br/>
                                <input type="text" name="name" placeholder="Họ và tên..." value={value.name} onChange={handleChangeValue} />
                                <br/>
                                <label htmlFor="phone">Điện thoại:</label>
                                <br/>
                                <input type="number" name="phone" placeholder="Điện thoại..." value={value.phone} onChange={handleChangeValue}/>
                                <br/>
                                <label htmlFor="email">Email:</label>
                                <br/>
                                <input type="text" name="email" placeholder="Email..." value={value.email} onChange={handleChangeValue}/>
                                <br/>
                                {errorEmail && <p className="warning">Vui lòng điền đúng địa chỉ email</p>}
                                <label htmlFor="topic">Chủ đề:</label>
                                <br/>
                                <input type="text" name="topic" placeholder="Chủ đề..." value={value.topic} onChange={handleChangeValue}/>
                                <br/>
                                <label htmlFor="content">Nội dung:</label>
                                <br/>
                                <input type="text" name="content" value={value.content} onChange={handleChangeValue} className="comment"/>
                                <br/>
                                <button onClick={handleSubmit}>GỬI</button>
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