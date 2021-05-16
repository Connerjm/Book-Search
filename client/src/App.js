import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

export default function App()
{
    return (
        <BrowserRouter>
        <Header />
        <Jumbotron />
            <Switch>
                <Route exact path="/search" component={Search} />
                <Route exact path="/saved" component={Saved} />
                <Route component={<h1>404</h1>} />
            </Switch>
        <Footer />
        </BrowserRouter>
    );
}
