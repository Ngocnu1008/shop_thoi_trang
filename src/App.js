import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Theme from './theme';
import { useEffect, useState } from 'react';
import Navbar from './components/general/Navbar';
import Footer from "./components/general/footer";
import "./App.css";
import Women from "./pages/Women";
import Toggle from "./components/general/Toggle";
import Details from "./pages/Details";
import Man from "./pages/Man"
import DetailsNam from "./pages/DetailsNam";
import Cart from "./pages/Cart";
import Login from "./pages/login";
import Register from "./pages/Register";
import Kid from "./pages/Kid";
import DetailsTre_em from "./pages/DetailsTre_em";
import SaleOff from "./pages/SaleOff";
import DetailsSaleOff from "./pages/DetailsSaleOff";
import Collections from "./pages/Collections";
import Notfound0 from "./pages/Notfound0";
import News from "./pages/News";
import DetailsNews from "./pages/DetailsNews";
import Info from "./pages/Info";
const Wrap = styled.div`
  background: ${props => props.theme.bg_body};
`
const Content = styled.div`
  padding-top: 3%;
  box-sizing: border-box;
`;

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);
  const [check_register, Setcheck_register]= useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  useEffect(()=>{
    let sanpham = JSON.parse(localStorage.getItem("sanpham"));
    if (sanpham){
      setCount(sanpham.length);
    }
  }, [count]);

  useEffect(()=>{
    let check = JSON.parse(localStorage.getItem("user"));
    if(check){
      Setcheck_register(true);
    }
  }, []);
  return (
   <Router>
     <ThemeProvider theme={theme ? Theme.light : Theme.dark}> 
        <Wrap className="App">
          <Toggle theme={theme} setTheme ={setTheme}/>
          <Navbar count={count} check_register={check_register}/>
            <Content/>
              <Switch>
                <Route path="/" exact>
                  <Home/>
                </Route>
                <Route path="/hang-nu/:type" exact>
                  <Women/>
                </Route>
                <Route path="/hang-nam/:type" exact>
                  <Man/>
                </Route>
                <Route path="/hang-tre-em/:type">
                  <Kid/>
                </Route>
                <Route path="/sale-off/:gender">
                  <SaleOff/>
                </Route>
                <Route path="/collections/:type">
                  <Collections/>
                </Route>
                <Route path="/news">
                  <News/>
                </Route>
                <Route path="/info">
                  <Info/>
                </Route>
                <Route path="/cart" exact>
                  <Cart setCount={setCount}/>
                </Route>
                <Route path = "/chi-tiet-hang-nu/:type/:id_sanpham" exact>
                  <Details setCount={setCount} count={count}/>
                </Route>
                <Route path="/chi-tiet-hang-nam/:type/:id_sanpham" exact>
                  <DetailsNam setCount={setCount} count={count}/>
                </Route>
                <Route path="/chi-tiet-hang-tre-em/:type/:id_sanpham" exact>
                  <DetailsTre_em setCount={setCount} count={count}/>
                </Route>
                <Route path="/chi-tiet-sale-off/:gender/:id_sanpham">
                  <DetailsSaleOff setCount={setCount} count = {count}/>
                </Route>
                <Route path="/chi-tiet-tin-tuc/:id_sanpham">
                  <DetailsNews/>
                </Route>
                <Route path="/login">
                  <Login Setcheck_register={Setcheck_register}/>
                </Route>
                <Route path="/register">
                  <Register/>
                </Route>
                <Route path="*">
                  <Notfound0/>
                </Route>  
              </Switch>
          <Footer/>
        </Wrap>
     </ThemeProvider>
   </Router>
  );
}

export default App;
