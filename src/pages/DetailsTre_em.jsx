import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import {
  shirt,
  dream,
  phu_kien,
  skirt,
  trousers,
  news3,
  boy_phu_kien,
  boy_shirt,
  boy_trousers,
} from "../data/do_tre_em";
import Info from "../components/detailsTre_em/Info";
import Protect from "../components/detailsTre_em/Protect";
import SizeTableGeneral from "../components/detailsTre_em/SizeTableGerenal";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding-top: 50px;
  width: 70%;
  display: flex;
  margin: auto;
  @media screen and (min-device-width: 375px) and (max-device-width: 811px) {
    padding-top: 1px;
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
    .nav_title {
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
    margin-top: 70px !important;
    img {
      width: 100%;
    }
    h2 {
      font-size: 18px;
      margin-top: 7%;
    }
    h3 {
      font-size: 17px;
      margin-bottom: -40px;
    }
    sup {
      font-size: 17px;
    }
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
    margin-top: 20px;
  }
  text-align: center;
  h3 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    margin-top: 2px;
    :first-child {
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 811px) {
    width: 100%;
    margin: auto;,
    margin-top: 30px;
    h3 {
      font-size: 16px;
    }
  }
`;
const Title = styled.p`
  width: 80%;
  margin-top: 30px !important;
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
function DetailsTre_em({ setCount, count }) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relate, setRelate] = useState([]);
  const [display, setDisplay] = useState(0);
  let params = useParams();
  const { type, id_sanpham } = params;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scroll(0, 0);
    switch (type) {
      case "shirt":
        var details = shirt.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(shirt.filter((value) => value.id !== parseInt(id_sanpham)));
        break;
      case "dream":
        var details = dream.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(dream.filter((value) => value.id !== parseInt(id_sanpham)));
        break;
      case "phu_kien":
        var details = phu_kien.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(
          phu_kien.filter((value) => value.id !== parseInt(id_sanpham))
        );
        break;
      case "skirt":
        var details = skirt.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(skirt.filter((value) => value.id !== parseInt(id_sanpham)));
        break;
      case "trousers":
        var details = trousers.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(
          trousers.filter((value) => value.id !== parseInt(id_sanpham))
        );
        break;
      case "boy_phu_kien":
        var details = boy_phu_kien.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(
          boy_phu_kien.filter((value) => value.id !== parseInt(id_sanpham))
        );
        break;
      case "boy_shirt":
        var details = boy_shirt.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(
          boy_shirt.filter((value) => value.id !== parseInt(id_sanpham))
        );
        break;
      case "boy_trousers":
        var details = boy_trousers.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(
          boy_trousers.filter((value) => value.id !== parseInt(id_sanpham))
        );
        break;
      default:
        var details = news3.filter(
          (value) => value.id === parseInt(id_sanpham)
        );
        setdata(details);
        setRelate(news3.filter((value) => value.id !== parseInt(id_sanpham)));
    }
  }, [params]);
  const handleChangeOptions = (state) => {
    if (state === 2) {
      setDisplay(true);
    } else {
      setDisplay(state);
    }
  };
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
                      <img
                        src={`/image/woman/top_collections/${value.image}`}
                      />
                      <h2>{value.name}</h2>
                      <h3>{value.price}??</h3>
                    </Card>
                  );
                })}
            </Left>
            <Right>
              <div className="nav_title">
                <button
                  onClick={() => handleChangeOptions(0)}
                  className={display === 0 ? "active1" : ""}
                >
                  Chi ti???t
                </button>
                <button
                  onClick={() => handleChangeOptions(1)}
                  className={display === 1 ? "active1" : ""}
                >
                  B???o qu???n
                </button>
                <button
                  onClick={() => handleChangeOptions(2)}
                  className={display === 2 ? "active1" : ""}
                >
                  Tham kh???o size
                </button>
              </div>
              <div className="nav_content">
                {display === 0 ? (
                  <Info data={data} setCountCart={setCount} countCart={count} />
                ) : display === 1 ? (
                  <Protect />
                ) : (
                  <SizeTableGeneral setDisplay={setDisplay} />
                )}
              </div>
            </Right>
          </Wrap>
          <Title>S???n ph???m t????ng t???</Title>
          <Relate>
            {relate &&
              relate.map((value, index) => {
                if (0 < index && index < 5) {
                  return (
                    <Card1 key={index}>
                      <Link to={`/chi-tiet-hang-tre-em/${type}/${value.id}`}>
                        <img
                          src={`/image/woman/top_collections/${value.image}`}
                        />
                      </Link>
                      <Link to={`/chi-tiet-hang-tre-em/${type}/${value.id}`}>
                        <h3
                          style={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                          }}
                        >
                          {value.name}
                        </h3>
                      </Link>
                      <h3>{value.price}??</h3>
                    </Card1>
                  );
                }
              })}
          </Relate>
        </>
      )}
    </>
  );
}

export default DetailsTre_em;
