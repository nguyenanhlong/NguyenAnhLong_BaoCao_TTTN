import { useState } from "react";
import contactServices from "../../../Services/ContactService";
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function contactStore(event){
        event.preventDefault();
        const contact={
            name:name,
            email:email,
            phone:phone,
            title:title,
            content:content,
            status:2,
        }
        try {
            await contactServices.create(contact).then(function (res) {
              alert(res.data.message);
            });
          } catch (error) {
            console.error(error.response.data);
          }
    }
    return (
    <form onSubmit={contactStore} method="post">
      <div className="container-fluid pt-5">
      <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: 600}}>
              <h6 className="text-primary text-uppercase">Liên Hệ</h6>
              <h1 className="display-5 text-uppercase mb-0">Xin vui lòng liên hệ với chúng tôi</h1>
          </div>
          <div className="row g-5">
              <div className="col-lg-7">
                    <div className="row g-3">
                        <div className="col-12 mb-3">
                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control bg-white border-0 px-4" placeholder="Nhập Họ & Tên" style={{height: 55}}/>
                        </div>
                        <div className="col-12 mb-3">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control bg-white border-0 px-4" placeholder="Nhập Email" style={{height: 55}}/>
                        </div>
                        <div className="col-12 mb-3">
                            <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={phone} className="form-control bg-white border-0 px-4" placeholder="Số điện thoại" style={{height: 55}}/>
                        </div>
                        <div className="col-12 mb-3">
                            <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control bg-white border-0 px-4" placeholder="Vấn đề liên hệ" style={{height: 55}}/>
                        </div>
                        <div className="col-12 mb-3">
                            <textarea onChange={(e) => setContent(e.target.value)} type="text" name="content" value={content} className="form-control bg-white border-0 px-4 py-3" rows="8" placeholder="Thông tin chi tiết"></textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <button className="btn btn-primary w-100 py-3" type="submit">Gửi tin nhắn đến quản trị</button>
                        </div>
                    </div>
              </div>
              <div className="col-lg-5">
                  <div className="bg-white mb-5 p-5">
                      <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Địa chỉ</h6>
                              <span>124/34 Phường Hiệp Bình Phước, Quận Thủ Đức, TP.HCM</span>
                          </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Email</h6>
                              <span>AloneNotGood@gmail.com</span>
                          </div>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                          <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                          <div className="text-start">
                              <h6 className="text-uppercase mb-1">Gọi Đến</h6>
                              <span>01236015354</span>
                          </div>
                      </div>
                      <div>
                          <iframe className="position-relative w-100"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.5407315495!2d106.36556344176303!3d10.754618131929936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1684741607301!5m2!1sen!2sbd"
                              frameborder="0" style={{height: 205, border:0}} allowfullscreen="" aria-hidden="false"
                              tabindex="0"></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</form>
    );
  }
  
  export default Contact;