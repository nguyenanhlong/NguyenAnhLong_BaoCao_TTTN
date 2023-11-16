import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('category/index');

}

function getById(id){
    return httpAxios.get(`category/show/${id}`);

}
async function getBySlug(slug) {
    return await httpAxios.get(`category/getBySlug/${slug}`);
  }
function create(category){
    return httpAxios.post("category/store", category);
}

function update(category, id){
    return httpAxios.post(`category/update/`+id, category);
}
function getCategoryByParentID(id){
    return httpAxios.get(`category/category_list/${id}`);
}

function remove(id){
    return httpAxios.delete(`category/destroy/${id}`);
}
const categoryservice = {
    getCategoryByParentID:getCategoryByParentID,
    getAll:getAll,
    getBySlug:getBySlug,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default categoryservice;