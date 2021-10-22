
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Loader from './components/Loader/Loader';
function App() {
  return (
    <div className="App">
    
    <Router>
    <Header/>
    <Switch>
    <Route path="/">
    <Loader/>
    </Route>
    <Route exact path="/loader">
     
    </Route>

  </Switch>
  <Footer/>
  </Router>
    
    </div>
  );
}

export default App;
