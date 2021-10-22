
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div className="App">
    
    <Router>
    <Header/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/product/:id">
     <ProductDetail/>
    </Route>
    

  </Switch>
  <Footer/>
  </Router>
    
    </div>
  );
}

export default App;
