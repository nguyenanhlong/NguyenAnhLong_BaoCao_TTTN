import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('menu/index');

}

function getById(id){
    return httpAxios.get(`menu/show/${id}`);

}

function create(menu){
    return httpAxios.post("menu/store", menu)
}

function update(menu, id){
    return httpAxios.post(`menu/update/`+id,menu);

}
function remove(id){
    return httpAxios.delete(`menu/destroy/${id}`);
}
const menuServices = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default menuServices;