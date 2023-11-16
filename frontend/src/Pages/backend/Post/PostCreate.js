import { useState } from "react";
import { Link } from "react-router-dom";
import postservice from "../../../Services/PostListService";

function PostCreate() {
    const [topic_id, setTopicId] = useState('');
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);

    async function postStore(event){
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("topic_id",topic_id);
        post.append("title",title);
        post.append("detail",detail);
        post.append("type",type);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("status", status);
        post.append("image", image.files[0]);
        await postservice.create(post)
        .then(function(res){
            alert(res.data.message)
        })
    }

    return (
        <form onSubmit={postStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM CHI TIẾT BÀI VIẾT
                            </strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit"className="btn btn-sm btn-success me-2 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tiêu đề</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Chi tiết</label>
                                <input onChange={(e) => setDetail(e.target.value)} type="text" name="detail" value={detail} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Kiểu bài viết</label>
                                <input onChange={(e) => setType(e.target.value)} type="text" name="type" value={type} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                            <label htmlFor="parent_id">ID BÀI VIẾT</label>
                                    <input onChange={(e) => setTopicId(e.target.value)} value={topic_id} name="category_id" className="form-control"></input>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default PostCreate;

