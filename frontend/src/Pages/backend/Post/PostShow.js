import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import postservice from "../../../Services/PostListService";
import { urlImage } from "../../../Config";


function PostShow() {

    const {id} = useParams("id"); //"id" trong routes
    const [post,setPost]=useState([]);
    useEffect(function(){
        (async function(){
            await postservice.getById(id).then(function(result){//// show controller 
                setPost(result.data.data);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong></div>
                        <div className="col-md-6 d-flex justify-content-end " >
                            <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/post/update/"+post.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2 mr-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2 mr-2">Lưu</button>
                            <Link to="/admin/post" className="btn btn-sm btn-info me-2 mr-2">
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
                            <td>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>Tiêu đề</td>
                            <td>{post.title}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{post.slug}  </td>
                        </tr>
                        <tr>
                            <td>Chi tiết</td>
                            <td>{post.detail}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'post/'+post.image} alt={post.title} /></td>
                        </tr>
                        <tr>
                            <td>Kiểu bài viết</td>
                            <td>{post.type}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{post.metakey}  </td></tr><tr><td>Metadesc</td>
                            <td>{post.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{post.status}  </td>
                        </tr>
                    </tbody>
                 </table>
             </div>

        </div>
     );
}

export default PostShow;