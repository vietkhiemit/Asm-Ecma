import instance from "./instance";

export const getAll = () => {
    const url = "/contacts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/contacts/${id}`;
    return instance.get(url);
};
export const add = (contact) => {
    const url = `/contacts`;
    return instance.post(url, contact);
};
export const remove = (id) => {
    const url = `/contacts/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/contacts/${post.id}`;
    return instance.put(url, post);
};