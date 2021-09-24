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
const Wrap = styled.div`
  background: ${props => props.theme.bg_body};
`
const Content = styled.div`
  padding-top: 3%;
`;
function App() {
  const [theme, setTheme] = useState(true);
  return (
   <Router>
     <ThemeProvider theme={theme ? Theme.light : Theme.dark}> 
     {/* ? : đgl toán tử 3 ngôi. 
     Nếu theme ban đầu đúng thì sẽ lấy cái sau dấu ? còn không thì lấy sau :, mà ban đầu set useState là đúng */ }
     <Switch>
        <Wrap className="App">
          <Navbar/>
            <Content/>
              <Route path="/" exact>
                <Home/>
              </Route>]
              <Route path="/hang-nu/:type">
                <Women/>
              </Route>
          <Toggle setTheme={setTheme} theme={theme}/>
          <Footer/>
        </Wrap>
     </Switch>
     </ThemeProvider>
   </Router>
  );
}

export default App;
