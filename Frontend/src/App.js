
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
import Products from './components/Products/Products';
import Search from './components/search/Search';
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
    <Route exact path="/products">
     <Products/>
    </Route>
    <Route exact path="/search">
     <Search/>
    </Route>
    

  </Switch>
  <Footer/>
  </Router>
    
    </div>
  );
}

export default App;
