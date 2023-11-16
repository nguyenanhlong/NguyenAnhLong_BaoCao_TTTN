import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import topicservice from "../../../Services/TopicService";
function TopicList() {
    const [status_delete, setStatus_delete] = useState([]);
    const[topics,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await topicservice.getAll().then(function(result)
            {
                setTopic(result.data.data)
            });
        })();
    },[status_delete])
    function topicDelete($id) {
        topicservice.remove($id)
            .then(function (res) {
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHỦ ĐỀ</strong></div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/topic/create">
                            <FaSearchPlus/>Thêm
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên Chủ Đề</th>
                        <th>Slug</th>
                        <th>Từ Khóa</th>
                        <th>Mô tả</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {topics.map(function(topic,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{topic.id}</td>
                            <td>
                                {topic.name}
                            </td>
                            <td>
                                {topic.slug}
                            </td>
                            <td>
                                {topic.metakey}
                            </td>
                            <td>
                                {topic.metadesc}
                            </td>

                            <td>
                               {topic.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/topic/show/"+topic.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/"+topic.id}>
                               <FaEdit/> </Link>
                               <button className="btn btn-sm btn-danger" onClick={() => topicDelete(topic.id)}><FaTrash /></button>     
                            </td>
                        </tr>);
                    }
                    )}
                 </tbody>
                 </table>
             </div>
        </div>
     );
}

export default TopicList;