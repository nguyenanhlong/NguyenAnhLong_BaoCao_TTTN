import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function LayoutAdmin() {
    return (
    <>
        <Header />
        <section className="maincontent">
            <div className="container-fluid my-3">
                <Outlet />
            </div>
        </section>
        <Footer />
    </>
    );
}

export default LayoutAdmin;