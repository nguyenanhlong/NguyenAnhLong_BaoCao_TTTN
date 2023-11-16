import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('post/index');

}

function getById(id){
    return httpAxios.get(`post/show/${id}`);

}

function create(post){
    return httpAxios.post("post/store", post)
}

function update(post,id){
    return httpAxios.post(`post/update/${id}`,post);
}
function getByPosition(position){
    return httpAxios.get(`post_list/${position}`);
}
function remove(id) {
    return httpAxios.delete(`post/destroy/${id}`);
}
const postservice = {
    getByPosition:getByPosition,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default postservice;