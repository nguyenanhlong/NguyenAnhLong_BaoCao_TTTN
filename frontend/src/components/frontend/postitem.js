import { urlImage } from "../../Config";

function PostItem(props) {
    return ( 
    
        <div className="col-md-3 col-sm-6">
        <article className="card card-post">
            <img className="card-img-top"src={urlImage +'post/'+ props.post.image} />
            <div className="card-body">
                <h6 className="title">{props.post.title}</h6>
                <p className="small text-uppercase text-muted ">{props.post.detail}</p>
            </div>
        </article>
        {/* card.// */}
    </div>
     );
}

export default PostItem;