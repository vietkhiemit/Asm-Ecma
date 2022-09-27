import instance from "./instance";

export const getAll = () => {
    const url = "/checkouts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/checkouts/${id}`;
    return instance.get(url);
};
export const add = (contact) => {
    const url = `/checkouts`;
    return instance.post(url, contact);
};
export const remove = (id) => {
    const url = `/checkouts/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/checkouts/${post.id}`;
    return instance.put(url, post);
};