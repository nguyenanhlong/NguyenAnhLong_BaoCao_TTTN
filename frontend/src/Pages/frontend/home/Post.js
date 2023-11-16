import { useEffect, useState } from "react";
import PostItem from "../../../components/frontend/postitem";
import postservice from "../../../Services/PostListService";

function Post() {
    const [posts,setPost]=useState([]);
    useEffect(function(){
        (async function(){
            await postservice.getAll().then(function(result)
            {
                setPost(result.data.data);
            });
        })();
    },[]);
    return ( 
        <section className="padding-bottom">
        <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Bài viết mới nhất</h4>
        </header>
        <div className="row">
                {posts.map(function(post,index){
                    return(
                         <PostItem post={post} key={index} />
                         );
                    })}
        </div>
        {/* row.// */}
    </section>


     );
}

export default Post;