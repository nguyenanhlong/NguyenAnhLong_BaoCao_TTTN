import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import topicservice from "../../../Services/TopicService";
function TopicShow() {

    const {id} =useParams("id"); //"id" trong routes
    const [topic,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await topicservice.getById(id).then(function(result){
                setTopic(result.data.data);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT CHỦ ĐỀ</strong></div>
                        <div className="col-md-6 d-flex justify-content-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/"+topic.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/topic" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{topic.id}</td>
                        </tr>
                        <tr>
                            <th>Tên chủ đề</th>
                            <td>{topic.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{topic.email}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{topic.slug}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{topic.created_at}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{topic.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Từ Khóa</th>
                            <td>{topic.metakey}</td>
                        </tr>

                        <tr>
                            <th>Parent_id</th>
                            <td>{topic.parent_id}</td>
                        </tr>

                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default TopicShow;