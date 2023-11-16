import { Link,useParams,useNavigate } from "react-router-dom";
import postservice from "../../../Services/PostListService";
import { useEffect,useState } from "react";

function PostUpdate() {
    //
    const {id} = useParams("id");
    const [topic_id, setTopicId] = useState('');
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);
    useEffect(function(){
        (async function(){
            await postservice.getById(id).then(function(result)
            {
                const tmp=result.data.data  ;
                setTitle(tmp.title)
                setDetail(tmp.detail)
                setType(tmp.type)
                setTopicId(tmp.topic_id)
                setMetakey(tmp.metakey)
                setMetadesc(tmp.metadesc)
                setStatus(tmp.status)
       
            });
        })();
    },[]);
    //
    const navigate=useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
        await postservice.getAll().then(function (result) {
            setPosts(result.data.data);
        });
        })();
    }, []);
    

    async function postEdit(event) 
    {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("title", title);
        post.append("detail", detail);
        post.append("type", type);
        post.append("topic_id", topic_id);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("status", status);
        if (image.files.length===0)
        {
            post.append("image","");
        }
        else
        {
            post.append("image", image.files[0]);
        }
        await postservice.update(post,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/post',{replace:true});
        });
    }
    
    return (
        <form onSubmit={postEdit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">SỬA BÀI VIẾT</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button type="submit" className="btn btn-sm btn-success me-3 mr-2">
                Lưu
              </button>
              <Link to="/admin/post" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3"><label htmlFor="name">Tiêu đề</label>
                <input
                  type="text"
                  name="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3"><label htmlFor="name">Chi tiết</label>
                <input
                  type="text"
                  name="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3"><label htmlFor="name">Kiểu bài viết</label>
                <input
                  type="text"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Mô tả</label>
                <textarea
                  name="metadesc"
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
            <div className="md-3">
                                <label htmlFor="parent_id">ID BÀI VIẾT</label>
                                    <input onChange={(e) => setTopicId(e.target.value)} value={topic_id} name="topic_id" className="form-control"></input>
                               
                            </div>
              <div className="mb-3">
                <label htmlFor="image">Hình đại diện</label>
                <input type="file" id="image" className="form"></input>
              </div>

              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}className="form-control"
                  >
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
  
  export default PostUpdate;