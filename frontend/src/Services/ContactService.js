import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('contact/index');

}

function getById(id){
    return httpAxios.get(`contact/show/${id}`);

}

function create(contact){
    return httpAxios.post("contact/store", contact)
}

function update(id){


}
function remove(id){
    return httpAxios.delete(`contact/destroy/${id}`);
}
const contactServices = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default contactServices;