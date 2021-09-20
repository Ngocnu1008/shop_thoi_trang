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
`
function App() {
  const [theme, setTheme] = useState(true);
  console.log(Theme);
  return (
   <Router>
     <ThemeProvider theme={Theme ? Theme.light : Theme.dark}>
     <Switch>
        <Wrap className="App">
          <Navbar/>

          <Route path="/" exact>
              <Home/>
          </Route>]
          <Route path="/hang-nu">
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
