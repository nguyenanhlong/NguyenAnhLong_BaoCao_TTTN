import {Link} from "react-router-dom";
import {FaRegEye,FaTrash} from 'react-icons/fa';
import contactservice from "../../../Services/ContactService";
import { useEffect, useState } from "react";


function ContactList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [contacts, setcontact] = useState([]);
    useEffect(function () {
      (async function () {
        await contactservice.getAll().then(function (result) {
          setcontact(result.data.data);
        });
      })();
    }, [status_delete]);
    function contactDelete($id) {
        contactservice.remove($id)
            .then(function (res) {
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
                </div>
            </div>
            <div className="card-body text-center">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Ten</th>
                            <th>Email</th>
                            <th>So Dien Thoai</th>
                            <th>title</th>
                            <th>Content</th>
                            <th>ID</th>
                            <th>Ngay tao</th>
                            <th>Chuc nang</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(function(contact,index){
                            return(
                                <tr key={index}>
                                    <td>
                                    </td>
                                <td>
                                    {contact.name}
                                </td>
                                <td>
                                    {contact.email}
                                </td>
                                <td>
                                    {contact.phone}
                                </td>
                                <td>
                                    {contact.title}
                                </td>
                                <td>
                                    {contact.content}
                                </td>
                                <td>
                                    {contact.id}
                                </td>
                                <td>
                                    {contact.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/contact/show/"+contact.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => contactDelete(contact.id)}><FaTrash /></button>
                                </td>
                                <td>
                                    {contact.id}
                                </td>
                            </tr>
                            );
                        })}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ContactList;