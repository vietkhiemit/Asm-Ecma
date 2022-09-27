import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
};
export const search = (keyword) => {
    const url = `/products?name_like=${keyword}`;
    return instance.get(url);
};
export const listProductOfCate = (id) => {
    const url = `/products?categoryId=${id}`;
    return instance.get(url);
};
export const Search = (keyword) => {
    const url = `/products?name_like=${keyword}`;
    return instance.get(url);
};
export const paginate = (page) => {
    const url = `/products?_page=${page}&_limit=9`;
    return instance.get(url);
};
export const sortProduct = (event) => {
    const url = `products?_sort=price&_order=${event}`;
    return instance.get(url);
};
export const sortIdProduct = (event) => {
    const url = `products?_sort=id&_order=${event}`;
    return instance.get(url);
};
export const rangeProduct = (min, max) => {
    const url = `products?price_gte=${min}&price_lte=${max}`;
    return instance.get(url);
};