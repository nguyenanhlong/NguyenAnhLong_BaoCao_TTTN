

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


function LayoutSite(props) {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  );
}

export default LayoutSite;