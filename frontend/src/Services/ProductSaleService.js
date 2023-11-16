import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('productSale/index');
}

function getById(id){
    return httpAxios.get(`productSale/show/${id}`);

}

function create(product){
    return httpAxios.post("productSale/store", product);
}

function getBySale() {
    return httpAxios.get(`getBySale`);
}

function update(productSale, id){
    return httpAxios.post("productSale/update/"+id, productSale);
}

function remove(id){
    return httpAxios.delete(`productSale/destroy/${id}`);
}
const productsaleservice = {
    getBySale:getBySale,
    getById:getById,
    getAll:getAll,
    create:create,
    update:update,
    remove:remove
}
export default productsaleservice;