import toastr from "toastr";
import { reRender } from "../../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { $ } from "../../utils/selector";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
        ${Nav.render()}
        <div class= "max-w-7xl mx-auto">
            <body class="bg-gray-100">
            <div class="container mx-auto mt-10">
                <div class="flex shadow-md my-10">
                <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50 ">Your Shopping Cart</h1>
                </div>
                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-3/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-3/5 text-center">Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-3/5 text-center">Price</h3>
                </div>
                <tbody>
                    ${cart.map((item) => /* html */ `
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5"> <!-- product -->
                    <div class="w-20">
                        <img class="h-24" src="${item.image}" alt="">
                    </div>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">${item.name}</span>
                            <span class="text-red-500 text-xs">Lorem</span>
                            <button data-id="${item.id}" data-id="${item.id}"n class="btn btn-remove  font-semibold hover:text-red-500 text-gray-500 text-xs mr-auto">Remove</button>
                        </div>

                    </div>
                    <div class="flex justify-center w-1/5">

                    <div class="flex">
                            <span data-id="${item.id}" onclick="minus()" class="btn btn-decrease focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                            <input id="counter" value="${item.quantity}" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                            <span data-id="${item.id}" onclick="plus()" class="btn btn-increase focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                    </div>
                    
                    
                    </div>
                    <span class="text-center w-2/5 font-semibold text-sm pl-12 ">${item.price_new}$</span>
                </div>
                
                `).join("")}
                
        
                <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
                
                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                    Continue Shopping
                </a>
                </div>
        
                <div id="summary" class="w-1/4 px-8 py-11">
                    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    
                    
                    <div class="py-10">
                        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
                    </div>
                <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <p>Items: <span id="totalItem"></span></p>
                        <p>Total Price: <span id="totalPrice"></span> $</p>
                    </div>
                    <a href="/checkout"><button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></a>
                </div>
                </div>
            </div>
            </div>
                </tbody>
            </table>
            </div>
            ${Footer.render()}
        `;
    },

    afterRender() {
        const totalItem = $("#totalItem");
        const totalPrice = $("#totalPrice");

        let cart = [];
        let total = 0;
        let quantity = 0;

        cart = JSON.parse(localStorage.getItem("cart"));
        if (cart.length > 0) {
            cart.forEach((item) => {
                total += (+item.price_new) * (+item.quantity);
                quantity += item.quantity;
            });
            totalItem.innerHTML = quantity;
            totalPrice.innerHTML = total;
        }

        const btns = $(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("btn-increase")) {
                    totalItem.innerHTML = +totalItem.innerHTML + 1;
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Increase successfully");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    totalItem.innerHTML = +totalItem.innerHTML - 1;
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Decrease successfully");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Delete successfully");
                    });
                }
            });
        });
    },
};
export default CartPage;