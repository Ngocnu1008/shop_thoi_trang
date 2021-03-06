import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Empty from "../components/cart/Empty";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BigWrap = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
    display: block;
    width: 95%;
    margin: auto;
    margin-top: 50px;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    margin-top: 20px;
  }
`;

const Wrap = styled.div`
  width: 60%;
  margin-left: 10%;
  margin-top: 5%;
  text-align: center;
  @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
    thead tr td {
      font-size: 8px !important;
      :nth-chid(2) {
        width: 300px;
      }
    }
    width: 90% !important;
    margin: auto;
    tbody td {
      font-size: 8px !important;
    }
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    width: 70%;
    margin-left: 3%;
    thead tr td {
      font-size: 12px !important;
    }
    tbody td {
      font-size: 12px !important;
    }
  }
`;
const Card = styled.tr`
  p {
    text-transform: uppercase;
  }
  img {
    width: 70%;
  }
`;
const Right = styled.div`
  width: 25%;
  margin-top: 5%;
  font-size: 14px;

  h3 {
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 30px;
    text-align: center;
  }
  .total {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    p {
      margin-top: 10px;
    }
  }
  .freeship {
    text-align: center;
    margin: 30px 0px 50px 0px;
  }
  .button {
    text-align: center;
    button {
      color: white;
      font-size: 12px;
      font-weight: 700;
      padding: 10px 10px;
      background: black;
      :first-child {
        color: black;
        background: white;
        margin-right: 20px;
      }
      cursor: pointer;
      :hover {
        color: red;
      }
    }
  }
  @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
    width: 35%;
    text-align: center;
    margin: auto;
    margin-top: 30px !important;
    font-size: 8px;
    h3 {
      font-weight: 700;
    }
    p {
    }
    .freeship {
      margin-bottom: 10px;
    }
    .button {
      button {
        padding: 3px 3px;
        font-size: 6px;
      }
    }
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    width: 20%;
    margin-top: 5.8%;
    font-size: 10px;
    .freeship {
      margin-bottom: 10px;
    }
    .button {
      button {
        padding: 3px 3px;
        font-size: 6px;
      }
    }
  }
`;

function Cart({ setCount }) {
  const [product, setProduct] = useState([]);
  const [sum_quantity, setSumQuantity] = useState(0);
  const [sum_price, setSumPrice] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
    let data = JSON.parse(localStorage.getItem("sanpham"));
    let sumQuantity = 0;
    let sumPrice = 0;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        sumQuantity += data[i].count; //l???y t??? localStorage 1 m???ng json g???m c?? ph???n t??? count, price n??n l??c n??y data[i].count
        let temp = parseInt(data[i].count) * parseInt(data[i].price);
        sumPrice += temp;
      }
      setSumQuantity(sumQuantity);
      setSumPrice(sumPrice);
    }
    setProduct(data);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "B???n c?? ch???c ch???n mu???n x??a kh??ng?",
      icon: "question",
      showCloseButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        var delete_product = product.filter((item) => item.id !== id);
        setProduct(delete_product);
        setCount(delete_product.length);
        localStorage.setItem("sanpham", JSON.stringify(delete_product));
      }
    });
  };
  return (
    <>
      {product && product.length > 0 ? (
        <BigWrap>
          <Wrap>
            <thead>
              <tr>
                <td
                  style={{
                    width: "300px",
                    height: "30px",
                    "font-size": "14px",
                    "font-weight": "500",
                  }}
                >
                  S???N PH???M
                </td>
                <td
                  style={{
                    width: "350px",
                    "font-size": "14px",
                    "font-weight": "500",
                  }}
                >
                  T??N S???N PH???M
                </td>
                <td
                  style={{
                    width: "50px",
                    "font-size": "14px",
                    "font-weight": "500",
                  }}
                >
                  SIZE
                </td>
                <td
                  style={{
                    width: "100px",
                    "font-size": "14px",
                    "font-weight": "500",
                  }}
                >
                  S??? L?????NG
                </td>
                <td
                  style={{
                    width: "100px",
                    "font-size": "14px",
                    "font-weight": "500",
                  }}
                >
                  TH??NH TI???N
                </td>
                <td
                  style={{
                    width: "100px",
                    "font-size": "14px",
                    "font-weight": "500",
                  }}
                >
                  XO??
                </td>
              </tr>
            </thead>
            <tbody>
              {product.map((value, index) => {
                return (
                  <Card key={index}>
                    <td
                      style={{
                        width: "300px",
                        height: "30px",
                        "font-size": "14px",
                      }}
                    >
                      <img
                        src={`/image/woman/top_collections/${value.image}`}
                        alt=""
                      />
                    </td>
                    <td style={{ width: "200px", "font-size": "14px" }}>
                      {value.name}
                    </td>
                    <td style={{ width: "200px", "font-size": "14px" }}>
                      <p>{value.size}</p>
                    </td>
                    <td style={{ width: "200px", "font-size": "14px" }}>
                      {value.count}
                    </td>
                    <td style={{ width: "200px", "font-size": "14px" }}>
                      {value.price}??
                    </td>
                    <td
                      style={{
                        width: "200px",
                        "font-size": "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(value.id)}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </td>
                  </Card>
                );
              })}
            </tbody>
          </Wrap>
          <Right>
            <h3>T???ng ti???n gi??? h??ng</h3>
            <div className="total">
              <p>T???ng s??? l?????ng:</p>
              <p>{sum_quantity} s???n ph???m</p>
            </div>
            <div className="total">
              <p>Th??nh ti???n:</p>
              <p>{sum_price}??</p>
            </div>
            <div className="total">
              <strong>
                <p>T???M T??NH:</p>
              </strong>
              <p>{sum_price}??</p>
            </div>
            <div className="freeship">
              <p>
                <i>
                  B???n s??? ???????c mi???n ph?? ship khi ????n h??ng c???a b???n c?? t???ng gi?? tr???
                  tr??n 2.000.000 ??
                </i>
              </p>
            </div>
            <div className="button">
              <Link to="/">
                <button>TI???P T???C MUA S???M</button>
              </Link>
              <button>THANH TO??N</button>
            </div>
          </Right>
        </BigWrap>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default Cart;
