import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Template = (props) => {
    return (
        <div>
            <Navbar />
                {props.children}
            <Footer />
        </div>
    );
};

export default Template;