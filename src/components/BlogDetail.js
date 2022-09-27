import { get } from "../api/blog";
import Footer from "./Footer";
import Nav from "./Nav";
import Partners from "./Partners";

const BlogDetail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
            ${Nav.render()}
        <div class="max-w-6xl mx-auto mb-10">
        <div class="md:flex items-center justify-between w-full bg-while-1000 ">
        <div class="xl:w-1/3 md:w-1/2 w-full">
            <h1 role="heading" class="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800 ml-5">Think<span class="font-normal italic"> out loud </span></h1>
            <p role="contentinfo" class="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12 ml-5"> ${data.title}</p>
            <div class="mt-10">
                <button class="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                    ${data.title} 
                   <img class="ml-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content-4-svg1.svg" alt="arrow">
                </button>
            </div> 
        </div>
        <div class="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
            <p role="contentinfo" class="focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10">"${data.desc}”</p>
            <div class="w-full">
                <img src="${data.image}" alt="Purple flowers on a book" class="w-3/4" />
                <div class="flex items-center mt-8">
                    <p role="contentinfo" class="text-xl focus:outline-none font-semibold leading-5 text-gray-700">Time:</p>
                    <p role="contentinfo" class="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-700">${data.time}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    ${Partners.render()}
    ${Footer.render()}

        `;
    },
};
export default BlogDetail;