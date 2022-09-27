import { getAll } from "../api/blog";
import Footer from "./Footer";
import Nav from "./Nav";

const Blog = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        ${Nav.render()}
        <h1 role="heading" class="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">Read Our Latest</h1>
        <p role="contentinfo" class="text-base leading-normal text-center text-gray-600 mt-4">Whether article spirits new her covered hastily sitting her. Money witty books nor son</p>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid gap-4 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            ${data.map((blog) => /* html */`
                <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <a href="/#/blogs-detail/${blog.id}"><img src="${blog.image}" class="object-cover w-full h-64" alt="" /></a>
                    <div class="p-5 border border-t-0">
                        <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a href="/#/blogs-detail/${blog.id}" class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" title="traveling">traveling</a>
                        <span class="text-gray-600">— ${blog.time}</span>
                        </p>
                        <a href="/#/blog-detail" aria-label="Category" title="Visit the East" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">${blog.title}</a>
                        <p class="mb-2 text-gray-700">
                        ${blog.desc}
                        </p>
                        <a href="/#/blogs-detail/${blog.id}" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                    </div>
                </div>
                `).join("")}
            </div>
            
            </div>
    ${Footer.render()}
        `;
    },
};
export default Blog;