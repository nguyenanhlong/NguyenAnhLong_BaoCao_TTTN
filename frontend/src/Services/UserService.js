import httpAxios from '../HttpAxios'

function getAll(roles){
    return httpAxios.get('user/index/'+roles);

}

function getById(id){
    return httpAxios.get(`user/show/${id}`);

}

function create(user){
    return httpAxios.post("user/store", user)
}


function login(user){
    return httpAxios.post("user/login", user)
}
function update(user,id){
    return httpAxios.post(`user/update/${id}`,user);
}
function getByPosition(position){
    return httpAxios.get(`user_list/${position}`);
}
function remove(id) {
    return httpAxios.delete(`user/destroy/${id}`);
}
const userservice = {
    getByPosition:getByPosition,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    login:login,
    remove:remove
}
export default userservice;