import { getAll, search } from "../../api/product";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Partners from "../../components/Partners";
import { $ } from "../../utils/selector";

const ProductsCate = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="max-w-7xl mx-auto">
                ${Nav.render()}
                <section class="bg-white dark:bg-gray-900">
                    <div class="container px-6 py-8 mx-auto">
                        <div class="lg:flex lg:-mx-2">
                            <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hoodies</a>
                                <a href="#" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline">T-shirts & Vests</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shirts</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers & Suits</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</a>
                                <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</a>
                            </div>

                            <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                                <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <div class="py-4">
                                    <li class="ml-[38px] flex relative">
                                        <input type="search" id="name-category" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                                        <button type="submit"><i class="absolute right-0 top-[6px] cursor-pointer fas fa-search text-black font-semibold pr-[15px] text-[20px] hover:text-[#588067] transition-all"></i></button>
                                    </li>
                                </div>
                                    <div class="flex items-center">
                                        <p class="text-gray-500 dark:text-gray-300">Sort</p>
                                        <select id="filter-product" class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                            <option value="#">Recommended</option>
                                            <option value="#">Price</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="list-product" class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                ${data.map((post) => /* html */`
                                    <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <a href="/#/products-detail/${post.id}"><img class="object-cover w-full rounded-md h-72 xl:h-80" src="${post.image}" alt="T-Shirt"></a>
                                        <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">${post.name}</h4>
                                        <p class="text-blue-500">${post.price_new}$</p>
                                    </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            ${Partners.render()}
            ${Footer.render()}
        `;
    },
    afterRender() {
        const key = $("input[type=\"search\"]");
        key.addEventListener("keyup", async () => {
            console.log(key.value);
            const { data } = await search(key.value);
            $("#list-product").innerHTML = data.map((post) => /* html */`
                <div key={post.id} class="rounded-sm">
                    <a href="/#/products-detail/${post.id}">
                        <img class="py-2" src="${post.image}" alt="">
                        <a href="/#/products-detail/${post.id}">${post.name}</a>
                        <p class="text-sm text-gray-500 py-[5px]">$${post.price_new}.00 </p>                  
                    </a>
                </div>
            `).join("");
        });
    },
};
export default ProductsCate;