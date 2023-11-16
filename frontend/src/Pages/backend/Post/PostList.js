import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import postservice from "../../../Services/PostListService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../Config";

function PostList(){
    const [posts, setPost] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
      (async function () {
        await postservice.getAll().then(function (result) {
            setPost(result.data.data);
        });
      })();
    }, [status_delete]);
    function postDelete($id) {
        postservice.remove($id)
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
                        <strong className="text-primary">CHI TIẾT BÀI VIẾT</strong>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className="btn btn-sm btn-success" to="/admin/post/create">
                            <FaPlus/>Thêm
                        </Link>
                        </div>
                </div>
            </div>
            <div className="card-body text-center">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tiêu đề</th>
                            <th>Kiểu bài viết</th>
                            <th>Hình</th>
                            <th>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(function(post,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                
                                <td>
                                    {post.title}
                                </td>
                                <td>
                                    {post.type}
                                </td>
                                <td>
                                <img src={urlImage +'post/'+ post.image} width={50}/>
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/post/show/"+post.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/post/update/"+post.id}>
                                        <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => postDelete(post.id)}><FaTrash /></button>
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
export default PostList;


