import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Logo from "./Logo"

const App = ()=>{
    return(  <>
        <section className="container-fluid">
            <div className="row">
                <Logo/>
                <Header/>
            </div>
            <div className="row">
                <SideBar/>
                <div className="col-lg-11 p-0" style={{border:"1px solid"}} >
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </section>
    </>
   )
}

export default App;