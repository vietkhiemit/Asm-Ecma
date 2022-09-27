// import data from "../data";
// import axios from "axios";
import { getAll } from "../api/post";

const ProductsRate = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 role="heading" class="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800 ">Top Rate</h1>
            <p role="contentinfo" class="text-base leading-normal text-center text-gray-600 mt-4 mb-10">But I must explain to you</p>
                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                     ${data.map((post) => /* html */`
                    <div class="group relative">
                    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <a href="">
                            <img src="${post.image}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                        </a>
                    </div>
                    <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                        <a href="/news/${post.id}">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <h2 class="text-2xl text-black-500">${post.name}</h2>
                            
                        </a>
                        </h3>
                        <h2 class="mt-1 text-1xl text-gray-500">${post.price_old}$</h2>
                    </div>
                    </div>
                </div>
                    `).join("")}
                </div>
        `;
    },
};
export default ProductsRate;