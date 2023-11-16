import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('product/index');

}

function getById(id){
    return httpAxios.get(`product/show/${id}`);

}

function create(product){
    return httpAxios.post("product/store", product);
}

function getByCatSlug(slug, limit, page=1){
    return httpAxios.get(`productByCatSlug/${slug}/${limit}/${page}`);
}

function productBySearch(search) {
    return httpAxios.post(`product/productBySearch`, search)
}

function getProductBySlug(slug) {
    return httpAxios.get(`product_detail/${slug}`);
}

function getProductAll(limit,page=1) {
    return httpAxios.get(`product_all/${limit}/${page}`);
}
/*function getBySale() {
    return httpAxios.get(`getBySale`);
}
*/
function getByCatId(limit, category_id){
    return httpAxios.get(`product/product_list/${limit}/${category_id}`);
}

function update(product, id){
    return httpAxios.post("product/update/"+id, product);
}
async function getProductsByCatAndBrand(
    parent,
    child,
    brands,
    page = 1,
    limit
  ) {
    return await httpAxios.post(
      `/product/getProductsByCatAndBrand/${parent}/${child}/${page}/${limit}`,
      brands
    );
  }
function remove(id){
    return httpAxios.delete(`product/destroy/${id}`);
}
const productservice = {
    getByCatId:getByCatId,
    getProductAll:getProductAll,
    /*getBySale:getBySale,*/
    getProductsByCatAndBrand:getProductsByCatAndBrand,
    getProductBySlug:getProductBySlug,
    getByCatSlug:getByCatSlug,
    productBySearch:productBySearch,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;