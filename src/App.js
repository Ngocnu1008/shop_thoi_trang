import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Theme from './theme';
import { useState } from 'react';
import Navbar from './components/general/Navbar';
import Footer from "./components/general/footer";
import "./App.css";
import Women from "./pages/Women";
import Toggle from "./components/general/Toggle";
import Details from "./pages/Details";
const Wrap = styled.div`
  background: ${props => props.theme.bg_body};
`
const Content = styled.div`
  padding-top: 3%;
  box-sizing: border-box;
`;
function App() {
  const [theme, setTheme] = useState(true);
  return (
   <Router>
     <ThemeProvider theme={theme ? Theme.light : Theme.dark}> 
     <Switch>
        <Wrap className="App">
          <Navbar/>
            <Content/>
              <Route path="/" exact>
                <Home/>
              </Route>]
              <Route path="/hang-nu/:type" exact>
                <Women/>
              </Route>
              <Route path = "/chi-tiet-hang-nu/:type/:id_sanpham" exact>
                <Details/>
              </Route>
          <Footer/>
        </Wrap>
     </Switch>
     </ThemeProvider>
   </Router>
  );
}

export default App;
