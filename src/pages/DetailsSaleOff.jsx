import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { male, female, children } from "../data/saleoff";
import Info from "../components/DetailsSaleOff/Info";
import TableSizeGeneral from "../components/DetailsSaleOff/TableSizeGeneral";
import Protection from "../components/DetailsSaleOff/Protection";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
const Wrap = styled.div`
  padding-top: 50px;
  width: 70%;
  display: flex;
  margin: auto;
  @media screen and (max-width: 811px) {
    padding-top: 50px;
    display: block;
    width: 100%;
    margin: auto;
  }
`;
const Left = styled.div`
  width: 50%;
  text-align: center;
  @media screen and (max-width: 811px) {
    width: 80%;
    margin: auto;
  }
    
`;
const Right = styled.div`
  width: 50%;
  .nav_title {
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    width: 56%;
    button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 5px 10px;
      font-size: 16px;
    }
  }
    @media screen and (max-width: 811px) {
        width: 90%;
        margin-top: 15% !important;
        margin: auto;
        .nav_title{
            width: 100%;
            button {
                font-size: 14px;
            }
        }
    }
`;
const Card = styled.div`
  width: 100%;
  img {
    width: 50%;
  }
  h2 {
    text-transform: uppercase;
  }
  @media screen and (max-width: 811px) {
    width: 100%;
    margin: auto;
    img {
      width: 100%;
    }
    h2 {
      font-size: 18px;
      margin: 15% 0% 2% 0%;
    }
    h3 {
      font-size: 17px;
    }
    sup {
      font-size: 17px;
    }
  }
 
`;
const Title = styled.p`
  width: 80%;
  margin-top: 70px !important;
  margin: auto;
  text-transform: uppercase;
  font-weight: bold;
  @media screen and (max-width: 811px) {
    width: 80%;
  }
  @media screen and (max-width: 1023px) {
    width: 90%;
  }
`;
const Relate = styled.div`
  padding-top: 20px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
const Card1 = styled.div`
  width: 19%;
  img {
    width: 100%;
  }
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.8;
    margin-top: 2px;
  }
  h3 {
    font-size: 14px;
    margin-top: 2px;
    font-weight: 400;
  }
  @media screen and (max-width: 811px) {
    width: 100%;
    margin: auto;
    margin-top: 30px;
    h2 {
      margin-top: 20px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

function DetailsSaleOff({ count, setCount }) {
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(0);
  const [data, setData] = useState([]);
  const [relate, setRelate] = useState([]);
  let params = useParams();
  const { gender, id_sanpham } = params;
  const handleChangeOptions = (state) => {
    setDisplay(state);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scroll(0, 0);
    switch (gender) {
      case "nam":
        var details = male.filter((value) => value.id === parseInt(id_sanpham));
        setData(details);
        setRelate(male.filter((value) => value.id !== parseInt(id_sanpham)));
        break;
      case "tre-em":
        var details = children.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setData(details);
        setRelate(children.filter((value) => value.id !== parseInt(id_sanpham)));
        break;
      default:
        var details = female.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setData(details);
        setRelate(female.filter((value) => value.id !== parseInt(id_sanpham)));
    }
  }, [params]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        <Wrap>
          <Left>
            {data &&
              data.map((value) => {
                return (
                  <Card key={value}>
                    <img src={`/image/woman/top_collections/${value.image}`} />
                    <h2>{value.name}</h2>
                    <h3>
                      {value.price}
                      <sup>đ</sup>
                    </h3>
                  </Card>
                );
              })}
          </Left>
          <Right>
            <div className="nav_title">
              <button
                onClick={() => {
                  handleChangeOptions(0);
                }}
                className={display === 0 ? "active1" : ""}
              >
                Chi tiết
              </button>
              <button
                onClick={() => {
                  handleChangeOptions(1);
                }}
                className={display === 1 ? "active1" : ""}
              >
                Bảo quản
              </button>
              <button
                onClick={() => {
                  handleChangeOptions(2);
                }}
              >
                Tham khảo size
              </button>
            </div>
            <div className="nav_content">
              {display === 0 ? (
                <Info setCountCart={setCount} countCart={count} data={data} />
              ) : display === 1 ? (
                <Protection />
              ) : (
                <TableSizeGeneral setDisplay={setDisplay} />
              )}
            </div>
          </Right>
        </Wrap>
        <Title>Sản phẩm tương tự</Title>
        <Relate>
            {relate &&
              relate.map((value, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <Card1 key={index}>
                      <Link to={`/chi-tiet-sale-off/${gender}/${value.id}`}>
                        <img
                          src={`/image/woman/top_collections/${value.image}`}
                        />
                      </Link>
                      <Link to={`/chi-tiet-sale-off/${gender}/${value.id}`}>
                        <h2>{value.name}</h2>
                      </Link>
                      <h3>
                        {value.price}
                        <sup>đ</sup>
                      </h3>
                    </Card1>
                  );
                }
              })}
          </Relate>
          )
        </>
        
      )}
    </>
  );
}

export default DetailsSaleOff;
