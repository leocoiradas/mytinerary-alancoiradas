import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
function Layout(){
    return (
        <>
            <div className="flex p-5 justify-center">
                <Header />
            </div>
            <Main />
            <Footer />
        </>
    )
}
export default Layout