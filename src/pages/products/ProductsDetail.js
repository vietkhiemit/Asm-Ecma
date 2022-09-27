// import axios from "axios";
// import data from "../data";
import toastr from "toastr";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import { get } from "../../api/product";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const ProductsDetail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
            ${Nav.render()}                    
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
            <!-- Description Div -->
        
            <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white"></p>
                <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">${data.name}   </h2>

                <div class="flex flex-row justify-between mt-5">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg" alt="stars">
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg" alt="stars">
                    <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 dark:text-white duration-100 cursor-pointer">22 reviews</p>
                </div>
  
                <p class="font-normal text-base leading-6 text-gray-600  mt-7">${data.desc}</p>
                <ul class="flex font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-red-600">
                    <li class ="line-through px-4 py-2">Giá cũ ${data.price_old}$</li>
                    <li class ="px-4 py-2">Giá sale ${data.price_new}$</li>
                </ul>
  
                <div class="lg:mt-11 mt-10">
                    <div class="flex flex-row justify-between">
                        <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
                        <div class="flex">
                            <span onclick="minus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                            <input id="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                            <span onclick="plus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                        </div>
                    </div>
                    
                    
                    <hr class="bg-gray-200 w-full mt-4" />
                </div>
                
                    <button id ="btnAddToCart" class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Add to shopping bag</button>
                
            </div>

            <!-- Preview Images Div For larger Screen-->

            <div class="w-full sm:w-96 md:w-4/12 lg:w-4/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4 ml-10">
                <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                    <img src="${data.image}" alt="Wooden Chair Previw" />
                </div>
                <div class="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                    <div class="bg-gray-100 flex justify-center items-center py-4">
                        <img src="${data.image}" alt="Wooden chair - preview 1" />
                    </div>
                    <div class="bg-gray-100 flex justify-center items-center py-4">
                        <img src="${data.image}" alt="Wooden chair - preview 2" />
                    </div>
                    <div class="bg-gray-100 flex justify-center items-center py-4">
                        <img src="${data.image}" alt="Wooden chair- preview 3" />
                    </div>
                </div>
            </div>
            
            </div>
        </div>
        ${Footer.render()}
        
            `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const counter = document.querySelector("#counter");

        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: +counter.value }, () => {
                toastr.success("Add a successful product");
            });
        });
    },

};
export default ProductsDetail;