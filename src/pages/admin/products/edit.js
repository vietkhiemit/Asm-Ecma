import axios from "axios";
import toastr from "toastr";
import { reRender } from "../../../utils";
import { get, update } from "../../../api/product";
import AdminNav from "../../../components/AdminNav";
import "toastr/build/toastr.min.css";

const AdminEditProducts = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Update Product: ${data.name}
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/products" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Back
                    </button>
                    </a>
                </div>
                </div>
        
            </div>
            </header>
    <main>

    <section class="max-w-7xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-5">
        <form action="" id="form-edit">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product's name</label>
                    <input id="title-post" value="${data.name}" placeholder="Title" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text">
                    </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="emailAddress">Image product</label>
                    <input type="file" 
                        id="image-post" 
                        placeholder="Image" 
                        class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value="${data.image}" >            
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Prices of unsold products</label>
                    <input id="price-post-old" value="${data.price_old}" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                    </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Prices have dropped</label>
                    <input id="price-post-new" value="${data.price_new}" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                </div>
                
            </div>
            <div class="w-full mt-4">
                    <img src="${data.image}" id="imgPreview" class="float-right w-2/5 h-48 rounded-2xl mt-5" />
                
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product description</label>
                            
                    <textarea id="desc-post" class="block w-1/2 h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                    <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Product</button></button>
            </div>

        
        </form>
    </section>       


    </main>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const imgPost = document.querySelector("#image-post");
        const imgPreview = document.querySelector("#imgPreview");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/fpt-polytechnic-sv/image/upload";
        const CLOUDINARY_PRESET = "vietkhiem";

        let imgLink = "";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // submit form
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                // Lấy giá trị của file upload cho sử dụng formData
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                // call API
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                });
                imgLink = data.url;
            }

            update({
                id,
                name: document.querySelector("#title-post").value,
                price_new: document.querySelector("#price-post-new").value,
                price_old: document.querySelector("#price-post-old").value,
                desc: document.querySelector("#desc-post").value,
                image: imgLink || imgPreview.src,
            });
            toastr.success("Update the product successfully");
            reRender(AdminEditProducts, "#app");
        });
    },
};
export default AdminEditProducts;