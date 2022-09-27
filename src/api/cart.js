import instance from "./instance";

export const getAll = () => {
    const url = "/carts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/carts/${id}`;
    return instance.get(url);
};
export const add = (cart) => {
    const url = `/carts`;
    return instance.post(url, cart);
};
export const remove = (id) => {
    const url = `/carts/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/carts/${post.id}`;
    return instance.put(url, post);
};