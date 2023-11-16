import { Link } from "react-router-dom";
function Header() {
    return (
        <section className="header ">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="/admin">
                    Quản lý
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="/">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                                <Link className="nav-link text-white" to="/admin/user">User</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                EventMenu
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/admin/slider">
                                    Slider
                                </a>
                                <a className="dropdown-item" href="/admin/topic">
                                    Topic
                                </a>
                                <a className="dropdown-item" href="/admin/post">
                                    Post (Bài viết)
                                </a>
                                <a className="dropdown-item" href="/admin/contact">
                                    Liên hệ
                                </a>
                                <a className="dropdown-item" href="/admin/menu">
                                    Menu
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Sản phẩm
                            </a>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="/admin/productSale">
                                    Sản phẩm Sale
                                </a>
                                <a className="dropdown-item" href="/admin/product">
                                    Sản phẩm
                                </a>
                                <a className="dropdown-item" href="/admin/category">
                                    Danh mục
                                </a>
                                <a className="dropdown-item" href="/admin/brand">
                                    Thương hiệu
                                </a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>

        </section>
    );
}
export default Header;