import React from "react";

const Setting = () => (
    <>
  <section className="section-pagetop bg-gray">
    <div className="container">
      <h2 className="title-page">My account</h2>
    </div>{" "}
    {/* container //  */}
  </section>
  {/* ========================= SECTION PAGETOP END// ========================= */}
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y">
    <div className="container">
      <div className="row">
      <aside className="col-md-3">
          <nav className="list-group">
            <a className="list-group-item active" href="/page-profile-main">
              {" "}
              Account overview
            </a>
            <a className="list-group-item" href="/page-profile-address">
              {" "}
              My Address{" "}
            </a>
            <a className="list-group-item" href="/page-profile-orders">
              {" "}
              My Orders{" "}
            </a>
            <a className="list-group-item" href="/page-profile-wishlist">
              {" "}
              My wishlist{" "}
            </a>
            <a className="list-group-item" href="/page-profile-seller">
              {" "}
              My Selling Items{" "}
            </a>
            <a className="list-group-item" href="/page-profile-setting">
              {" "}
              Settings{" "}
            </a>
            <a className="list-group-item" href="page-index-1">
              {" "}
              Log out{" "}
            </a>
          </nav>
        </aside>{" "}
        {/* col.// */}
        <main className="col-md-9">
          <div className="card">
            <div className="card-body">
              <form className="row">
                <div className="col-md-9">
                  <div className="form-row">
                    <div className="col form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Vosidiy"
                      />
                    </div>{" "}
                    {/* form-group end.// */}
                    <div className="col form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="vosidiy@gmail.com"
                      />
                    </div>{" "}
                    {/* form-group end.// */}
                  </div>{" "}
                  {/* form-row.// */}
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <select id="inputState" className="form-control">
                        <option> Choose...</option>
                        <option>Uzbekistan</option>
                        <option>Russia</option>
                        <option selected="">United States</option>
                        <option>India</option>
                        <option>Afganistan</option>
                      </select>
                    </div>{" "}
                    {/* form-group end.// */}
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input type="text" className="form-control" />
                    </div>{" "}
                    {/* form-group end.// */}
                  </div>{" "}
                  {/* form-row.// */}
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={123009}
                      />
                    </div>{" "}
                    {/* form-group end.// */}
                    <div className="form-group col-md-6">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={+123456789}
                      />
                    </div>{" "}
                    {/* form-group end.// */}
                  </div>{" "}
                  {/* form-row.// */}
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-light">Change password</button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>{" "}
                {/* col.// */}
                <div className="col-md">
                  <img
                    src={require("../../../assets/images/avatars/avatar1.jpg")}
                    className="img-md rounded-circle border"
                  />
                </div>{" "}
                {/* col.// */}
              </form>
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
        </main>{" "}
        {/* col.// */}
      </div>
    </div>{" "}
    {/* container .//  */}
  </section>
</>

);

export default Setting;