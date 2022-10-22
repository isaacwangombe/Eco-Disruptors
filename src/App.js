import logo from "./logo.svg";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Item from "./components/Item";
import UploadItem from "./components/UploadItem";
import CloudinaryUploadWdget from "./components/CloudinaryUploadWdget";
import Carousel from "./components/Carousel";
import AllProducts from "./components/Products/AllProducts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import SingleProduct from "./components/Products/SingleProduct";
import Cart from "./components/Cart/Cart";
import CatUpload from "./components/CatUpload";
import { useState } from "react";
import Map from "./components/Map";
import Checkout from "./components/Cart/Checkout";
import Profile from "./components/Profile";
import UploadWaste from "./components/UploadWaste";

function App(user, signOut) {
  const [cartInfo, setCartInfo] = useState();
  return (
    <Router>
      <div className="App ">
        <NavbarComponent cartInfo={cartInfo} />
        <Switch>
          <div className="content">
            <Route exact path="/">
              {/* <Cart /> */}
              <Landing />
              {/* <CatUpload /> */}
              {/* <Map /> */}
              {/* <Checkout /> */}
              {/* <Profile /> */}
            </Route>

            {/* <UploadItem /> */}
            {/* <Item /> */}
            {/* <Carousel /> */}
            <Route path="/indProduct/:id">
              <SingleProduct />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/products/:val/:cat/:loc">
              <AllProducts />
            </Route>

            <Route path="/upload">
              <UploadItem />
            </Route>
            <Route path="/uploadWaste">
              <UploadWaste />
            </Route>
          </div>
        </Switch>

        {/* <CloudinaryUploadWdget /> */}
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
